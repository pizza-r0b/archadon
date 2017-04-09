'use strict';

const verifyJwt = require('../../utils/verifyJwt');
const DolliDB = require('../../utils/DolliDB/build/main.min.js');

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
  verifyJwt(token, userID).then(ID => DolliDB.GetItem(process.env.USER_TABLE, 'ID', ID))
    .then(user => new Promise((resolve, reject) => {
      DolliDB.docClient.update({
        TableName: process.env.USER_TABLE,
        Key: {
          ID: user.ID,
        },
        ExpressionAttributeValues: {
          ':e': email,
        },
        UpdateExpression: 'set Email = :e',
      }, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
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
