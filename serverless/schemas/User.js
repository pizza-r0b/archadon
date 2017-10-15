const create = require('./create');
const bcrypt = require('bcrypt-nodejs');

const User = create('User', {
  GodMode: { type: Boolean, required: true, default: false },
  Password: { type: String, required: true },
  Email: {
    type: String,
    required: true,
    unique: true,
    index: true,
    lowercase: true,
    trim: true,
  },
}, {
  pre: ['save', function (next) {
    if (this.isModified('Password')) {
      this.Password = bcrypt.hashSync(this.Password, bcrypt.genSaltSync(10));
    }
    next();
  }],
});

module.exports = User;
