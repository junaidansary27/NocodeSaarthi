import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  id: string;
}

export function ServiceCard({ icon, title, description, id }: ServiceCardProps) {
  return (
    <Link
      to={`/services/${id}`}
      className="group relative flex h-[280px] w-full flex-col overflow-hidden rounded-[22px] border border-white/10 bg-[#111214] p-7 shadow-[0_12px_32px_rgba(0,0,0,0.4)] transition-all duration-[250ms] ease-out hover:-translate-y-2 hover:scale-[1.02] hover:border-brand-orange/40 hover:shadow-[0_26px_55px_rgba(0,0,0,0.55),0_0_45px_rgba(255,107,53,0.18)]"
    >
      {/* Small orange ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[22px] opacity-0 transition-opacity duration-[250ms] ease-out group-hover:opacity-100"
        style={{ background: 'radial-gradient(120% 80% at 50% 0%, rgba(255,107,53,0.14), transparent 60%)' }}
      />

      <div className="relative z-10 flex h-full flex-col">
        {/* Top-left icon container */}
        <div className="flex h-[52px] w-[52px] items-center justify-center rounded-xl border border-brand-orange/20 bg-brand-orange/10 text-brand-orange">
          {icon}
        </div>

        {/* Content */}
        <h3 className="mt-5 text-xl font-bold leading-snug text-warm-ivory">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-soft-gray">{description}</p>

        {/* Bottom CTA */}
        <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange">
          Explore Service
          <span aria-hidden="true" className="transition-transform duration-[250ms] ease-out group-hover:translate-x-1.5">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
