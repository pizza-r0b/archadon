const mongoose = require('mongoose');

function createItemSchema(name, extend, methods) {
  const schema = mongoose.Schema(Object.assign({
    ID: mongoose.Schema.Types.ObjectId,
    Path: String,
    Value: mongoose.Schema.Types.Mixed,
  }, extend), {
    timestamps: true,
    });

  console.log(methods);

  if (methods) {
    Object.keys(methods).forEach((method) => {
      schema[method](...methods[method]);
    });
  }

  return mongoose.model(`${name}Item`, schema);
}

module.exports = createItemSchema;
