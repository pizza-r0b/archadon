'use strict';

const verifyJwt = require('../../utils/verifyJwt');
const DolliDB = require('../../utils/DolliDB/build/main.min.js');
const addCorsHeaders = require('../../utils/corsRes');

function updateUserProfile(event, context, callback) {
  let body;
  try {
    body = JSON.parse(event.body);
  } catch (e) {
    const response = addCorsHeaders({
      statusCode: 400,
    });
    return callback(null, response);
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
  verifyJwt(token, userID)
    .then(ID => DolliDB.PutData(process.env.USER_PROFILE_TABLE, ['ItemID', ID], data))
    .then(() => {
      callback(null, addCorsHeaders({
        statusCode: 200,
      }));
    }).catch(e => {
      console.log('ERROR', e); // eslint-disable-line
      callback(null, addCorsHeaders({
        statusCode: 500,
        body: JSON.stringify(e),
      }));
    });
}

module.exports = updateUserProfile;
