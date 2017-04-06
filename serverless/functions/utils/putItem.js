'use strict';

const docClient = require('./docClient');

const putItem = TableName => (params, meta) => new Promise((resolve, reject) => {
  const query = Object.assign({ TableName }, params);
  console.log(`PUTTING ITEM TO ${TableName}`, query);
  docClient.put(query, (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve({
        data,
        meta,
      });
    }
  });
});

module.exports = putItem;
