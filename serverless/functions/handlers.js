'use strict';

const user = require('./user');

module.exports = {
  createUser: user.createUser,
  createUserProfile: user.createUserProfile,
  loginUser: user.login,
  getUserData: user.getUserData,
};
