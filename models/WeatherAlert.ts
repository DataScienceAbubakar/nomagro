import mongoose from 'mongoose';

const WeatherAlertSchema = new mongoose.Schema({
  farmId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Farm',
    required: true
  },
  type: {
    type: String,
    enum: ['HEAVY_RAIN', 'HIGH_TEMPERATURE', 'LOW_TEMPERATURE', 'HIGH_WIND', 'DROUGHT'],
    required: true
  },
  severity: {
    type: String,
    enum: ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL'],
    required: true
  },
  message: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  expiresAt: {
    type: Date,
    required: true
  }
});

export default mongoose.models.WeatherAlert || mongoose.model('WeatherAlert', WeatherAlertSchema);