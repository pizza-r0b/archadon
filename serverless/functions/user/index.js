'use strict';

const create = require('./create');
const login = require('./login');
const getUserData = require('./read/getUserData');
const updateUserPassword = require('./update/updateUserPassword');
const updateUserEmail = require('./update/updateUserEmail');
const updateUserProfile = require('./update/updateUserProfile').updateUserProfile;

module.exports = {
  createUser: create.createUser,
  createUserProfile: create.createUserProfile,
  updateUserPassword,
  updateUserProfile,
  updateUserEmail,
  getUserData,
  login,
};
