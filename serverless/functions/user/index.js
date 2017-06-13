'use strict';

const create = require('./create');
const login = require('./login');
const getUserData = require('./read/getUserData');
const updateUserPassword = require('./update/updateUserPassword');
const updateUserEmail = require('./update/updateUserEmail');
const updateUserProfile = require('./update/updateUserProfile');
// const deleteUserData = require('./delete/deleteData');

module.exports = {
  createUser: create.createUser,
  onUserCreate: create.onUserCreate,
  updateUserPassword,
  updateUserProfile,
  updateUserEmail,
  getUserData,
  login,
  // deleteUserData,
};
