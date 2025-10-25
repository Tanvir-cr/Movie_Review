import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import authRoutes from './routes/auth.js';
import movieRoutes from './routes/movies.js';
import reviewRoutes from './routes/reviews.js';

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use('/api/auth', authRoutes);
app.use('/api/movies', movieRoutes);
app.use('/api/reviews', reviewRoutes);

// basic error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ message: err.message || 'Server Error' });
});

export default app;
