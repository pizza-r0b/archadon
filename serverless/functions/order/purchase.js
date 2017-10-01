// import "source-map-support/register"
import { toPaths } from 'utils/DolliDB/build/main.min.js';
import algolia from 'algoliasearch';
import addCors from 'utils/corsRes';
import _stripe from 'stripe';
import connect from 'utils/mongoConnect';
import { OrderItem, OrderData } from 'schemas/Order';
import { ProductItem } from 'schemas/Product';
import { sendOrderConfirmationEmailToCustomer, sendAdminEmail } from './sendEmails';

const stripe = _stripe(process.env.STRIPE_SECRET_KEY);

const {
  ALGOLIA_API_KEY,
  ALGOLIA_SECRET_KEY,
} = process.env;

const algoliaClient = algolia(ALGOLIA_API_KEY, ALGOLIA_SECRET_KEY);
const indexPrefix = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';
const indexName = `${indexPrefix}_Products`;
const index = algoliaClient.initIndex(indexName);

let processedItems;

const createCharge = (token, email, items) => new Promise((resolve, reject) => {
  processedItems = items;
  const price = items.reduce((initialPrice, item) => {
    initialPrice += item.Price;
    return initialPrice;
  }, 0);
  const priceInCents = 100 * price;
  stripe.charges.create({
    amount: Math.round(priceInCents),
    currency: 'usd',
    source: token,
    description: email,
  }, (err, charge) => {
    if (err) {
      return reject({ code: 'stripe-charge-failure', debug: err });
    }
    const {
      id: ChargeID,
      source: { brand: Brand, last4: Last4 },
    } = charge;

    resolve({
      price,
      ChargeID,
      Brand,
      Last4,
    });
  });
});

const createOrder = (Email, UserID) => (new OrderItem({
  UserID,
  Email,
})).save();

const putOrderData = (orderItemID, data) => {
  const orderData = toPaths(data).map(([Path, Value]) => ({ Path, Value, Item: orderItemID }));
  return OrderData.insertMany(orderData);
};

const notRequiredFields = ['address2'];

function validate(Items, CustomerData, Token) {
  const errors = { code: 'invalid-request', fields: [], hasErrors: false };
  if (Items.length === 0) {
    errors.fields.push('items');
  }
  if (!Token) {
    errors.fields.push('token');
  }
  Object.keys(CustomerData).forEach((name) => {
    const value = CustomerData[name];
    if (value === '' && !notRequiredFields.includes(name)) {
      errors.fields.push(name);
    }
  });
  if (errors.fields.length) {
    errors.hasErrors = true;
  }
  return errors;
}

async function _purchase(event, context, callback) {
  processedItems = null;
  const { Items = [], UserID = '', CustomerData = {}, Token = '' } = JSON.parse(event.body);
  const errors = validate(Items, CustomerData, Token);

  if (errors.hasErrors) {
    callback(null, addCors({
      statusCode: 400,
      body: JSON.stringify({
        error: errors,
      }),
    }));
    return;
  }

  let docs;
  try {
    docs = await ProductItem.find({
      _id: {
        $in: Items.map(item => item._id),
      },
    }).exec();
  } catch (e) {
    return callback(null, addCors({
      statusCode: 500,
      body: JSON.stringify({
        error: e,
      }),
    }));
  }

  const outOfStockItems = docs.filter(doc => doc.get('Qty') === 0);
  if (outOfStockItems.length > 0) {
    return callback(null, addCors({
      statusCode: 200,
      body: JSON.stringify({
        message: 'out of stock',
        outOfStockItems,
      }),
    }));
  }

  const { price, ChargeID, Brand, Last4 } = await createCharge(Token, CustomerData.email, docs);

  let order;

  try {
    order = await createOrder(CustomerData.email, UserID);
  } catch (e) {
    return callback(null, addCors({
      statusCode: 500,
      body: JSON.stringify({
        error: e,
        code: 'charged-but-not-ordered',
      }),
    }));
  }

  const id = order.get('_id');

  try {
    await putOrderData(id, {
      Price: price,
      ChargeID,
      Brand,
      Last4,
      CustomerData,
      Items: processedItems,
      ChargeType: 'stripe',
    });

    await sendOrderConfirmationEmailToCustomer(processedItems, CustomerData, price, id);
    await sendAdminEmail(processedItems, CustomerData, price, id, ChargeID);

    callback(null, addCors({
      statusCode: 200,
      body: JSON.stringify({
        message: 'done',
        id,
      }),
    }));


  } catch (e) {
    return callback(null, addCors({
      statusCode: 500,
      body: JSON.stringify({
        error: e,
        code: 'charged-but-not-ordered',
      }),
    }));
  }
}

export const purchase = connect(process.env.MONGO_URI, _purchase);
