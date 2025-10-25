import Movie from '../models/Movie.js';
import Review from '../models/Review.js';

export const getMovies = async (req, res) => {
  const movies = await Movie.find().sort({ createdAt: -1 });
  res.json(movies);
};

export const getMovieById = async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  if (!movie) return res.status(404).json({ message: 'Movie not found' });
  const reviews = await Review.find({ movie: movie._id }).populate('user', 'username');
  res.json({ movie, reviews });
};

export const createMovie = async (req, res) => {
  const { title, description, releaseYear, genre, posterUrl } = req.body;
  const movie = new Movie({ title, description, releaseYear, genre, posterUrl });
  await movie.save();
  res.status(201).json(movie);
};

export const deleteMovie = async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  if (!movie) return res.status(404).json({ message: 'Movie not found' });
  await movie.remove();
  res.json({ message: 'Movie removed' });
};
