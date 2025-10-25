import Review from '../models/Review.js';
import Movie from '../models/Movie.js';

export const addReview = async (req, res) => {
  const { movieId, rating, comment } = req.body;
  const userId = req.user._id;

  const movie = await Movie.findById(movieId);
  if (!movie) return res.status(404).json({ message: 'Movie not found' });

  const existing = await Review.findOne({ movie: movieId, user: userId });
  if (existing) return res.status(400).json({ message: 'You already reviewed this movie' });

  const review = new Review({ user: userId, movie: movieId, rating, comment });
  await review.save();

  const reviews = await Review.find({ movie: movieId });
  const numReviews = reviews.length;
  const avg = reviews.reduce((acc, r) => acc + r.rating, 0) / numReviews;

  movie.numReviews = numReviews;
  movie.averageRating = avg;
  await movie.save();

  res.status(201).json(review);
};

export const getReviewsForMovie = async (req, res) => {
  const movieId = req.params.movieId;
  const reviews = await Review.find({ movie: movieId }).populate('user', 'username');
  res.json(reviews);
};
