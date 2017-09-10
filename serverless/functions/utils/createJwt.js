import cert from '../../KEY.key';
import jwt from 'jsonwebtoken';

const createJwt = data => {
  const token = jwt.sign(data, cert, {
    expiresIn: 7200,
  });

  return token;
};

module.exports = createJwt;
