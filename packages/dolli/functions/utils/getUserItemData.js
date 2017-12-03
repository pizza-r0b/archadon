'use strict';

const bcrypt = require('bcrypt-nodejs');
const uuidV1 = require('uuid/v1');

const getUserItemConfig = (email, password) => ({
  Password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
  Email: email,
  ID: uuidV1(),
});

module.exports = getUserItemConfig;

