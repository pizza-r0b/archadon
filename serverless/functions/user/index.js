'use strict';

const create = require('./create');
const login = require('./login');
const getUserData = require('./read');

module.exports = {
  createUser: create.createUser,
  createUserProfile: create.createUserProfile,
  getUserData,
  login,
};
