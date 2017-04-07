'use strict';

const verifyJwt = require('../../utils/verifyJwt');
const Put = require('../../utils/Put');

function updateUserProfile(event, context, callback) {
  let body;
  try {
    body = JSON.parse(event.body);
  } catch (e) {
    const response = {
      statusCode: 400,
    };
    return callback(null, response);
  }

  const data = body.data;

  if (!data) {
    const response = {
      statusCode: 400,
    };
    return callback(null, response);
  }

  const token = event.headers.authtoken;
  const params = event.pathParameters || {};
  const userID = params.id;
  if (!token || !userID) {
    const response = {
      statusCode: 401,
    };
    return callback(null, response);
  }
  verifyJwt(token, userID)
    .then(ID => Put(process.env.USER_PROFILE_TABLE, ['ItemID', ID], data))
    .then(() => {
      callback(null, {
        statusCode: 200,
      });
    }).catch(e => {
      console.log('ERROR', e); // eslint-disable-line
      callback(null, {
        statusCode: 500,
        body: JSON.stringify(e),
      });
    });
}

module.exports = updateUserProfile;
