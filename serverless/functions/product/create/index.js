'use strict';

const DolliDB = require('../../utils/DolliDB/build/main.min.js');
const verifyGodMode = require('../../utils/verifyGodMode');
const uuid = require('uuid/v1');

const PRODUCT_TABLE = process.env.PRODUCT_TABLE;

function createProduct(event, context, callback) {
  let data;
  try {
    data = JSON.parse(event.body);
  } catch (e) {
    data = event.body;
  }
  const name = data.Name;
  const price = data.Price;
  const token = event.headers.authtoken;

  if (!token) {
    callback(null, {
      statusCode: 401,
    });
    return;
  }

  verifyGodMode(token)
    .then(item => {
      if (!item.GodMode) {
        return Promise.reject({
          statusCode: 401,
        });
      }

      const ID = uuid();

      return DolliDB.PutItem(PRODUCT_TABLE, {
        ID,
        Name: name,
        Price: price,
        CreatedBy: item.Email,
        CreatedAt: Date.now(),
      }, null, { ID });
    })
    .then((res) => {
      const ID = res.meta.ID;

      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          ID,
        }),
      });
    })
    .catch(e => {
      callback(null, {
        statusCode: e.statusCode || 500,
        body: JSON.stringify({
          message: e.body || e,
        }),
      });
    });
}

module.exports = createProduct;
