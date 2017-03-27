'use strict';

const bcrypt = require('bcrypt-nodejs');

const comparePassword = (candidate, hash) => bcrypt.compareSync(candidate, hash);

module.exports = comparePassword;
