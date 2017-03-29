'use strict';

const update = require('../../utils/updateItem');
const getUserById = require('../../utils/getUserById');
const verifyJwt = require('../../utils/verifyJwt');
const updateUser = update(process.env.USER_TABLE);

function updateUserEmail(event, context, callback) {
  const data = JSON.parse(event.body);
  const email = data.email;
  const token = event.headers.authtoken;
  const params = event.pathParameters || {};
  const userID = params.id;
  if (!token) {
    const response = {
      statusCode: 401,
    };
    return callback(null, response);
  }
  verifyJwt(token, userID).then(ID => getUserById(ID))
    .then(user => updateUser({
      Key: {
        ID: user.ID,
      },
      ExpressionAttributeValues: {
        ':e': email,
      },
      UpdateExpression: 'set Email = :e',
    }))
    .then(() => {
      const response = {
        statusCode: 200,
      };
      callback(null, response);
    })
    .catch(() => {
      const response = {
        statusCode: 401,
        body: JSON.stringify({
          message: 'Unauthorized',
        }),
      };
      callback(null, response);
    });
}

module.exports = updateUserEmail;
