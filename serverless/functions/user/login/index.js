'use strict';

const comparePassword = require('../../utils/comparePassword');
const createJwt = require('../../utils/createJwt');
const DolliDB = require('../../utils/DolliDB/build/main.min.js');

function login(event, context, callback) {
  let data;

  // try catch for testing, body is JSON when actually on AWS
  // but not JSON when testing locally
  try {
    data = JSON.parse(event.body);
  } catch (e) {
    data = event.body;
  }

  const email = data.email;
  const password = data.password;
  if (!email || !password) {
    callback(new Error('[BadRequest]'));
    return;
  }
  DolliDB.GetItem(process.env.TABLE_NAME, 'Email', email, { IndexName: 'gsi1' })
    .then(user => {
      if (user) {
        const hash = user.Password;
        const ID = user.ID;
        const isMatch = comparePassword(password, hash);
        if (isMatch) {
          const token = createJwt({ ID });
          const response = {
            statusCode: 200,
            body: JSON.stringify({ authToken: token, ID }),
          };
          callback(null, response);
        } else {
          callback(null, { statusCode: 401 });
        }
      } else {
        callback(null, { statusCode: 404 });
      }
    }).catch(e => {
      console.log(e);
      callback(null, { statusCode: 500, body: e });
    });
}

module.exports = login;
