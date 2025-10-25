import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { api } from '../../lib/api';
import ReviewList from '../../components/ReviewList';
import ReviewForm from '../../components/ReviewForm';

export default function MoviePage() {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState(null);
  const [reviews, setReviews] = useState([]);

  const fetch = async () => {
    if (!id) return;
    try {
      const res = await api.get(`/movies/${id}`);
      setMovie(res.data.movie);
      setReviews(res.data.reviews);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => { fetch(); }, [id]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {!movie ? <p>Loading...</p> : (
          <>
            <div className="bg-white p-6 rounded shadow">
              <h1 className="text-2xl font-bold">{movie.title} <span className="text-gray-500">({movie.releaseYear})</span></h1>
              <p className="mt-3 text-gray-700">{movie.description}</p>
              <p className="mt-2">Average Rating: <strong>{movie.averageRating ? movie.averageRating.toFixed(1) : 'N/A'}</strong></p>
            </div>

            <section className="mt-6">
              <h2 className="text-xl font-semibold mb-3">Reviews</h2>
              <ReviewList reviews={reviews} />
            </section>

            <section className="mt-6">
              <h3 className="text-lg font-semibold">Add a review</h3>
              <ReviewForm movieId={movie._id} onAdded={fetch} />
            </section>
          </>
        )}
      </main>
    </div>
  );
}
