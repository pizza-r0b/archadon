const create = require('./create');

module.exports = create('Product', {
  Name: String,
  Price: { type: Number, index: true, trim: true },
  Qty: { type: Number, default: 1 },
}, {
  pre: ['save', function (next) {
    if (typeof this.Price === 'string') {
      this.Price = parseFloat(this.Price);
    }
    next();
  }],
});

