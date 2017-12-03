'use strict';

const DolliDB = require('../../utils/DolliDB/build/main.min.js');
const cors = require('../../utils/corsRes');

function getItemBatch(event, context, callback) {
  let data;
  try {
    data = JSON.parse(event.body);
  } catch (e) {
    data = event.body;
  }
  if (!data.Items || !Array.isArray(data.Items)) {
    return callback(null, cors({
      statusCode: 400,
    }));
  }
  data.Items = data.Items.filter((item, i) => data.Items.indexOf(item) === i);
  DolliDB.GetBatch(process.env.PRODUCT_ITEM_TABLE, data.Items)
    .then(batch => {
      const { Responses: { [process.env.PRODUCT_ITEM_TABLE]: items } } = batch;
      const promises = items.map((item) => new Promise((_resolve, _reject) => {
        DolliDB.GetData(process.env.PRODUCT_DATA_TABLE, item.ID).then(productData => {
          delete item.CreatedBy;
          _resolve(Object.assign({}, item, productData));
        }).catch(e => _reject(e));
      }));
      return Promise.all(promises);
    })
    .then(output => {
      callback(null, cors({
        statusCode: 200,
        body: JSON.stringify(output),
      }));
    })
    .catch(e => {
      console.log(e);
      callback(null, cors({
        statusCode: 500,
        body: JSON.stringify({ error: e }),
      }));
    });
}

module.exports = getItemBatch;
