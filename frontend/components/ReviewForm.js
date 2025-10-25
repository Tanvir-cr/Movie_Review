import { useState } from 'react';
import { api } from '../lib/api';

export default function ReviewForm({ movieId, onAdded }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/reviews', { movieId, rating, comment });
      setRating(5); setComment('');
      if (onAdded) onAdded();
    } catch (err) {
      alert(err.response?.data?.message || 'Error adding review');
    }
  };

  return (
    <form onSubmit={submit} className="mt-4 space-y-3">
      <div>
        <label className="block text-sm">Rating</label>
        <select value={rating} onChange={e => setRating(Number(e.target.value))} className="mt-1 p-2 border rounded">
          {[5,4,3,2,1].map(n => <option key={n} value={n}>{n}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-sm">Comment</label>
        <textarea value={comment} onChange={e => setComment(e.target.value)} placeholder="Write your review..." rows={4} className="mt-1 p-2 border rounded w-full" />
      </div>
      <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Submit Review</button>
    </form>
  );
}
