import { Target, Eye, Compass, Award, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { HoverCard } from '../../components/ui/HoverCard';
import { MagneticButton } from '../../components/ui/MagneticButton';
import { Link } from 'react-router-dom';

export default function Founder() {
  return (
    <div className="pt-24 min-h-screen">
      <Helmet>
        <title>Our Founder & Vision | Nocode Saarthi</title>
        <meta name="description" content="Read the story of Nocode Saarthi, our mission, vision, and technology roadmap for startups and MSMEs." />
        <link rel="canonical" href="https://nocodesaarthi.com/founder" />
      </Helmet>

      {/* Hero storytelling header */}
      <section className="px-6 py-16 md:py-24 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Story copy */}
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs uppercase tracking-widest text-brand-orange font-semibold bg-brand-orange/10 px-3.5 py-1.5 rounded-full border border-brand-orange/20">
            OUR STORY
          </span>
          <h1 className="font-serif font-bold text-4xl md:text-5xl text-warm-ivory leading-tight">
            Building the Bridge Between Raw Ideas and Execution.
          </h1>
          <p className="text-soft-gray text-base md:text-lg leading-relaxed font-sans">
            Nocode Saarthi is a Government of India recognized MSME enterprise specializing in AI automation, full-stack engineering, and digital transformation. We partner with startups and established businesses to design, build, and deploy production-ready systems — faster and more efficiently than traditional development.
          </p>
          <p className="text-soft-gray text-base md:text-lg leading-relaxed font-sans">
            Our approach is straightforward: diagnose the real bottlenecks, architect the right solution, and deliver measurable results. From AI agents and workflow automation to custom MVPs and enterprise dashboards, we bring technical depth and operational clarity to every engagement.
          </p>
          <p className="text-soft-gray text-base md:text-lg leading-relaxed font-sans">
            We are your Saarthi — the navigator who ensures your business moves forward with clarity, speed, and confidence.
          </p>
          <div className="pt-4">
            <Link to="/book-discovery-call">
              <MagneticButton className="bg-brand-orange text-white px-8 py-3.5 shadow-lg shadow-brand-orange/20">
                Book a Strategy Call
              </MagneticButton>
            </Link>
          </div>
        </div>

        {/* Founder Bio Photo card */}
        <div className="lg:col-span-5">
          <HoverCard className="p-4" glowColor="rgba(255, 107, 53, 0.15)">
            <div className="rounded-xl overflow-hidden mb-6 aspect-square max-w-sm mx-auto border border-white/8 relative">
              <img
                src="/founder/founder.png"
                alt="Founder of Nocode Saarthi"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-bg via-transparent to-transparent opacity-60" />
            </div>
            <div className="text-center">
              <h3 className="font-serif font-bold text-2xl text-warm-ivory">Shivageethika Rao Saineni</h3>
              <p className="text-brand-orange text-sm font-semibold mt-1">Founder</p>
              <p className="text-soft-gray text-xs mt-2"></p>
            </div>
          </HoverCard>

            {/* MSME Credentials */}
            <div className="mt-6 space-y-3">
              <h4 className="text-xs uppercase tracking-widest text-brand-orange font-semibold">Enterprise Credentials</h4>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange font-medium">
                  ✓ MSME Registered Enterprise
                </span>
                <span className="text-xs px-3 py-1.5 rounded-full bg-deep-teal/10 border border-deep-teal/20 text-deep-teal font-medium">
                  ✓ Government of India Recognized
                </span>
                <span className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/8 text-warm-ivory font-medium">
                  ✓ AI Automation & Digital Transformation
                </span>
              </div>
              <HoverCard className="p-4" glowColor="rgba(255, 107, 53, 0.12)">
                <div className="rounded-lg overflow-hidden border border-white/8">
                  <img
                    src="/msme/msme-1.png"
                    alt="MSME Registration Certificate"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <p className="text-[10px] text-soft-gray mt-2 text-center">MSME Registration Certificate | Ministry of MSME, Government of India</p>
              </HoverCard>
            </div>
        </div>
      </section>

      {/* Mission & Vision grid */}
      <section className="px-6 py-16 md:py-24 border-t border-white/5 bg-secondary-bg/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <HoverCard glowColor="rgba(15, 118, 110, 0.12)">
            <div className="w-12 h-12 rounded-xl bg-deep-teal/10 flex items-center justify-center text-deep-teal mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-2xl text-warm-ivory mb-3">Our Mission</h3>
            <p className="text-soft-gray leading-relaxed text-sm md:text-base">
              To deliver enterprise-grade AI automation and digital systems that solve real business problems — on time, on budget, and with measurable impact.
            </p>
          </HoverCard>

          <HoverCard glowColor="rgba(255, 107, 53, 0.12)">
            <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-2xl text-warm-ivory mb-3">Our Vision</h3>
            <p className="text-soft-gray leading-relaxed text-sm md:text-base">
              To become India's most trusted AI implementation partner — recognized for technical excellence, transparent delivery, and long-term client partnerships.
            </p>
          </HoverCard>
        </div>
      </section>

      {/* Core Philosophy */}
      <section className="px-6 py-16 md:py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-brand-orange font-semibold">CORE VALUES</span>
            <h2 className="font-serif font-bold text-3xl md:text-5xl text-warm-ivory">Our Operating Philosophy</h2>
            <p className="text-soft-gray">The principles that guide our architecture and partnerships.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <HoverCard className="p-8">
              <Compass className="w-8 h-8 text-brand-orange mb-4" />
              <h4 className="text-lg font-bold text-warm-ivory mb-2">Outcome-First Engineering</h4>
              <p className="text-soft-gray text-sm md:text-base leading-relaxed">
                Every solution we build starts with business outcomes, not technology preferences. We architect systems that deliver measurable ROI from day one.
              </p>
            </HoverCard>

            <HoverCard className="p-8">
              <Users className="w-8 h-8 text-brand-orange mb-4" />
              <h4 className="text-lg font-bold text-warm-ivory mb-2">Enterprise-Grade Delivery</h4>
              <p className="text-soft-gray text-sm md:text-base leading-relaxed">
                From security and compliance to performance and scalability, we apply the same rigorous standards expected from top-tier consulting firms.
              </p>
            </HoverCard>

            <HoverCard className="p-8">
              <Award className="w-8 h-8 text-brand-orange mb-4" />
              <h4 className="text-lg font-bold text-warm-ivory mb-2">Full-Cycle Partnership</h4>
              <p className="text-soft-gray text-sm md:text-base leading-relaxed">
                We stay beyond handover. Our team provides ongoing support, training, and optimization to ensure sustained success.
              </p>
            </HoverCard>
          </div>
        </div>
      </section>

      {/* Roadmap timeline */}
      <section className="px-6 py-16 md:py-24 border-t border-white/5 bg-secondary-bg/15">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-brand-orange font-semibold">ROADMAP</span>
            <h2 className="font-serif font-bold text-3xl md:text-5xl text-warm-ivory">Technology Roadmap</h2>
            <p className="text-soft-gray">Our phased approach to scaling AI automation capabilities for enterprise clients.</p>
          </div>

          <div className="space-y-8 relative before:absolute before:left-6 before:top-4 before:bottom-4 before:w-0.5 before:bg-white/10">
            {/* Node 1 */}
            <div className="relative pl-12 flex gap-4 flex-col md:flex-row md:items-center">
              <div className="absolute left-4.5 w-3.5 h-3.5 rounded-full bg-brand-orange border-4 border-primary-bg" />
              <div className="w-24 shrink-0 font-mono text-sm text-brand-orange font-bold">2026</div>
              <div className="glass-panel p-5 rounded-xl flex-1">
                <h4 className="font-bold text-warm-ivory text-base md:text-lg">Production-Ready Automation Platforms</h4>
                <p className="text-soft-gray text-sm mt-1">Expanding pre-built n8n and Make libraries to deploy complex business automations within days, not weeks.</p>
              </div>
            </div>

            {/* Node 2 */}
            <div className="relative pl-12 flex gap-4 flex-col md:flex-row md:items-center">
              <div className="absolute left-4.5 w-3.5 h-3.5 rounded-full bg-brand-orange border-4 border-primary-bg" />
              <div className="w-24 shrink-0 font-mono text-sm text-brand-orange font-bold">2027</div>
              <div className="glass-panel p-5 rounded-xl flex-1">
                <h4 className="font-bold text-warm-ivory text-base md:text-lg">Intelligent Knowledge Systems</h4>
                <p className="text-soft-gray text-sm mt-1">Deploying autonomous RAG indexing layers connected to client data ecosystems for real-time intelligence.</p>
              </div>
            </div>

            {/* Node 3 */}
            <div className="relative pl-12 flex gap-4 flex-col md:flex-row md:items-center">
              <div className="absolute left-4.5 w-3.5 h-3.5 rounded-full bg-white/20 border-4 border-primary-bg" />
              <div className="w-24 shrink-0 font-mono text-sm text-soft-gray">2028+</div>
              <div className="glass-panel p-5 rounded-xl flex-1">
                <h4 className="font-bold text-warm-ivory text-base md:text-lg">Autonomous Enterprise Agents</h4>
                <p className="text-soft-gray text-sm mt-1">Launching proprietary AI agent systems that coordinate complex operations with enterprise-grade security.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
