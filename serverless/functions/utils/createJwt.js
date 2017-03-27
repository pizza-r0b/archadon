'use strict';

const fs = require('fs');
const path = require('path');
const cert = fs.readFileSync(path.resolve(__dirname, '../../KEY.key'));
const jwt = require('jsonwebtoken');

const createJwt = data => {
  const token = jwt.sign(data, cert, {
    expiresIn: 7200,
  });

  return token;
};

module.exports = createJwt;
