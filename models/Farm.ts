import mongoose from 'mongoose';

const FarmSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  location: {
    state: {
      type: String,
      required: [true, 'Please provide state']
    },
    coordinates: {
      latitude: Number,
      longitude: Number
    }
  },
  size: Number,
  crops: [{
    name: String,
    plantedDate: Date,
    harvestDate: Date,
    status: String
  }],
  soilData: {
    type: String,
    ph: Number,
    lastTested: Date
  }
}, {
  timestamps: true
});

export default mongoose.models.Farm || mongoose.model('Farm', FarmSchema);