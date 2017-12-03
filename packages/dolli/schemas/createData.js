const mongoose = require('mongoose');

function createDataSchema(name) {
  return mongoose.model(`${name}Data`, mongoose.Schema({
    Item: { type: mongoose.Schema.Types.ObjectId, ref: `${name}Item` },
    Path: String,
    Value: mongoose.Schema.Types.Mixed,
  }, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }));
}

module.exports = createDataSchema;
