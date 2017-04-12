'use strict';

const user = require('./user');
const product = require('./product');

module.exports = {
  // user
  createUser: user.createUser,
  createUserProfile: user.createUserProfile,
  loginUser: user.login,
  getUserData: user.getUserData,
  updateUserPassword: user.updateUserPassword,
  updateUserEmail: user.updateUserEmail,
  updateUserProfile: user.updateUserProfile,
  // products
  updateProductData: product.updateData,
  createProduct: product.create,
  getProductData: product.getProductData,
};
