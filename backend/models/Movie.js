import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  releaseYear: Number,
  genre: String,
  posterUrl: String,
  averageRating: { type: Number, default: 0 },
  numReviews: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.model('Movie', movieSchema);
