import mongoose from 'mongoose';

const CropRecommendationSchema = new mongoose.Schema({
  farmId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Farm',
    required: true
  },
  crops: [{
    name: String,
    confidence: Number,
    reason: String
  }],
  season: String,
  generatedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.CropRecommendation || mongoose.model('CropRecommendation', CropRecommendationSchema);