import connect from 'utils/mongoConnect';
import comparePassword from 'utils/comparePassword';
import verifyJwt from 'utils/verifyJwt';
import { UserItem } from 'schemas/User';
import addCorsHeaders from 'utils/corsRes';

async function _updateUserPassword(event, context, callback) {
  if (event.source === 'serverless-plugin-warmup') {
    return callback();
  }

  let data;
  try {
    data = JSON.parse(event.body);
  } catch (e) {
    data = event.body;
  }
  const candidatePassword = data.password;
  const newPassword = data.newPassword;
  const token = event.headers.authtoken;
  const params = event.pathParameters || {};
  const userID = params.id;
  if (!token) {
    const response = {
      statusCode: 401,
    };
    return callback(null, response);
  }

  try {
    const ID = await verifyJwt(token, userID);
    const user = await UserItem.findById(ID).exec();
    if (user) {
      if (candidatePassword && newPassword && comparePassword(candidatePassword, user.get('Password'))) {
        user.set({ Password: newPassword });
        await user.save();
        const response = {
          statusCode: 200,
        };
        callback(null, addCorsHeaders(response));
      } else {
        throw new Error();
      }
    } else {
      throw new Error('User not found');
    }
  } catch (e) {
    const response = {
      statusCode: 401,
      body: JSON.stringify({
        error: e,
      }),
    };
    callback(null, addCorsHeaders(response));
  }
}

export const updateUserPassword = connect(_updateUserPassword);
