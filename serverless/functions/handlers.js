'use strict';

const user = require('./user');
const product = require('./product');

module.exports = {
  createUser: user.createUser,
  createUserProfile: user.createUserProfile,
  loginUser: user.login,
  getUserData: user.getUserData,
  updateUserPassword: user.updateUserPassword,
  updateUserEmail: user.updateUserEmail,
  updateUserProfile: user.updateUserProfile,

  createProduct: product.create,
};
