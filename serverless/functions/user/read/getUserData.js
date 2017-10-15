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

  let _id;

  try {
    _id = await verifyJwt(token, userID);
  } catch (e) {
    return callback(null, corsHeaders({
      statusCode: 401,
    }));
  }

  const docs = await UserData.find({ Item: _id }).lean().populate('Item').exec();
  let userData = {};
  let userItem = {};

  if (docs.length > 0) {
    userItem = docs[0].Item;
    userData = {
      ...fromPaths(docs.map(({ Path, Value }) => [Path, Value])),
      ...userItem,
    };
  }

  const orderItems = userItem.Email ? await OrderItem.find({ Email: userItem.Email }).lean().exec() : [];
  const orders = [];

  if (orderItems.length > 0) {
    const orderDocs = await Promise.all(orderItems.map(async (item = {}) => {
      const { _id: itemId } = item;
      const data = await OrderData.find({ Item: itemId }).lean().exec();

      return {
        ...fromPaths(data.map(({ Path, Value }) => [Path, Value])),
        ...item,
      };
    }));

    orders.push(...orderDocs);
  }

  const response = corsHeaders({
    statusCode: 200,
    body: JSON.stringify({
      data: {
        ...userData,
        orders,
      },
    }),
  });

  callback(null, response);
}

export const getUserData = connect(_getUserData);
