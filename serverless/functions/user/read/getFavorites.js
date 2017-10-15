import verifyJwt from 'utils/verifyJwt';
import corsHeaders from 'utils/corsRes';
import { UserData } from 'schemas/User';
import getProductById from 'utils/getProductById';
import connect from 'utils/mongoConnect';

export async function _getUserFavorites(event, context, callback) {
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

  const docs = await UserData.find({
    Item: _id,
    Path: { $regex: '^Favorites' },
  }).lean().exec();

  const promises = docs.map(async ({ Value }) => {
    if (Value) {
      const product = await getProductById(Value);
      return product;
    }
  });

  const favorites = await Promise.all(promises);

  const response = corsHeaders({
    statusCode: 200,
    body: JSON.stringify({
      data: {
        favorites,
      },
    }),
  });

  callback(null, response);
}

export const getUserFavorites = connect(_getUserFavorites);
