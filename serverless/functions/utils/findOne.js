'use strict';

const docClient = require('./docClient');

const findOne = tableName => (attribute, value, extend) => new Promise((resolve, reject) => {
  const params = Object.assign({
    TableName: tableName,
    KeyConditionExpression: '#A = :value',
    ExpressionAttributeNames: {
      '#A': attribute,
    },
    ExpressionAttributeValues: {
      ':value': value,
    },
  }, extend);


  docClient.query(params, (err, data) => {
    if (err) {
      return reject(err);
    }
    const Items = data.Items || [];
    let item = null;
    if (Items.length) {
      item = Items[0];
    }
    return resolve(item);
  });
});

module.exports = findOne;
