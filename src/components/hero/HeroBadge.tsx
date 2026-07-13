import { motion } from 'framer-motion';

export default function HeroBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center justify-center gap-2.5 px-5 py-2 rounded-full border border-brand-orange/35 bg-[#0B0B0F]/75 backdrop-blur-md shadow-[0_0_15px_rgba(255,107,53,0.12)] hover:shadow-[0_0_25px_rgba(255,107,53,0.35)] transition-all duration-300 ease-out hover:scale-[1.03] cursor-pointer select-none"
    >
      <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-warm-ivory flex items-center gap-2">
        <span className="shrink-0">🚀</span>
        <span className="bg-gradient-to-r from-warm-ivory via-white to-warm-ivory bg-clip-text text-transparent">
          AI SOLUTIONS THAT SCALE YOUR BUSINESS
        </span>
        <span className="shrink-0 animate-pulse" style={{ animationDuration: '1.5s' }}>⚡</span>
      </span>
    </motion.div>
  );
}
