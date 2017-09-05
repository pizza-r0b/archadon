const create = require('./create');

module.exports = create('Order', {
  Status: { type: String, index: true, default: 'Processing' },
  Email: {
    type: String,
    required: true,
    unique: true,
    index: true,
    lowercase: true,
    trim: true,
  },
});
