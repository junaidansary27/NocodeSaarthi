export default function HeroGlassOverlay() {
  return (
    <div
      className="hero-glass-overlay"
      aria-hidden="true"
    >
      {/* Bottom-edge luminous glow line */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '10%',
          right: '10%',
          height: '1px',
          background:
            'linear-gradient(90deg, transparent 0%, rgba(255,107,53,0.25) 50%, transparent 100%)',
        }}
      />
    </div>
  );
}
