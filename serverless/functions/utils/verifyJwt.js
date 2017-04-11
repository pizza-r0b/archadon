'use strict';

const fs = require('fs');
const path = require('path');
const cert = fs.readFileSync(path.resolve(__dirname, '../../KEY.key'));
const jwt = require('jsonwebtoken');

const verifyJwt = (token) => new Promise((resolve, reject) => {
  jwt.verify(token, cert, (err, decoded) => {
    decoded = decoded || {};
    if (err) {
      reject(err);
    } else {
      resolve(decoded.ID);
    }
  });
});

module.exports = verifyJwt;
