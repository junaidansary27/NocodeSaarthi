import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ArrowUpRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { MagneticButton } from '../../components/ui/MagneticButton';
import { ScrollReveal } from '../../components/ui/ScrollReveal';
import { Link } from 'react-router-dom';

interface CaseStudy {
  id: string;
  title: string;
  category: 'ai' | 'automation' | 'web' | 'mobile';
  overview: string;
  challenge: string;
  solution: string;
  techStack: string[];
  results: string[];
  highlights: string[];
  status?: string;
  glowColor?: string;
  categoryLabel?: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'ziantrix',
    title: 'Ziantrix',
    category: 'ai',
    categoryLabel: 'AI-Native HRMS Platform',
    overview: 'Ziantrix is an intelligent HR platform that automates payroll, compliance, approvals, and employee support. It removes hours of manual HR work and reduces the risk of costly compliance mistakes. The result is a reliable, self-service system that helps enterprises run human resources with greater speed, accuracy, and confidence.',
    challenge: 'Enterprise HR teams were drowning in manual payroll runs, statutory compliance filings, attendance reconciliation, and repetitive employee queries — consuming hundreds of staff hours every month and exposing the business to costly compliance errors.',
    solution: 'Engineered an AI-native HRMS where intelligent AI assistants autonomously handle payroll, compliance, multi-level approvals, attendance tracking, and employee support — surfacing human-in-the-loop checkpoints only when judgement is required.',
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'OpenAI', 'LangChain', 'Docker', 'AWS'],
    results: [
      'Automated 80% of end-to-end HR workflows',
      'Resolved employee support queries 95% faster with AI assistants',
      'Sustained 99.9% platform availability across payroll cycles'
    ],
    highlights: [
      'AI Automation',
      'Payroll Engine',
      'Compliance Filing',
      'Employee Self-Service',
      'Multi-Level Approvals',
      'HR Analytics'
    ],
    status: 'FEATURED',
    glowColor: 'rgba(255, 107, 53, 0.18)'
  },
  {
    id: 'evigo',
    title: 'Evigo',
    category: 'web',
    overview: 'Evigo is a logistics platform that validates customer addresses and coordinates deliveries in real time. It fixes incorrect location data that caused failed deliveries and high re-routing costs. Operations teams gain a single, reliable system that cuts losses and improves delivery efficiency across every route.',
    challenge: 'Legacy coordinate validation structures were failing to map bad locations accurately, causing delivery drivers to fail 14% of deliveries and costing logistics teams thousands monthly.',
    solution: 'Designed and engineered an automated React administration workspace coupled with a self-learning Node.js parser that reconciles customer coordinates using GPS history and satellite vector data.',
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'OpenAI API', 'Vercel'],
    results: [
      'Reduced validation failures from 14% to under 3.5%',
      'Saved an estimated $45,000 in monthly re-routing expenses',
      'Boosted driver route efficiency by 22% overall'
    ],
    highlights: [
      'Address Validation',
      'Logistics Coordination',
      'AI Parsing',
      'Admin Workspace',
      'Real-Time Routing',
      'GPS Reconciliation'
    ],
    glowColor: 'rgba(15, 118, 110, 0.12)'
  },
  {
    id: 'venezia',
    title: 'Venezia',
    category: 'automation',
    overview: 'Venezia is a premium restaurant website created to showcase authentic Italian dining. Customers can explore the menu, discover signature dishes, reserve tables online, and experience the restaurant’s atmosphere before visiting. The platform helps restaurants build a strong online presence and increase customer reservations.',
    challenge: 'Incoming container waybill files arrived in diverse scanned PDF layouts. Manual entry into shipping logs was taking 8 hours per batch, causing harbor queue delay penalties.',
    solution: 'Implemented self-hosted n8n pipelines integrated with Gemini Pro Vision extraction APIs. Manifest details are now automatically parsed, categorized, and uploaded to the databases in real-time.',
    techStack: ['n8n', 'Gemini Pro', 'AWS Textract', 'PostgreSQL', 'Docker'],
    results: [
      'Cut processing times from 8 hours per batch down to 4 minutes',
      'Achieved a 100% reduction in harbor delay fines',
      'Increased processing throughput by 400% with zero hiring'
    ],
    highlights: [
      'Document Parsing',
      'Shipping Automation',
      'OCR Extraction',
      'n8n Pipelines',
      'Real-Time Sync',
      'Harbor Logs'
    ],
    glowColor: 'rgba(255, 107, 53, 0.12)'
  },
  {
    id: 'fuzz-ai',
    title: 'Fuzz AI',
    category: 'ai',
    overview: 'Fuzz AI is an AI-powered product comparison platform that helps users find the best prices from a screenshot. Customers simply upload an image, and the platform compares prices across multiple online stores, making shopping faster, easier, and more cost-effective.',
    challenge: 'Engineering teams spent average of 20 hours per sprint debugging minor typescript compiler errors, lint exceptions, and security dependencies warnings.',
    solution: 'Built a specialized vector indexing assistant linked to GitHub webhooks that automatically audits every commit using Claude 3.5 Sonnet, recommending patch diffs prior to merge.',
    techStack: ['LangChain', 'Claude 3.5 Sonnet', 'Express', 'Supabase', 'Docker'],
    results: [
      'Saved developer review time by over 60%',
      'Patched 92% of critical dependencies errors automatically',
      'Cut release approval timelines from 4 days to 15 minutes'
    ],
    highlights: [
      'Code Auditing',
      'Auto Bug Patching',
      'GitHub Integration',
      'Security Scanning',
      'AI Code Review',
      'CI/CD Pipeline'
    ],
    glowColor: 'rgba(192, 132, 252, 0.12)'
  },
  {
    id: 'founderos',
    title: 'FounderOS',
    category: 'mobile',
    overview: 'FounderOS is a mobile platform that helps founders find co-founders and plan their startups. It replaces months of manual research with instant, AI-generated business blueprints. Entrepreneurs can validate ideas quickly and move from concept to launch with far greater speed.',
    challenge: 'Entrepreneurs spent months writing business models, analyzing market competitors, and hunting for technical co-founders across social media platforms.',
    solution: 'Engineering a premium cross-platform FlutterFlow MVP featuring matchmaking algorithms and an AI business wizard that generates full business blueprints.',
    techStack: ['FlutterFlow', 'Supabase', 'OpenAI GPT-4o', 'Stripe', 'Tailwind CSS'],
    results: [
      'Gained 5,000+ early waitlist applications pre-launch',
      'Integrated match scoring system predicting partner alignment',
      'Deploying public beta in July 2026'
    ],
    highlights: [
      'Mobile App (Flutter)',
      'Co-Founder Matching',
      'AI Business Wizard',
      'User Authentication',
      'Subscription Billing',
      'Match Scoring'
    ],
    status: 'Coming Soon',
    glowColor: 'rgba(247, 244, 238, 0.08)'
  }
];

export default function Portfolio() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="pt-24 min-h-screen">
      <Helmet>
        <title>Portfolio & Case Studies | Nocode Saarthi</title>
        <meta name="description" content="Explore our technical case studies in AI Agent execution, n8n automations, and custom React engineering." />
        <link rel="canonical" href="https://nocodesaarthi.com/portfolio" />
      </Helmet>

      {/* Hero Header */}
      <section className="px-6 py-16 md:py-24 text-center max-w-4xl mx-auto space-y-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />
        <ScrollReveal>
          <span className="text-xs uppercase tracking-widest text-brand-orange font-semibold bg-brand-orange/10 px-3.5 py-1.5 rounded-full border border-brand-orange/20">
            OUR CASE STUDIES
          </span>
          <h1 className="font-serif font-bold text-4xl md:text-6xl text-warm-ivory leading-tight">
            Proven Engineering, Real Business Results.
          </h1>
          <p className="text-lg md:text-xl text-soft-gray leading-relaxed">
            We do not build generic toys. We engineer production-ready software and cognitive pipelines that deliver immediate ROI.
          </p>
        </ScrollReveal>
      </section>

      {/* Portfolio Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {caseStudies.map((study) => (
              <motion.div
                layout
                key={study.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <div className="glass-panel rounded-2xl p-8 h-full flex flex-col justify-between transition-colors duration-300 hover:border-white/15">
                  <div>
                    {study.id !== 'founderos' && (
                      <div className="relative h-48 md:h-56 rounded-xl overflow-hidden mb-6">
                        <img
                          src={`/portfolio/${study.id === 'fuzz-ai' ? 'ai-automation' : study.id}.png`}
                          alt={`${study.title} project screenshot`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-bg/80 via-primary-bg/20 to-transparent opacity-90" />
                      </div>
                    )}

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs uppercase tracking-wider text-soft-gray font-mono">
                        {study.categoryLabel ? study.categoryLabel : study.category === 'ai' ? 'Artificial Intelligence' : study.category === 'automation' ? 'Workflow Automation' : study.category === 'web' ? 'Custom Full Stack' : 'Mobile / Low-Code'}
                      </span>
                      {study.status ? (
                        <span className="text-xs uppercase px-2.5 py-0.5 rounded bg-brand-orange/15 border border-brand-orange/30 text-brand-orange font-mono">
                          {study.status}
                        </span>
                      ) : (
                        <span className="text-xs uppercase px-2.5 py-0.5 rounded bg-deep-teal/15 border border-deep-teal/30 text-deep-teal font-mono">
                          Completed
                        </span>
                      )}
                    </div>

                    <h3 className="font-serif font-bold text-2xl md:text-3xl text-warm-ivory mb-3">
                      {study.title}
                    </h3>
                    <p className="text-soft-gray text-base leading-relaxed mb-6">
                      {study.overview}
                    </p>

                    {/* Case Study Detail */}
                    {expandedId === study.id ? (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pt-2"
                      >
                        <div className="space-y-2">
                          <h4 className="font-semibold text-warm-ivory text-sm uppercase tracking-wider">Business Impact</h4>
                          <ul className="space-y-2">
                            {study.results.map((res, index) => (
                              <li key={index} className="flex items-start gap-2.5 text-soft-gray text-sm md:text-base">
                                <CheckCircle className="w-4 h-4 text-brand-orange shrink-0 mt-1" />
                                <span>{res}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    ) : null}
                  </div>

                  <div className="mt-8 pt-4 flex items-center justify-end">
                    <button
                      onClick={() => setExpandedId(expandedId === study.id ? null : study.id)}
                      className="flex items-center gap-1 text-sm font-semibold text-brand-orange hover:text-warm-ivory transition-all duration-300 ease-out cursor-pointer"
                    >
                      <span>{expandedId === study.id ? 'Show Less' : 'View Case Study'}</span>
                      <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${expandedId === study.id ? 'rotate-45' : ''}`} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Global Portfolio CTA */}
      <section className="px-6 py-20 text-center bg-secondary-bg/25 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-orange/5 rounded-full blur-[80px] pointer-events-none" />
        <ScrollReveal>
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <h2 className="font-serif font-bold text-3xl md:text-5xl text-warm-ivory">Let's Co-create Your Success Story.</h2>
            <p className="text-soft-gray text-sm md:text-base max-w-xl mx-auto leading-relaxed">
              Partner with Nocode Saarthi to engineer your company's next automation pipeline, custom dashboard, or AI integration.
            </p>
            <div className="pt-4">
              <Link to="/book-discovery-call">
                <MagneticButton className="bg-brand-orange text-white px-8 py-3.5 text-base shadow-lg shadow-brand-orange/20">
                  Start Project Call
                </MagneticButton>
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
