export default function ReviewList({ reviews = [] }) {
  if (!reviews.length) return <p className="text-gray-600">No reviews yet</p>;
  return (
    <div className="space-y-3">
      {reviews.map(r => (
        <div key={r._id} className="p-3 border rounded">
          <div className="flex items-center justify-between">
            <strong>{r.user?.username || 'User'}</strong>
            <div className="text-yellow-600">{r.rating}/5</div>
          </div>
          <p className="mt-2 text-gray-700">{r.comment}</p>
          <small className="text-gray-500">{new Date(r.createdAt).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
}
