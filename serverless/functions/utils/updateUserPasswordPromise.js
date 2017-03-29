const comparePassword = require('./comparePassword');
const bcrypt = require('bcrypt-nodejs');
const put = require('../../utils/putItem');
const putUser = put(process.env.USER_TABLE);

const updateUserPasswordPromise = (candidatePassword, newPassword) => user => {
  if (candidatePassword && newPassword && comparePassword(candidatePassword, user.Password)) {
    return putUser({
      Item: {
        ID: user.ID,
        password: bcrypt.hashSync(newPassword, bcrypt.genSaltSync(10)),
      },
    });
  }
};

module.exports = updateUserPasswordPromise;
