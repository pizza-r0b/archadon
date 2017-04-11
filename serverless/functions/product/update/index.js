'use strict';

const DolliDB = require('../../utils/DolliDB/build/main.min.js');
const verifyGodMode = require('../../utils/verifyGodMode');
const uuid = require('uuid/v1');

const PRODUCT_TABLE = process.env.PRODUCT_TABLE;

function updateProductData(event, context, callback) {
  let data;
  try {
    data = JSON.parse(event.body);
  } catch (e) {
    data = event.body;
  }
  const name = data.name;
  const price = data.price;
  const token = event.headers.authtoken;

  if (!token) {
    callback(null, {
      statusCode: 401,
    });
    return;
  }

  verifyGodMode(token).then(item => {
    if (!item.GodMode) {

    }
  }).catch(e => {
    callback(null, {
      statusCode: e.statusCode || 500,
    });
  });
}

module.exports = updateProductData;
