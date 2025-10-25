import '../styles/globals.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  // On mount, initialize theme from localStorage or system preference
  useEffect(() => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored === 'dark') {
        document.documentElement.classList.add('dark');
      } else if (stored === 'light') {
        document.documentElement.classList.remove('dark');
      } else {
        // default to system preference
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) document.documentElement.classList.add('dark');
      }
    } catch (e) {
      // ignore (SSR safety)
    }
  }, []);

  return <Component {...pageProps} />;
}
