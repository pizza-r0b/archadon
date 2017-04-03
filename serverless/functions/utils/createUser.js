'use strict';

const putItem = require('./putItem');
const bcrypt = require('bcrypt-nodejs');
const uuidV1 = require('uuid/v1');
const DolliDB = require('./DolliDB/build/main.min.js');

const table = process.env.TABLE_NAME;
const PutUser = putItem(table);

const getUserItemConfig = (email, password) => ({
  Item: {
    Password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
    Email: email,
    ItemID: uuidV1(),
  },
});

exports.getUserItemConfig = getUserItemConfig;

exports.create = (email, password) => {
  const params = getUserItemConfig(email, password);
  return PutUser(params, { ItemID: params.Item.ItemID });
};
