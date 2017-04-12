'use strict';

const DolliDB = require('../../utils/DolliDB/build/main.min.js');

function getProductData(event, context, callback) {
  const params = event.pathParameters || {};
  const productID = params.id;

}

module.exports = getProductData;
