import { Shield, Sparkles, Activity, Award, Briefcase, ShoppingBag, Factory, Building } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { HoverCard } from '../../components/ui/HoverCard';
import { MagneticButton } from '../../components/ui/MagneticButton';
import { Link } from 'react-router-dom';

interface Industry {
  name: string;
  icon: React.ReactNode;
  description: string;
  useCase: string;
}

const industries: Industry[] = [
  {
    name: 'Startups & SaaS',
    icon: <Sparkles className="w-6 h-6 text-brand-orange" />,
    description: 'Launch products before market windows close. We construct interactive FlutterFlow MVPs and AI wizards that validate sales propositions immediately.',
    useCase: 'Rapid product creation & subscription billing integration.'
  },
  {
    name: 'Healthcare Systems',
    icon: <Activity className="w-6 h-6 text-brand-orange" />,
    description: 'Eliminate paperwork delay bottlenecks. We assemble highly secure patient intake forms and automated documentation databases.',
    useCase: 'Secure medical intakes, OCR parsers, & patient schedules.'
  },
  {
    name: 'Educational Institutions',
    icon: <Award className="w-6 h-6 text-brand-orange" />,
    description: 'Up-skill corporate learners at scale. We deploy customized AI study companions, automated quiz generators, and grading trackers.',
    useCase: 'E-learning portals, assessment generation, & feedback agents.'
  },
  {
    name: 'Finance & Banking',
    icon: <Shield className="w-6 h-6 text-brand-orange" />,
    description: 'Automate accounting entries with absolute accuracy. We link Stripe, Razorpay, and bank feeds with internal ERP ledgers.',
    useCase: 'Milestone invoicing, billing alerts, & transaction validation.'
  },
  {
    name: 'E-commerce & Retail',
    icon: <ShoppingBag className="w-6 h-6 text-brand-orange" />,
    description: 'Optimize inventory levels and order dispatches. We connect shop platforms with third-party logistics (3PL) nodes automatically.',
    useCase: 'Inventory sync, order tracking webhooks, & customer reviews AI.'
  },
  {
    name: 'Consulting & Agencies',
    icon: <Briefcase className="w-6 h-6 text-brand-orange" />,
    description: 'Scale client intakes without linear hiring. We build custom client onboarding workspaces, files directories, and dashboard reports.',
    useCase: 'Intake workflows, documents collection, & custom client portals.'
  },
  {
    name: 'Manufacturing & IOT',
    icon: <Factory className="w-6 h-6 text-brand-orange" />,
    description: 'Monitor warehouse items in real-time. We engineer custom dashboard maps and text alerting pipelines connected to inventory sensors.',
    useCase: 'Stock scanning apps, hardware alerts, & supply chain charts.'
  },
  {
    name: 'MSMEs & Local Business',
    icon: <Building className="w-6 h-6 text-brand-orange" />,
    description: 'Reduce monthly software expenses. We migrate businesses from expensive SaaS platforms to self-hosted, custom-configured n8n nodes.',
    useCase: 'Zapier replacement, contact sheets, & WhatsApp automation.'
  }
];

export default function Industries() {
  return (
    <div className="pt-24 min-h-screen">
      <Helmet>
        <title>Industries We Serve | Nocode Saarthi</title>
        <meta name="description" content="Explore custom AI integration and No-Code development solutions for Startups, Healthcare, Finance, and MSMEs." />
        <link rel="canonical" href="https://nocodesaarthi.com/industries" />
      </Helmet>

      {/* Hero Header */}
      <section className="px-6 py-16 md:py-24 text-center max-w-4xl mx-auto space-y-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />
        <span className="text-xs uppercase tracking-widest text-brand-orange font-semibold bg-brand-orange/10 px-3.5 py-1.5 rounded-full border border-brand-orange/20">
          INDUSTRIES
        </span>
        <h1 className="font-serif font-bold text-4xl md:text-6xl text-warm-ivory leading-tight">
          Tailored Workflows For Every Sector.
        </h1>
        <p className="text-lg md:text-xl text-soft-gray leading-relaxed">
          We do not believe in generic templates. We build custom-configured pipelines matching the strict compliance and goals of your sector.
        </p>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-2 gap-8">
        {industries.map((ind, index) => (
          <HoverCard key={index} className="flex flex-col justify-between" glowColor="rgba(15, 118, 110, 0.1)">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center">
                  {ind.icon}
                </div>
                <h3 className="font-serif font-bold text-xl text-warm-ivory">{ind.name}</h3>
              </div>
              <p className="text-soft-gray text-sm md:text-base leading-relaxed mb-6">
                {ind.description}
              </p>
            </div>
            <div className="p-3.5 bg-white/2 rounded-xl border border-white/6 text-xs md:text-sm font-sans flex items-center gap-2">
              <span className="font-bold text-brand-orange uppercase tracking-wider shrink-0 font-mono text-[10px]">Use Case:</span>
              <span className="text-warm-ivory">{ind.useCase}</span>
            </div>
          </HoverCard>
        ))}
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 text-center border-t border-white/5 bg-secondary-bg/25">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-serif font-bold text-3xl md:text-5xl text-warm-ivory">Want an Industry Audit?</h2>
          <p className="text-soft-gray text-sm md:text-base leading-relaxed">
            Let our consulting architects review your department processes and provide a complimentary automation roadmap report.
          </p>
          <div className="pt-4">
            <Link to="/book-discovery-call">
              <MagneticButton className="bg-brand-orange text-white px-8 py-3.5 shadow-lg shadow-brand-orange/20">
                Book Process Audit Call
              </MagneticButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
