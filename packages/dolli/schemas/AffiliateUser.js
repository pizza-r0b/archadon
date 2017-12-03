const create = require('./create');
const bcrypt = require('bcrypt-nodejs');

const affiliateUser = create('AffiliateUser', {
  Affiliate: { type: Boolean, required: true, default: true },
  Password: { type: String },
  Verified: { type: Boolean, default: false },
  VerificationUID: { type: String },
  VerificationUIDCreation: { type: Date },
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

module.exports = affiliateUser;
