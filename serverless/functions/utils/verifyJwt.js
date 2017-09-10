import cert from '../../KEY.key';
import jwt from 'jsonwebtoken';

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
