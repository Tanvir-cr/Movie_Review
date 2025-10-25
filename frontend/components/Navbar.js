import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    if (token) setUser({ username });
    try {
      const stored = localStorage.getItem('theme');
      if (stored) setTheme(stored);
      else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) setTheme('dark');
    } catch (e) {}
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    window.location.href = '/';
  };

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try {
      localStorage.setItem('theme', next);
      if (next === 'dark') document.documentElement.classList.add('dark');
      else document.documentElement.classList.remove('dark');
    } catch (e) {}
  };

  return (
    <nav className="site-navbar">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-heading text-2xl tracking-tight flex items-center gap-3 text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-500 hover:to-accent-400 transition-all duration-300">
          <span className="text-3xl transform hover:scale-110 transition-transform duration-300">🎬</span>
          <span className="font-semibold">Movie Reviews</span>
        </Link>
        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <button onClick={toggleTheme} aria-label="Toggle theme" className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700 transition">
            {theme === 'dark' ? (
              // Sun icon
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path d="M10 5.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
                <path d="M10 1v2M10 17v2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M1 10h2M17 10h2M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            ) : (
              // Moon icon
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                <path d="M17.293 13.293A8 8 0 116.707 2.707a7 7 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
          {user ? (
            <>
              <span className="font-medium">Hi, {user.username}</span>
              <button onClick={logout} className="btn-primary bg-red-500 hover:bg-red-600">Logout</button>
            </>
          ) : (
            <>
              <Link href="/login" className="font-medium text-gray-600 hover:text-gray-900">Login</Link>
              <Link href="/register" className="btn-primary">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
