'use strict';

const putItem = require('./putItem');
const DolliDB = require('./DolliDB/build/main.min.js');

function Put(TableName, key, data) {
  const keyName = key[0];
  const keyValue = key[1];
  const putPromise = putItem(TableName);

  if (DolliDB.isObject(data)) {
    data = DolliDB.toPaths(data);
  } else if (!Array.isArray(data)) {
    throw new Error(`Expected data to be Array or Object instead got ${data}`);
  }

  const promises = [];

  data.forEach((item) => {
    const path = item[0];
    const value = item[1];
    promises.push(putPromise({
      Item: {
        [keyName]: keyValue,
        Path: path,
        Value: value,
      },
    }));
  });

  return Promise.all(promises);
}

module.exports = Put;
