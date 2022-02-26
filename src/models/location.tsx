import mongoose from 'mongoose';

const LocationSchema = new mongoose.Schema({
  pincode: {
    type: String,
    unique: true,
    required: true,
    maxlength: [10, 'Pincode cannot be more than 40'],
  },
  location: {
    type: String,
    unique: true,
    maxlength: [10, 'Pincode cannot be more than 40'],
  },
});

export default mongoose.model('Location', LocationSchema);
