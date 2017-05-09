'use strict';

const verifyJwt = require('../../utils/verifyJwt');
const corsHeaders = require('../../utils/corsRes');
const DolliDB = require('../../utils/DolliDB/build/main.min.js');

function getUserData(event, context, callback) {
  const token = event.headers.authtoken;
  const params = event.pathParameters || {};
  const userID = params.id;
  if (!token) {
    return callback(null, corsHeaders({
      statusCode: 401,
    }));
  }
  const data = {};
  verifyJwt(token, userID).then(ID => {
    if (ID !== userID) {
      Promise.reject('Token rejected');
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
    const response = corsHeaders({
      statusCode: 200,
      body: JSON.stringify({
        data,
      }),
    });
    callback(null, response);
  })
    .catch(e => callback(null, corsHeaders({ statusCode: 401, body: e })));
}

module.exports = getUserData;
