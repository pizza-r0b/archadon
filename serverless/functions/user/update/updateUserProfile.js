import verifyJwt from 'utils/verifyJwt';
import addCorsHeaders from 'utils/corsRes';
import connect from 'utils/mongoConnect';
import { UserItem, UserData } from 'schemas/User';
import { toPaths } from 'utils/DolliDB/build/main.min.js';

async function _updateUserProfile(event, context, callback) {
  let body;
  try {
    body = JSON.parse(event.body);
  } catch (e) {
    body = event.body;
  }

  const data = body.data;

  if (!data) {
    const response = addCorsHeaders({
      statusCode: 400,
    });
    return callback(null, response);
  }

  const token = event.headers.authtoken;
  const params = event.pathParameters || {};
  const userID = params.id;
  if (!token || !userID) {
    const response = addCorsHeaders({
      statusCode: 401,
    });
    return callback(null, response);
  }

  try {
    const ID = await verifyJwt(token, userID);
    const user = await UserItem.findById(ID).exec();
    if (user) {
      const bulkWriteStatements = toPaths(data).map(([Path, Value]) => ({
        updateOne: {
          filter: { Item: user.get('_id'), Path },
          update: { Value },
          upsert: true,
        },
      }));

      await UserData.bulkWrite(bulkWriteStatements);

      callback(null, addCorsHeaders({
        statusCode: 200,
      }));
    } else {
      throw new Error('User not found');
    }
  } catch (e) {
    callback(null, addCorsHeaders({
      statusCode: 401,
      body: JSON.stringify({ error: e }),
    }));
  }
}

export const updateUserProfile = connect(process.env.MONGO_URI, _updateUserProfile);
