'use strict';

const DolliDB = require('../../utils/DolliDB/build/main.min.js');

function getProductData(event, context, callback) {
  const params = event.pathParameters || {};
  const productID = params.id;
  const data = {};
  DolliDB.GetItem(process.env.PRODUCT_ITEM_TABLE, 'ID', productID, {
    ProjectionExpression: 'CreatedAt, #N, Price',
    ExpressionAttributeNames: {
      '#A': 'ID',
      '#N': 'Name',
    },
  }).then(item => {
    Object.assign(data, item);
    return DolliDB.GetData(process.env.PRODUCT_DATA_TABLE, productID);
  }).then(productData => {
    Object.assign(data, productData);
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        data,
      }),
    };
    callback(null, response);
  }).catch(e => {
    console.log(e);
    callback(null, {
      statusCode: 500,
      body: {
        message: JSON.stringify(e),
      },
    });
  });
}

module.exports = getProductData;
