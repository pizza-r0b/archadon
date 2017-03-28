'use strict';

const FindOne = require('./findOne');
const findOneUser = FindOne(process.env.USER_TABLE);

module.exports = (ID, extend) => findOneUser('ID', ID, extend);
