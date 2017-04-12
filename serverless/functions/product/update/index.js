'use strict';

const DolliDB = require('../../utils/DolliDB/build/main.min.js');
const verifyGodMode = require('../../utils/verifyGodMode');

const PRODUCT_DATA_TABLE = process.env.PRODUCT_DATA_TABLE;

function updateProductData(event, context, callback) {
  let data;
  try {
    data = JSON.parse(event.body);
  } catch (e) {
    data = event.body;
  }

  const token = event.headers.authtoken;
  const params = event.pathParameters || {};
  const productID = params.id;

  if (!token) {
    callback(null, {
      statusCode: 401,
    });
    return;
  }

  verifyGodMode(token).then(item => {
    if (!item.GodMode) {
      return Promise.reject({
        statusCode: 401,
      });
    }
    return DolliDB.PutData(PRODUCT_DATA_TABLE, ['ItemID', productID], data);
  })
    .then(() => {
      callback(null, {
        statusCode: 200,
      });
    })
    .catch(e => {
      console.log(e);
      callback(null, {
        statusCode: e.statusCode || 500,
      });
    });
}

module.exports = updateProductData;
