'use strict';

const verifyJwt = require('../../utils/verifyJwt');
const DolliDB = require('../../utils/DolliDB/build/main.min.js');

function getUserData(event, context, callback) {
  const token = event.headers.authtoken;
  const params = event.pathParameters || {};
  const userID = params.id;
  if (!token) {
    return callback(new Error('[401] Unauthorized'));
  }
  const data = {};
  verifyJwt(token, userID).then(ID => {
    if (ID !== userID) {
      Promise.reject('Token decoded, not a match');
    } else {
      return DolliDB.GetItem(process.env.USER_TABLE, 'ID', userID, {
        ProjectionExpression: 'Email',
      });
      // TODO:
      // get user favorites
      // get user orders
    }
  }).then(responseFromGetUserByID => {
    Object.assign(data, responseFromGetUserByID);
    return DolliDB.GetData(process.env.USER_PROFILE_TABLE, userID);
  }).then(responseFromGetUserProfile => {
    Object.assign(data, responseFromGetUserProfile);
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        data,
      }),
    };
    callback(null, response);
  })
    .catch(e => callback(null, { statusCode: 401 }));
}

module.exports = getUserData;
