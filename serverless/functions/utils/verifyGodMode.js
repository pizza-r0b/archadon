'use strict';

const DolliDB = require('./DolliDB/build/main.min.js');
const verifyJwt = require('./verifyJwt');

const USER_TABLE = process.env.USER_TABLE;

module.exports = token => verifyJwt(token)
  .then(ID => DolliDB.GetItem(USER_TABLE, 'ID', ID))
  .then(item => {
    if (!item.GodMode) {
      return Promise.reject({
        statusCode: 401,
      });
    } else {
      return Promise.resolve(item);
    }
  });
