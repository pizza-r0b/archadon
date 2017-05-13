'use strict';

const cors = require('../../utils/corsRes');
const DolliDB = require('../../utils/DolliDB/build/main.min.js');

function getProductList(event, context, callback) {
  new Promise((resolve, reject) => {
    const { queryStringParameters } = event;
    const scanParams = {
      TableName: process.env.PRODUCT_ITEM_TABLE,
      Limit: 10,
    };
    if (queryStringParameters && queryStringParameters.startKey) {
      scanParams.ExclusiveStartKey = {
        ID: queryStringParameters.startKey,
      };
    }
    DolliDB.docClient.scan(scanParams, (err, data) => {
      if (err) {
        return reject(err);
      }
      const { Items = [], Count, LastEvaluatedKey } = data;
      console.log(data);
      const promises = Items.map((item) => new Promise((_resolve, _reject) => {
        DolliDB.GetData(process.env.PRODUCT_DATA_TABLE, item.ID).then(productData => {
          delete productData.CreatedBy;
          _resolve(Object.assign({}, item, productData));
        }).catch(e => _reject(e));
      }));
      Promise.all(promises).then(items => {
        callback(null, cors({
          statusCode: 200,
          body: JSON.stringify({
            Items: items,
            Count,
            LastEvaluatedKey,
          }),
        }));
      });
    });
  }).catch(err => {
    console.log(err);
    const body = {
      error: JSON.stringify(err),
    };
    callback(null, cors({
      statusCode: 500,
      body,
    }));
  });
}

module.exports = getProductList;
