import { useState, useEffect } from 'react';

/**
 * Returns a normalized scroll progress (0 → 1) based on how far
 * the user has scrolled through the first viewport height.
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      setProgress(Math.min(scrollY / vh, 1));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
}
