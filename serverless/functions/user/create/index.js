'use strict';

const DolliDB = require('../../utils/DolliDB/build/main.min.js');
const createJwt = require('../../utils/createJwt');
const getUserItemData = require('../../utils/getUserItemData');
const corsRes = require('../../utils/corsRes');

function createUser(event, context, callback) {
  const data = JSON.parse(event.body);

  const email = data.email;
  const password = data.password;
  // TODO: Add email validation
  if (!email || !password) {
    callback(null, corsRes({
      statusCode: 400,
    }));
    return;
  }

  // TODO: possibly make gsi1 an environment variable in serverless config
  DolliDB.GetItem(process.env.TABLE_NAME, 'Email', email, { IndexName: 'gsi1' }).then(user => {
    if (user) {
      return Promise.reject(JSON.stringify({ body: 'User already exists' }));
    } else {
      const userItemData = getUserItemData(email, password);
      return DolliDB.PutItem(process.env.TABLE_NAME, userItemData, null, { ID: userItemData.ID });
    }
  }).then(res => {
    const ID = res.meta.ID;
    const token = createJwt({ ID });
    callback(null, corsRes({
      statusCode: 200,
      body: JSON.stringify({ authToken: token, ID }),
    }));
  }).catch(e => {
    console.log(e);
    callback(null, corsRes({
      statusCode: 409,
      body: e,
    }));
  });
}

function listenToStreamAndcreateUserProfile(event, context, callback) {
  event.Records.forEach(record => {
    if (record.eventName === 'INSERT') {
      const Email = record.dynamodb.NewImage.Email.S;
      // TODO: send welcome email  via SES
    }
  });
  callback(null, `Successfully processed ${event.Records.length} records.`);
}

module.exports = {
  createUserProfile: listenToStreamAndcreateUserProfile,
  createUser,
};
