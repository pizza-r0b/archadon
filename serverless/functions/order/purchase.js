const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const addCors = require('../utils/corsRes');
const DolliDB = require('../utils/DolliDB/build/main.min.js');
const uuid = require('uuid/v1');

const { ORDER_ITEM_TABLE, ORDER_DATA_TABLE, PRODUCT_ITEM_TABLE, PRODUCT_DATA_TABLE } = process.env;

let processedItems;

const verifyItemInStock = items => new Promise((resolve, reject) => {
  const outOfStock = items.filter(item => item.Qty === 0);
  if (outOfStock.length) {
    return reject({
      code: 'out-of-stock',
      items: outOfStock,
    });
  } else {
    return resolve(items);
  }
});

const createCharge = ({ token, email }) => (items) => new Promise((resolve, reject) => {
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

const createOrder = (CustomerData, UserID) => ({ price, ChargeID, Brand, Last4 }) => new Promise((resolve, reject) => {
  const ID = uuid();
  console.log(JSON.stringify({
    ID,
    UserID,
    Email: CustomerData.email,
  }));
  DolliDB.PutItem(ORDER_ITEM_TABLE, {
    ID,
    UserID,
    CreatedAt: Date(),
    Status: 'Processing',
    Email: CustomerData.email,
  }, null)
    .then(() => resolve({ ID, price, ChargeID, Brand, Last4, CustomerData }))
    .catch(e => reject({
      code: 'order-creation-failure',
      debug: e,
    }));
});

const putOrderData = Items => ({ ID, price, ChargeID, Brand, CustomerData, Last4 }) => new Promise((resolve, reject) => {
  const promises = [];

  Items.forEach(item => {
    if (typeof item.Qty !== 'undefined') {
      const data = {
        Qty: item.Qty - 1,
      };
      promises.push(DolliDB.PutData(PRODUCT_DATA_TABLE, ['ItemID', item.ID], data));
    }
  });

  Promise.all(promises).then(() => {
    return DolliDB.PutData(ORDER_DATA_TABLE, ['ItemID', ID], {
      Price: price,
      ChargeID,
      Brand,
      Last4,
      CustomerData,
      Items: processedItems,
      ChargeType: 'stripe',
    });
  }).then(() => resolve({ ID }))
    .catch(e => reject({ code: 'order-creation-failure', debug: e }));
});


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


function purchase(event, context, callback) {
  let body;
  try {
    body = JSON.parse(event.body);
  } catch (e) {
    console.log(e);
    callback(null, addCors({
      statusCode: 500,
      body: JSON.stringify({
        error: e,
      }),
    }));
    return;
  }

  const { Items = [], UserID = '', CustomerData = {}, Token = '' } = body;

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

  // get the actual price based on the products in the array
  // entails fetching product data from database
  // make sure product is available
  DolliDB.GetBatch(process.env.PRODUCT_ITEM_TABLE, Items.map(item => item.ID))
    .then(({ Responses }) => {
      const items = Responses[PRODUCT_ITEM_TABLE] || [];
      const promises = items.map((item) => new Promise((_resolve, _reject) => {
        DolliDB.GetData(process.env.PRODUCT_DATA_TABLE, item.ID).then(productData => {
          delete item.CreatedBy;
          _resolve(Object.assign({}, item, productData));
        }).catch(e => _reject(e));
      }));
      return Promise.all(promises);
    })
    .then(verifyItemInStock)
    .then(createCharge({ token: Token, email: CustomerData.email }))
    .then(createOrder(CustomerData, UserID))
    .then(putOrderData(Items))
    .then(({ ID }) => {
      // send email to customer
      // send email to order fulfillment
      // mark all items as purchased
      callback(null, addCors({
        statusCode: 200,
        body: JSON.stringify({
          success: true,
          OrderID: ID,
        }),
      }));
    })
    .catch(e => {
      console.log(e);
      if (e && e.code === 'order-creation-failure') {
        // send email
        // they were charged, but order not created
      }
      callback(null, addCors({
        statusCode: 500,
        body: JSON.stringify({
          error: e,
        }),
      }));
    });
}

module.exports = purchase;
