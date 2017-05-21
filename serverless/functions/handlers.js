'use strict';

const user = require('./user');
const product = require('./product');
const purchase = require('./purchase');

module.exports = {
  // user
  createUser: user.createUser,
  createUserProfile: user.createUserProfile,
  loginUser: user.login,
  getUserData: user.getUserData,
  updateUserPassword: user.updateUserPassword,
  updateUserEmail: user.updateUserEmail,
  updateUserProfile: user.updateUserProfile,
  deleteUserData: user.deleteUserData,
  // products
  updateProductData: product.updateData,
  createProduct: product.create,
  getProductData: product.getProductData,
  getProductList: product.getProductList,
  getBatch: product.getBatch,
  // orders
  purchase,
};
