import { useEffect, useState } from 'react';

export function MouseTracker() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateCoords = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener('mousemove', updateCoords);
    return () => window.removeEventListener('mousemove', updateCoords);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px at ${coords.x}px ${coords.y}px, rgba(255, 107, 53, 0.04), rgba(15, 118, 110, 0.02), transparent 80%)`,
      }}
    />
  );
}
