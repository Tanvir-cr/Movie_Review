import express from 'express';
import { addReview, getReviewsForMovie } from '../controllers/reviewController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', protect, addReview);
router.get('/movie/:movieId', getReviewsForMovie);

export default router;
