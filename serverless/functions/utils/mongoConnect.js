const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
let cachedDB = null;

module.exports = fn => (...args) => {
  const [, context] = args;

  context.callbackWaitsForEmptyEventLoop = false;

  if (cachedDB && cachedDB.readyState != 0 && cachedDB.readyState != 3) {
    fn(...args);
  } else {
    mongoose.connect(process.env.MONGO_URI);

    console.log('TRYING TO CONNECT');

    mongoose.connection.on('error', err => {
      console.log('Connection Error');
      console.log(err);
    });

    mongoose.connection.once('open', () => {
      cachedDB = mongoose.connection;
      fn(...args);
    });
  }
};
