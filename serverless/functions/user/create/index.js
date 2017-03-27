'use strict';

const FindOne = require('../../utils/findOne');
const findOneUser = FindOne(process.env.TABLE_NAME);
const createUserUtils = require('../../utils/createUser');
const createJwt = require('../../utils/createJwt');

function createUser(event, context, callback) {
  const data = event.body;
  const email = data.email;
  const password = data.password;
  // TODO: Add email validation
  if (!email || !password) {
    callback(new Error('[BadRequest]'));
    return;
  }

  findOneUser('Email', email, { IndexName: 'userGsi1' }).then(user => {
    if (user) {
      return Promise.reject(JSON.stringify({ success: false, message: 'User already exists' }));
    } else {
      return createUserUtils.create(email, password);
    }
  }).then(res => {
    const ID = res.meta.ID;
    const token = createJwt({ ID });
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ authToken: token }),
    });
  }).catch(e => {
    callback(e);
  });
}

module.exports = createUser;
