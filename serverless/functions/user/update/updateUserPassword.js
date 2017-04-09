'use strict';

const comparePassword = require('../../utils/comparePassword');
const verifyJwt = require('../../utils/verifyJwt');
const bcrypt = require('bcrypt-nodejs');
const DolliDB = require('../../utils/DolliDB/build/main.min.js');

function updateUserPassword(event, context, callback) {
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
  verifyJwt(token, userID).then(ID => DolliDB.GetItem(process.env.USER_TABLE, 'ID', ID))
    .then(user => {
      if (candidatePassword && newPassword && comparePassword(candidatePassword, user.Password)) {
        return new Promise((resolve, reject) => {
          DolliDB.docClient.update({
            TableName: process.env.USER_TABLE,
            Key: {
              ID: user.ID,
            },
            ExpressionAttributeNames: {
              '#p': 'Password',
            },
            ExpressionAttributeValues: {
              ':p': bcrypt.hashSync(newPassword, bcrypt.genSaltSync(10)),
            },
            UpdateExpression: 'SET #p = :p',
          }, (err, res) => {
            if (err) {
              reject(err);
            } else {
              resolve(res);
            }
          });
        });
      } else {
        Promise.reject();
      }
    })
    .then(() => {
      const response = {
        statusCode: 200,
      };
      callback(null, response);
    })
    .catch((e) => {
      const response = {
        statusCode: 401,
        body: JSON.stringify({
          message: e,
        }),
      };
      callback(null, response);
    });
}

module.exports = updateUserPassword;
