'use strict';

const FindOne = require('../../utils/findOne');
const findOneUser = FindOne(process.env.TABLE_NAME);
const comparePassword = require('../../utils/comparePassword');
const createJwt = require('../../utils/createJwt');

function login(event, context, callback) {
  const data = JSON.parse(event.body);
  const email = data.email;
  const password = data.password;
  if (!email || !password) {
    callback(new Error('[BadRequest]'));
    return;
  }
  findOneUser('Email', email, { IndexName: 'userGsi1' }).then(user => {
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
  });
}

module.exports = login;
