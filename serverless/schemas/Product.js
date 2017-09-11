const create = require('./create');

module.exports = create('Product', {
  Name: String,
  Price: { type: Number, index: true },
  Qty: { type: Number, default: 1 },
});
