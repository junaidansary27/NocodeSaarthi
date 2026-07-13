import React, { useRef, useState } from 'react';

interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function HoverCard({ children, className = '', glowColor = 'rgba(255, 107, 53, 0.12)' }: HoverCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative glass-panel rounded-2xl overflow-hidden p-8 transition-all duration-200 ease-out hover:border-brand-orange/35 hover:translate-y-[-4px] hover:shadow-[0_20px_40px_rgba(255,107,53,0.18)] group ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition duration-300 rounded-2xl"
        style={{
          background: `radial-gradient(350px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 80%)`,
          opacity: opacity,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
