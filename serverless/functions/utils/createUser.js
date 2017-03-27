'use strict';

const putItem = require('./putItem');
const bcrypt = require('bcrypt-nodejs');
const uuidV1 = require('uuid/v1');

const table = process.env.TABLE_NAME;
const PutUser = putItem(table);

const getUserItemConfig = (email, password) => ({
  Item: {
    Password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
    Email: email,
    ID: uuidV1(),
  },
});

exports.getUserItemConfig = getUserItemConfig;

exports.create = (email, password) => {
  const params = getUserItemConfig(email, password);
  return PutUser(params, { ID: params.Item.ID });
};
