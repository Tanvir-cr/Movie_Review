import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import MovieCard from '../components/MovieCard';
import { api } from '../lib/api';

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.get('/movies').then(res => setMovies(res.data)).catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Latest Movies</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map(m => <MovieCard key={m._id} movie={m} />)}
        </div>
      </main>
    </div>
  );
}
