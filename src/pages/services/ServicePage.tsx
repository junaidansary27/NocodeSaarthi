import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Clock, Zap, MessageSquare } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { servicesData } from '../../data/servicesData';
import { Accordion } from '../../components/ui/Accordion';
import { HoverCard } from '../../components/ui/HoverCard';
import { MagneticButton } from '../../components/ui/MagneticButton';
import { WHATSAPP_URL } from '../../config/whatsapp';
import { ScrollReveal } from '../../components/ui/ScrollReveal';

export default function ServicePage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? servicesData[serviceId] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-24 px-6 text-center">
        <h1 className="font-serif font-bold text-4xl mb-4 text-warm-ivory">Service Not Found</h1>
        <p className="text-soft-gray mb-8">The service page you are looking for does not exist.</p>
        <Link to="/">
          <MagneticButton className="bg-brand-orange text-white px-6 py-2.5">
            Back to Home
          </MagneticButton>
        </Link>
      </div>
    );
  }

  // Schema structured data for SEO
  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': service.title,
    'description': service.heroDesc,
    'provider': {
      '@type': 'LocalBusiness',
      'name': 'Nocode Saarthi',
      'url': 'https://nocodesaarthi.com',
    },
    'areaServed': 'Worldwide',
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': service.title,
      'itemListElement': service.deliverables.map((d, index) => ({
        '@type': 'Offer',
        'itemOffered': {
          '@type': 'Service',
          'name': d,
        },
        'position': index + 1,
      })),
    },
  };

  return (
    <div className="pt-24 min-h-screen">
      <Helmet>
        <title>{`${service.title} | Nocode Saarthi`}</title>
        <meta name="description" content={service.tagline} />
        <link rel="canonical" href={`https://nocodesaarthi.com/services/${service.id}`} />
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-28 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-deep-teal/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-widest text-brand-orange font-semibold bg-brand-orange/10 px-3.5 py-1.5 rounded-full border border-brand-orange/20"
          >
            OUR SERVICES
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif font-bold text-4xl md:text-6xl text-warm-ivory leading-tight"
          >
            {service.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-soft-gray max-w-3xl mx-auto leading-relaxed"
          >
            {service.heroDesc}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-6 flex flex-wrap justify-center gap-4"
          >
            <Link to="/book-discovery-call">
              <MagneticButton className="bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-3.5 text-base shadow-lg shadow-brand-orange/10">
                Book Discovery Call <ArrowRight className="w-5 h-5 ml-2 shrink-0" />
              </MagneticButton>
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MagneticButton className="border border-white/8 hover:border-brand-orange bg-white/4 hover:bg-white/8 text-warm-ivory px-8 py-3.5 text-base">
                <MessageSquare className="w-5 h-5 mr-2 shrink-0 text-brand-orange" /> WhatsApp Us
              </MagneticButton>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-6 py-16 md:py-24 border-t border-white/5 bg-secondary-bg/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-widest text-brand-orange font-semibold">THE PROBLEM</span>
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-warm-ivory">
                {service.problem.title}
              </h2>
              <p className="text-soft-gray leading-relaxed text-base">
                {service.problem.desc}
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.problem.points.map((point, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <HoverCard className="p-6 border-red-500/10 hover:border-red-500/20" glowColor="rgba(239, 68, 68, 0.05)">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center mb-4 text-red-500 font-bold font-mono">
                    0{index + 1}
                  </div>
                  <p className="text-warm-ivory text-sm md:text-base font-semibold">{point}</p>
                </HoverCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="px-6 py-16 md:py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto space-y-12">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="text-xs uppercase tracking-widest text-brand-orange font-semibold">THE SOLUTION</span>
              <h2 className="font-serif font-bold text-3xl md:text-5xl text-warm-ivory">
                {service.solution.title}
              </h2>
              <p className="text-soft-gray leading-relaxed">
                {service.solution.desc}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.solution.points.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <HoverCard glowColor="rgba(255, 160, 60, 0.14)" className="card-capability">
                  <Zap className="w-8 h-8 text-brand-orange mb-4" />
                  <h3 className="text-lg font-bold text-warm-ivory mb-2">{item.title}</h3>
                  <p className="text-soft-gray text-sm md:text-base leading-relaxed">{item.desc}</p>
                </HoverCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables & Tech Section */}
      <section className="px-6 py-16 md:py-24 border-t border-white/5 bg-secondary-bg/15">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Deliverables */}
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest text-brand-orange font-semibold">DELIVERABLES</span>
            <h3 className="font-serif font-bold text-3xl text-warm-ivory">What We Deliver</h3>
            <ul className="space-y-4">
              {service.deliverables.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-orange mt-0.5 shrink-0" />
                  <span className="text-soft-gray text-base font-sans">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stacks & Timeline */}
          <div className="glass-panel rounded-2xl p-8 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-brand-orange font-semibold">TECHNOLOGY STACK</span>
              <h3 className="font-serif font-bold text-2xl text-warm-ivory">Engineered With</h3>
              <div className="flex flex-wrap gap-2.5">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-full border border-white/8 bg-white/4 text-xs font-mono text-soft-gray hover:text-warm-ivory hover:border-brand-orange transition-all duration-300 ease-out"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="h-px bg-white/8" />

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-soft-gray font-mono">TIMELINE</span>
                <p className="text-xl font-bold text-warm-ivory">{service.timeline}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding Delivery Process */}
      <section className="px-6 py-16 md:py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto space-y-12">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="text-xs uppercase tracking-widest text-brand-orange font-semibold">ONBOARDING</span>
              <h2 className="font-serif font-bold text-3xl md:text-5xl text-warm-ivory">Delivery Process</h2>
              <p className="text-soft-gray">
                We focus on rapid, phased releases with transparent reporting at every step.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 stage-grid">
            {service.process.map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="card-stage-wrapper">
                  <HoverCard className="p-6 h-full">
                    <span className="text-xs uppercase tracking-widest text-brand-orange font-mono font-bold block mb-2">
                      STAGE {step.step}
                    </span>
                    <h4 className="text-lg font-bold text-warm-ivory mb-2">{step.title}</h4>
                    <p className="text-soft-gray text-sm md:text-base leading-relaxed">{step.desc}</p>
                  </HoverCard>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-16 md:py-24 border-t border-white/5 bg-secondary-bg/10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-brand-orange font-semibold">PROOF</span>
          <p className="text-lg md:text-2xl text-warm-ivory italic leading-relaxed">
            "{service.testimonial.review}"
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <img
              src={service.testimonial.image}
              alt={service.testimonial.author}
              className="w-12 h-12 rounded-full object-cover border border-brand-orange/40"
            />
            <div className="text-left">
              <h4 className="font-semibold text-warm-ivory">{service.testimonial.author}</h4>
              <p className="text-xs text-soft-gray">
                {service.testimonial.role}, <span className="text-brand-orange">{service.testimonial.company}</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service FAQs */}
      <section className="px-6 py-16 md:py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-xs uppercase tracking-widest text-brand-orange font-semibold">FAQ</span>
            <h2 className="font-serif font-bold text-3xl md:text-5xl text-warm-ivory">Frequently Asked Questions</h2>
          </div>
          <Accordion items={service.faqs.map(f => ({ title: f.question, content: f.answer }))} />
        </div>
      </section>

      {/* Service CTA */}
      <section className="px-6 py-20 md:py-28 border-t border-white/5 bg-secondary-bg/30 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />
        <ScrollReveal>
          <div className="max-w-4xl mx-auto space-y-6 relative z-10">
            <h2 className="font-serif font-bold text-4xl md:text-6xl text-warm-ivory leading-tight">
              Ready to Automate &amp; Scale?
            </h2>
            <p className="text-soft-gray text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Let's design and engineer an enterprise-grade AI or No-Code system tailored to your startup's needs.
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
                <MagneticButton className="border border-white/8 hover:border-brand-orange bg-white/4 hover:bg-white/8 text-warm-ivory px-8 py-3.5 text-base">
                  <MessageSquare className="w-5 h-5 mr-2 text-brand-orange" /> Chat on WhatsApp
                </MagneticButton>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
