import Link from 'next/link';

export default function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <h3 className="font-heading text-xl font-semibold flex items-center">
        {/* Film icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 text-primary-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M3 4a1 1 0 011-1h2a1 1 0 011 1v1h6V4a1 1 0 011-1h2a1 1 0 011 1v3a1 1 0 01-1 1h-1v6h1a1 1 0 011 1v3a1 1 0 01-1 1h-2a1 1 0 01-1-1v-1H7v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-3a1 1 0 011-1h1V8H4a1 1 0 01-1-1V4zM6 6H5v2h1V6zm8 8h1v-2h-1v2z" />
        </svg>
        {movie.title} <span className="text-sm font-sans text-primary-600/70 ml-2">({movie.releaseYear || '-'})</span>
      </h3>
      <p className="text-sm font-sans leading-relaxed text-primary-700/80 mt-3">{movie.description?.slice(0,140)}...</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="rating-badge group">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transform group-hover:scale-110 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.164c.969 0 1.371 1.24.588 1.81l-3.37 2.447a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.57 2.705c-.784.57-1.84-.197-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.443 9.393c-.783-.57-.38-1.81.588-1.81h4.164a1 1 0 00.95-.69L9.049 2.927z" />
            </svg>
            <span>{movie.averageRating ? movie.averageRating.toFixed(1) : 'No rating'}</span>
          </div>
          <Link href={`/movies/${movie._id}`} className="btn-primary group">
            <span className="flex items-center">
              <span>Details</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </span>
          </Link>
        </div>
    </div>
  );
}
