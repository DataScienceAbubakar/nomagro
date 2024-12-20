import mongoose from 'mongoose';

const WeatherDataSchema = new mongoose.Schema({
  farmId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Farm',
    required: true
  },
  temperature: Number,
  humidity: Number,
  rainfall: Number,
  windSpeed: Number,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.WeatherData || mongoose.model('WeatherData', WeatherDataSchema);