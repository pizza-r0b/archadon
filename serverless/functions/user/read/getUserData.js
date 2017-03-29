'use strict';

const verifyJwt = require('../../utils/verifyJwt');
const getUserByID = require('../../utils/getUserById');
const getUserProfile = require('../../utils/getUserProfile');

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
      return getUserByID(userID, {
        ProjectionExpression: 'Email',
      });
      // TODO:
      // get user favorites
      // get user orders
    }
  }).then(responseFromGetUserByID => {
    Object.assign(data, responseFromGetUserByID);
    return getUserProfile(userID);
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
    .catch(e => callback(new Error(`[401] Unauthorized ${JSON.stringify(e)}`)));
}

module.exports = getUserData;
