import mongoose from 'mongoose';

function connect(uri) {
  mongoose.connect(uri);
  return mongoose.connection;
}

export default connect;
