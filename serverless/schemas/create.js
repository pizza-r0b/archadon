const item = require('./createItem');
const data = require('./createData');

module.exports = function (name, itemExt, methods) {
  return {
    [`${name}Data`]: data(name),
    [`${name}Item`]: item(name, itemExt, methods),
  };
};
