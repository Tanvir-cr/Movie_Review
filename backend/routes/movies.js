import express from 'express';
import { getMovies, getMovieById, createMovie, deleteMovie } from '../controllers/movieController.js';
import { protect, admin } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', getMovies);
router.get('/:id', getMovieById);
router.post('/', protect, admin, createMovie);
router.delete('/:id', protect, admin, deleteMovie);

export default router;
