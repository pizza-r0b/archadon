'use strict';

const DolliDB = require('../../utils/DolliDB/build/main.min.js');
const createJwt = require('../../utils/createJwt');
const corsRes = require('../../utils/corsRes');
const sendMail = require('../../utils/sendMail');
const connect = require('../../utils/mongoConnect');

const { UserItem, UserData } = require('../../../schemas/User');

function getRest(...args) {
  const data = args[args.length - 1];
  const out = {};
  const keys = Object.keys(data).filter(key => args.indexOf(key) === -1);
  keys.forEach(key => {
    out[key] = data[key];
  });

  return out;
}

function createUser(event, context, callback) {
  let data;
  try {
    data = JSON.parse(event.body);
  } catch (e) {
    data = event.body;
  }
  const { email: Email, password: Password } = data;
  const rest = getRest('email', 'password', data);

  console.log(Email, Password);

  // TODO: Add email validation
  if (!Email || !Password) {
    callback(null, corsRes({
      statusCode: 400,
    }));
    return;
  }

  let _id;

  return UserItem.findOne({ Email }).exec()
    .then(doc => {
      console.log(`findOne complete found ${doc}`);
      if (doc) {
        return Promise.reject(JSON.stringify({ body: 'User already exists' }));
      }

      const userItem = new UserItem({
        Email,
        Password,
      });

      return userItem.save();
    })
    .then(doc => {
      console.log(`User item saved ${doc}`);
      console.log(Object.keys(rest).length);
      console.log(rest);
      if (Object.keys(rest).length > 0) {
        console.log('Put data');
        _id = doc.get('_id');
        const userData = DolliDB.toPaths(rest).map(([Path, Value]) => ({ Path, Value, Item: _id }));
        console.log(userData);
        return UserData.insertMany(userData);
      } else {
        console.log('RESOLVE WE ARE DONE');
        return Promise.resolve();
      }
    })
    .then(() => {
      console.log('create jwt');
      const token = createJwt({ ID: _id });
      console.log('token created');
      onUserCreate(Email);
      return callback(null, corsRes({
        statusCode: 200,
        body: JSON.stringify({ authToken: token, ID: _id }),
      }));
    })
    .catch(e => {
      console.log('There was an error');
      console.log(e);
      callback(null, corsRes({
        statusCode: 409,
        body: e,
      }));
    });
}

function onUserCreate(email) {
  return sendMail({
    to: email,
    subject: '❤️😁 Rugs await!! Your New Archadon.com Account 🙌',
    template: 'new-user',
    from: 'welcome@archadon.com',
    context: {
      email,
    },
  }).then(info => {
    console.log('New User Created');
    console.log(info);
    return Promise.resolve();
  }).catch(err => {
    console.log('New User Error');
    return Promise.reject(err);
  });
}

module.exports = {
  onUserCreate,
  createUser: connect(process.env.MONGO_URI, createUser),
};
