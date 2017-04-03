'use strict';

const FindOne = require('../../utils/findOne');
const findOneUser = FindOne(process.env.TABLE_NAME);
const createUserUtils = require('../../utils/createUser');
const createUserProfile = require('../../utils/createUserProfile');
const createJwt = require('../../utils/createJwt');

function createUser(event, context, callback) {
  const data = JSON.parse(event.body);

  const email = data.email;
  const password = data.password;
  // TODO: Add email validation
  if (!email || !password) {
    callback(null, {
      statusCode: 400,
    });
    return;
  }

  findOneUser('Email', email, { IndexName: 'userGsi1' }).then(user => {
    if (user) {
      return Promise.reject(JSON.stringify({ message: 'User already exists' }));
    } else {
      return createUserUtils.create(email, password);
    }
  }).then(res => {
    const ItemID = res.meta.ItemID;
    const token = createJwt({ ItemID });
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ authToken: token, ItemID }),
    });
  }).catch(e => {
    console.log(e);
    callback(null, {
      statusCode: 409,
      body: e,
    });
  });
}

function listenToStreamAndcreateUserProfile(event, context, callback) {
  event.Records.forEach(record => {
    if (record.eventName === 'INSERT') {
      const UserID = record.dynamodb.Keys.ItemID.S;
      createUserProfile(UserID).then(() => {
        callback(null, JSON.stringify({ success: true }));
      }).catch(e => {
        callback(e);
      });
    }
  });
  callback(null, `Successfully processed ${event.Records.length} records.`);
}

module.exports = {
  createUserProfile: listenToStreamAndcreateUserProfile,
  createUser,
};
