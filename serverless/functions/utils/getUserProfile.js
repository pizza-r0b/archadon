'use strict';

const FindOne = require('./findOne');
const findOneUserProfile = FindOne(process.env.USER_PROFILE_TABLE);

module.exports = ID => findOneUserProfile('UserID', ID);
