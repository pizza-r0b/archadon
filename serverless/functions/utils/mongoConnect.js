const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = (url, fn) => (...args) => {
  mongoose.connect(process.env.MONGO_URI);

  mongoose.connection.on('error', err => {
    console.log('Connection Error');
    console.log(err);
  });

  mongoose.connection.once('open', () => {
    fn(...args).then(() => {
      mongoose.connection.close();
    });
  });
};
