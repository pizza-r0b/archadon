import verifyJwt from 'utils/verifyJwt';
import corsHeaders from 'utils/corsRes';
import { fromPaths } from 'utils/DolliDB/build/main.min.js';
import { OrderData, OrderItem } from 'schemas/Order';
import { UserData } from 'schemas/User';
import connect from 'utils/mongoConnect';

export async function _getUserData(event, context, callback) {
  const token = event.headers.authtoken;
  const params = event.pathParameters || {};
  const userID = params.id;

  if (!token) {
    return callback(null, corsHeaders({
      statusCode: 401,
    }));
  }

  const data = {};
  let _id;

  try {
    _id = await verifyJwt(token, userID);
  } catch(e) {
    return callback(null, corsHeaders({
      statusCode: 401,
    }));
  }

  const docs = await UserData.find({ Item: _id }).lean().populate('Item').exec();
  const item = docs[0].Item;
  const userData = {
    ...fromPaths(docs.map(({ Path, Value }) => [Path, Value])),
    ...item,
  };

  const orderItems = await OrderItem.find({ Email: item.Email }).lean().exec();
  const orders = await Promise.all(orderItems.map(async (item) => {
    const { _id } = item;
    const data = await OrderData.find({ Item: _id }).lean().exec();
    return {
      ...fromPaths(data.map(({ Path, Value }) => [Path, Value])),
      ...item,
    };
  }));

  const response = corsHeaders({
    statusCode: 200,
    body: JSON.stringify({
      data: {
        ...userData,
        orders
      }
    }),
  });

  callback(null, response);
}

export const getUserData = connect(_getUserData);
