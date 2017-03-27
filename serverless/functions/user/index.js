'use strict';

const create = require('./create');
const login = require('./login');

module.exports = {
  createUser: create.createUser,
  createUserProfile: create.createUserProfile,
  login,
};
