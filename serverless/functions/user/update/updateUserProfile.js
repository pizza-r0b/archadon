import verifyJwt from 'utils/verifyJwt';
import addCorsHeaders from 'utils/corsRes';
import connect from 'utils/mongoConnect';
import { UserItem, UserData } from 'schemas/User';
import { getFavoriteDocuments } from '../read/getFavorites';
import { toPaths } from 'utils/DolliDB/build/main.min.js';
import getDeletedDiff from 'utils/DolliDB/src/utils/getDeleted';

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
      const deleteStatements = [];
      if (data.Favorites) {
        const preFavorites = await getFavoriteDocuments(ID);
        if (data.Favorites.length < preFavorites.length) {
          if (!data.Favorites.length) {
            deleteStatements.push({
              deleteMany: {
                filter: { Item: ID, Path: { $regex: '^Favorites' } },
              },
            });
          } else {
            deleteStatements.push(
              ...Object.keys(getDeletedDiff(preFavorites, data.Favorites)).map((index) => ({
                deleteOne: {
                  filter: { Item: ID, Path: `Favorites.${index}` },
                },
              }))
            );
          }
        }
      }
      const bulkWriteStatements = toPaths(data).map(([Path, Value]) => ({
        updateOne: {
          filter: { Item: ID, Path },
          update: { Value },
          upsert: true,
        },
      }));

      if (deleteStatements.length) {
        bulkWriteStatements.unshift(...deleteStatements);
      }

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
      body: JSON.stringify({ error: e.message }),
    }));
  }
}

export const updateUserProfile = connect(_updateUserProfile);
