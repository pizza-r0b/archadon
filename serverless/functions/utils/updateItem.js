'use strict';

const docClient = require('./docClient');

const updateItem = TableName => (params, meta) => new Promise((resolve, reject) => {
  const query = Object.assign({ TableName }, params);

  docClient.update(query, (err, data) => {
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

module.exports = updateItem;
