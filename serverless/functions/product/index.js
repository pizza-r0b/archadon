'use strict';

const create = require('./create');
const updateData = require('./update');
const getProductData = require('./read');
const getProductList = require('./read/productList');

module.exports = {
  create,
  updateData,
  getProductData,
  getProductList,
};
