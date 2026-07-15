import { useState, lazy, Suspense, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, ShieldCheck, Zap, Bot, RefreshCw, Cpu, Database,
  Layers, MessageSquare, Mail, Smartphone, BarChart3, Cloud, FolderOpen
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { HoverCard } from '../../components/ui/HoverCard';
import { MagneticButton } from '../../components/ui/MagneticButton';
import { ScrollReveal } from '../../components/ui/ScrollReveal';
import { ServiceCard } from '../../components/ui/ServiceCard';
import { WHATSAPP_URL } from '../../config/whatsapp';
import { TestimonialsCarousel } from '../../components/testimonials/TestimonialsCarousel';
import { Accordion } from '../../components/ui/Accordion';
import HeroGlassOverlay from '../../components/hero/HeroGlassOverlay';
import HeroBadge from '../../components/hero/HeroBadge';

const HeroScene3D = lazy(() => import('../../components/hero/HeroScene3D'));

interface ServicePreview {
  id: string;
  title: string;
  desc: string;
  icon: ReactNode;
}

export default function Home() {
  const [activeProcess, setActiveProcess] = useState(0);

  const whyChooseUs = [
    { title: 'AI-First Approach', desc: 'We do not just append prompts. We architect advanced RAG pipelines and autonomous agent routines from day one.' },
    { title: 'Business Strategy Focus', desc: 'Technology serves business metrics. We align automations to reduce manual operations hours and scale customer capacity.' },
    { title: 'Rapid Prototype Delivery', desc: 'Validate concepts in weeks. We leverage top-tier visual builders to ship complete MVPs at lightning speed.' },
    { title: 'Scalable Systems', desc: 'Zero performance ceilings. We integrate decoupled backends (Supabase) to support millions of queries smoothly.' },
    { title: 'Future Proof Architecture', desc: 'Avoid platform lock-in. We build custom-configured pipelines that easily port to native code later.' },
    { title: 'Dedicated Partnership', desc: 'We provide comprehensive security audits, employee workshops, and hypercare support long after deployment.' },
  ];

  const previewServices: ServicePreview[] = [
    { id: 'ai-agents', title: 'Autonomous AI Agents', desc: 'Deploy cognitive digital workers that execute routines, write records, and resolve tickets.', icon: <Bot className="w-6 h-6 text-brand-orange" /> },
    { id: 'ai-automation', title: 'Cognitive AI Automation', desc: 'Infuse language processing and receipt OCR directly into your database pipelines.', icon: <Zap className="w-6 h-6 text-brand-orange" /> },
    { id: 'workflow-automation', title: 'Workflow Automation', desc: 'Connect all your software tools into unified, zero-maintenance n8n or Make scripts.', icon: <RefreshCw className="w-6 h-6 text-brand-orange" /> },
    { id: 'mvp-development', title: 'Rapid MVP Development', desc: 'Validate your startup idea fast. Launch responsive visual MVPs in weeks, not months.', icon: <Layers className="w-6 h-6 text-brand-orange" /> },
    { id: 'full-stack-development', title: 'Full Stack Development', desc: 'High-performance React/Node.js structures designed for custom enterprise needs.', icon: <Cpu className="w-6 h-6 text-brand-orange" /> },
    { id: 'no-code-development', title: 'No-Code Solutions', desc: 'Create internal department dashboards, customer databases, and tracking boards.', icon: <Database className="w-6 h-6 text-brand-orange" /> },
    { id: 'email-marketing', title: 'AI-Powered Email Marketing', desc: 'Automated campaigns, cold outreach, and lead nurturing synced to your CRM.', icon: <Mail className="w-6 h-6 text-brand-orange" /> },
    { id: 'mobile-application-development', title: 'Mobile App Development', desc: 'Cross-platform iOS and Android apps built with Flutter and React Native.', icon: <Smartphone className="w-6 h-6 text-brand-orange" /> },
    { id: 'business-analytics', title: 'Business Analytics', desc: 'Interactive Power BI dashboards, KPI tracking, and AI-driven forecasting.', icon: <BarChart3 className="w-6 h-6 text-brand-orange" /> },
    { id: 'saas-development', title: 'SaaS Development', desc: 'Multi-tenant platforms with billing, auth, and scalable cloud infrastructure.', icon: <Cloud className="w-6 h-6 text-brand-orange" /> },
    { id: 'enterprise-content-management', title: 'Enterprise Content Management', desc: 'Secure document, asset, and workflow systems with full governance.', icon: <FolderOpen className="w-6 h-6 text-brand-orange" /> },
  ];

  const processTimeline = [
    { num: '01', title: 'Discovery', desc: 'Technical audits of your department spreadsheets and software gaps.' },
    { num: '02', title: 'Strategy', desc: 'Formulating a detailed integration roadmap with clear ROI projections.' },
    { num: '03', title: 'Design', desc: 'Creating wireframe diagrams and interactive Figma mockup flows.' },
    { num: '04', title: 'Development', desc: 'Building secure visual apps, database schemas, and AI prompts.' },
    { num: '05', title: 'Testing', desc: 'Simulating high traffic and debugging edge cases in staging.' },
    { num: '06', title: 'Launch', desc: 'Enforcing security configs, migrating domains, and going live.' },
    { num: '07', title: 'Growth', desc: 'Onboarding your employees and providing monthly system tune-ups.' }
  ];

  const homepageFaqs = [
    { title: 'What services does Nocode Saarthi provide?', content: 'We build autonomous AI agents, workflow pipelines (n8n/Make), rapid visual MVPs (Bubble/FlutterFlow), full-stack React/Node.js applications, and provide corporate AI roadmap advisory.' },
    { title: 'How long does an MVP take to launch?', content: 'Most visual MVPs are developed, integrated with Stripe/Razorpay, and launched to production in 3 to 5 weeks depending on database complexity.' },
    { title: 'How much do AI automation projects cost?', content: 'AI projects scale based on scope. Simple workflow automations start around $2,000, while complex multi-agent custom database integrations range from $8,000 to $25,000+.' },
    { title: 'Do you support enterprise-tier clients?', content: 'Yes! We configure self-hosted n8n instances on private cloud layers (AWS/Render) with strict TLS/SSL compliance and API encryption schemas for enterprise-grade security.' },
    { title: 'Do you provide post-launch maintenance?', content: 'Yes, every project includes 30 days of complimentary support. We also offer monthly hypercare retainers for ongoing feature upgrades.' }
  ];

  return (
    <div className="relative overflow-hidden font-sans">
      <Helmet>
        <title>Nocode Saarthi | Building the Future of Business Through AI</title>
        <meta name="description" content="Nocode Saarthi is a premium AI automation and No-Code development agency. We engineer custom AI agents, n8n workflows, and fast MVPs for startups." />
        <link rel="canonical" href="https://nocodesaarthi.com" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
        {/* 3D Animated Background */}
        <Suspense fallback={null}>
          <HeroScene3D />
        </Suspense>

        {/* Glassmorphism Overlay */}
        <HeroGlassOverlay />

        <div className="max-w-6xl mx-auto text-center space-y-10 relative z-10">
          <HeroBadge />

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif font-bold text-5xl md:text-6xl lg:text-7xl text-warm-ivory leading-tight max-w-5xl mx-auto"
          >
            Build The Future <br />Of Your Business.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-soft-gray text-base md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            We design and build AI-powered software, intelligent automations, MVPs, and digital systems that help businesses scale faster.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-6 flex flex-wrap justify-center gap-4"
          >
            <Link to="/book-discovery-call">
              <MagneticButton className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-3.5 text-base shadow-lg shadow-brand-orange/20 border border-brand-orange/30">
                Book Discovery Call <ArrowRight className="w-5 h-5 ml-2 shrink-0" />
              </MagneticButton>
            </Link>
            <Link to="/portfolio">
              <MagneticButton className="btn-secondary px-8 py-3.5 text-base">
                View Portfolio
              </MagneticButton>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <span className="flex items-center gap-2 text-xs text-soft-gray font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              MSME Registered
            </span>
            <span className="text-white/20 hidden sm:inline">|</span>
            <span className="flex items-center gap-2 text-xs text-soft-gray font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              Govt of India Recognized
            </span>
            <span className="text-white/20 hidden sm:inline">|</span>
            <span className="flex items-center gap-2 text-xs text-soft-gray font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              Enterprise Grade AI Solutions
            </span>
            <img
              src="/msme/msme-1.png"
              alt="MSME Badge"
              className="h-7 w-auto object-contain opacity-80 ml-1"
            />
          </motion.div>
        </div>
      </section>

      {/* Trust section */}
      <section className="border-t border-b border-white/8 bg-secondary-bg/20 py-8 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-around gap-6 text-xs uppercase tracking-widest text-soft-gray font-semibold font-mono">
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-brand-orange" /> MSME Registered</span>
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-brand-orange" /> AI Solutions</span>
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-brand-orange" /> Enterprise Ready</span>
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-brand-orange" /> Technology Partner</span>
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-brand-orange" /> Secure Payments</span>
        </div>
      </section>

      {/* Why Nocode Saarthi section */}
      <section className="px-6 py-20 md:py-28 max-w-7xl mx-auto space-y-12 relative">
        <ScrollReveal>
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-brand-orange font-semibold">WHY WORK WITH US</span>
            <h2 className="font-serif font-bold text-3xl md:text-5xl text-warm-ivory">Engineered for Rapid Scaling</h2>
            <p className="text-soft-gray">We build custom technological assets that solve operational bottlenecks.</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {whyChooseUs.map((item, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="why-card-stack h-full">
                <article className="why-card text-left group">
                  <div className="why-card-glow" aria-hidden="true" />
                  <div className="relative z-10 flex flex-col h-full gap-5">
                    {/* Icon area: rounded-square container holding the index */}
                    <div className="why-card-icon" aria-hidden="true">0{index + 1}</div>
                    <h3 className="text-xl md:text-2xl font-bold text-warm-ivory leading-snug">{item.title}</h3>
                    <p className="text-soft-gray text-sm md:text-base leading-relaxed">{item.desc}</p>
                    <Link
                      to="/services"
                      className="why-card-cta"
                      aria-label={`Explore service: ${item.title}`}
                    >
                      <span>Explore Service</span>
                      <span className="why-card-arrow" aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Core Capabilities cards */}
      <section className="px-6 py-20 md:py-28 border-t border-white/5 bg-secondary-bg/10 relative">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center space-y-4 max-w-3xl mx-auto mb-12 md:mb-16">
              <span className="text-xs uppercase tracking-widest text-brand-orange font-semibold">SERVICES Catalog</span>
              <h2 className="font-serif font-bold text-3xl md:text-5xl text-warm-ivory">Core Capabilities</h2>
              <p className="text-soft-gray">Custom design and deployment of secure tools and intelligence pipelines.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {previewServices.map((srv) => (
              <ServiceCard
                key={srv.id}
                icon={srv.icon}
                title={srv.title}
                description={srv.desc}
                id={srv.id}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Process Timeline */}
      <section className="px-6 py-20 md:py-28 border-t border-white/5">
        <div className="max-w-6xl mx-auto space-y-12">
          <ScrollReveal>
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-widest text-brand-orange font-semibold">OUR TIMELINE</span>
              <h2 className="font-serif font-bold text-3xl md:text-5xl text-warm-ivory">The Delivery Blueprint</h2>
              <p className="text-soft-gray">We focus on agile execution steps, launching prototypes in weeks.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Steps Left Selector — with dot connectors between steps */}
            <div className="lg:col-span-4 space-y-0">
              {processTimeline.map((step, index) => (
                <div key={step.num} className="relative">
                  <button
                    onClick={() => setActiveProcess(index)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ease-out flex items-center gap-4 cursor-pointer ${activeProcess === index
                      ? 'bg-brand-orange/10 border-brand-orange text-brand-orange'
                      : 'bg-white/2 border-white/6 text-soft-gray hover:text-warm-ivory hover:border-white/12'
                      }`}
                  >
                    {/* Step dot connector */}
                    <div className={`relative flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${activeProcess === index
                      ? 'border-brand-orange bg-brand-orange/20'
                      : 'border-white/20 bg-white/4'
                      }`}>
                      <span className="font-mono font-bold text-[10px]">{step.num}</span>
                    </div>
                    <span className="font-bold text-sm md:text-base">{step.title}</span>
                  </button>
                  {/* Vertical connector line between steps */}
                  {index < processTimeline.length - 1 && (
                    <div className="ml-[22px] w-px h-3 bg-gradient-to-b from-brand-orange/30 to-white/8" />
                  )}
                </div>
              ))}
            </div>

            {/* Description Right display */}
            <div className="lg:col-span-8">
              <HoverCard className="p-8 md:p-12 text-left" glowColor="rgba(15, 118, 110, 0.12)">
                <span className="text-xs uppercase font-mono font-bold tracking-widest text-brand-orange block mb-2">
                  TIMELINE PROCESS STAGE {processTimeline[activeProcess].num}
                </span>
                <h3 className="font-serif font-bold text-3xl text-warm-ivory mb-4">
                  {processTimeline[activeProcess].title}
                </h3>
                <p className="text-soft-gray text-base md:text-lg leading-relaxed font-sans">
                  {processTimeline[activeProcess].desc}
                </p>
                <div className="h-px bg-white/8 my-8" />
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-ping" />
                  <span className="text-xs text-soft-gray font-mono">Constant collaboration & weekly review releases</span>
                </div>
              </HoverCard>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Highlight */}
      <section className="px-6 py-20 border-t border-white/5 bg-secondary-bg/15">
        <div className="max-w-6xl mx-auto space-y-12">
          <ScrollReveal>
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-widest text-brand-orange font-semibold">CASE STUDIES</span>
              <h2 className="font-serif font-bold text-3xl md:text-5xl text-warm-ivory">Featured Engagements</h2>
              <p className="text-soft-gray">Browse select validation metrics and dashboards built for our clients.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Evigo Card */}
            <ScrollReveal delay={0}>
              <HoverCard className="p-8 flex flex-col justify-between" glowColor="rgba(15, 118, 110, 0.12)">
                <div className="space-y-4">
                  <span className="text-xs font-mono uppercase text-soft-gray">Evigo Validation Systems</span>
                  <h3 className="font-serif font-bold text-2xl text-warm-ivory">74% reduction in coordinates failure rates.</h3>
                  <p className="text-soft-gray text-sm leading-relaxed">
                    We designed automatic GPS coordinates adjustment code modules linked to a React dashboard.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/4 flex items-center justify-between">
                  <span className="text-xs font-mono text-soft-gray">React • Node • Postgres</span>
                  <Link to="/portfolio" className="text-xs font-bold text-brand-orange hover:underline flex items-center gap-1">
                    View Impact <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </HoverCard>
            </ScrollReveal>

            {/* Venezia Card */}
            <ScrollReveal delay={0.1}>
              <HoverCard className="p-8 flex flex-col justify-between" glowColor="rgba(255, 107, 53, 0.12)">
                <div className="space-y-4">
                  <span className="text-xs font-mono uppercase text-soft-gray">Venezia Shipping manifesting</span>
                  <h3 className="font-serif font-bold text-2xl text-warm-ivory">Ingestion times cut from 8 hours to 4 minutes.</h3>
                  <p className="text-soft-gray text-sm leading-relaxed">
                    We engineered custom n8n pipelines integrated with Gemini Vision APIs to parse containers documents.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-white/4 flex items-center justify-between">
                  <span className="text-xs font-mono text-soft-gray">n8n • Gemini • AWS OCR</span>
                  <Link to="/portfolio" className="text-xs font-bold text-brand-orange hover:underline flex items-center gap-1">
                    View Impact <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </HoverCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto space-y-12">
          <ScrollReveal>
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-widest text-brand-orange font-semibold">TESTIMONIALS</span>
              <h2 className="font-serif font-bold text-3xl md:text-5xl text-warm-ivory">What Client Founders Say</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <TestimonialsCarousel />
          </ScrollReveal>
        </div>
      </section>

      {/* Accordion FAQs */}
      <section className="px-6 py-20 border-t border-white/5 bg-secondary-bg/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <ScrollReveal>
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-widest text-brand-orange font-semibold">FAQ</span>
              <h2 className="font-serif font-bold text-3xl md:text-5xl text-warm-ivory">Frequently Asked Questions</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Accordion items={homepageFaqs} />
          </ScrollReveal>
        </div>
      </section>

      {/* Final booking CTA */}
      <section className="px-6 py-20 md:py-28 border-t border-white/5 bg-secondary-bg/30 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />
        <ScrollReveal>
          <div className="max-w-4xl mx-auto space-y-6 relative z-10">
            <h2 className="font-serif font-bold text-4xl md:text-6xl text-warm-ivory leading-tight">
              Ready To Build The Future?
            </h2>
            <p className="text-soft-gray text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Let's transform your business operations using AI, automation, and world-class visual software. Book a discovery call today.
            </p>
            <div className="pt-6 flex flex-wrap justify-center gap-4">
              <Link to="/book-discovery-call">
                <MagneticButton className="bg-brand-orange text-white px-8 py-3.5 text-base shadow-lg shadow-brand-orange/20">
                  Book Discovery Call <ArrowRight className="w-5 h-5 ml-2" />
                </MagneticButton>
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MagneticButton className="btn-secondary px-8 py-3.5 text-base">
                  <MessageSquare className="w-5 h-5 mr-2 text-brand-orange" /> WhatsApp Us
                </MagneticButton>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
