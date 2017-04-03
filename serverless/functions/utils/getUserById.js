'use strict';

const FindOne = require('./findOne');
const findOneUser = FindOne(process.env.USER_TABLE);

module.exports = (ItemID, extend) => findOneUser('ItemID', ItemID, extend);
