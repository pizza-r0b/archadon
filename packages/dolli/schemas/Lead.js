import mongoose from 'mongoose';

const schema = mongoose.Schema({
  email: String,
  imageKey: String,
  filters: String,
  colors: [],
}, {
  timestamps: true,
});

export default mongoose.model('Lead', schema);
