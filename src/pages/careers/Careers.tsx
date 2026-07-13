import { useState } from 'react';
import { MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { HoverCard } from '../../components/ui/HoverCard';
import { MagneticButton } from '../../components/ui/MagneticButton';

interface Position {
  title: string;
  location: string;
  type: string;
  department: string;
  description: string;
}

const openPositions: Position[] = [
  {
    title: 'AI Systems & Integrations Engineer',
    location: 'Remote / NCR Delhi',
    type: 'Full-time',
    department: 'Engineering',
    description: 'We are seeking an engineer experienced in orchestrating LangGraph multi-agent configurations, vector database embeddings, and custom n8n nodes.'
  },
  {
    title: 'Bubble / Low-Code Developer',
    location: 'Remote',
    type: 'Full-time',
    department: 'Engineering',
    description: 'Looking for a senior Bubble.io or FlutterFlow developer capable of building rapid frontends and connecting them cleanly with Supabase backends.'
  }
];

export default function Careers() {
  const [applyData, setApplyData] = useState({ name: '', email: '', role: '', resume: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setApplyData({ name: '', email: '', role: '', resume: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-24 min-h-screen">
      <Helmet>
        <title>Careers | Join Nocode Saarthi</title>
        <meta name="description" content="Join our elite agency team and build the future of corporate AI and No-Code business automations." />
        <link rel="canonical" href="https://nocodesaarthi.com/careers" />
      </Helmet>

      {/* Hero Header */}
      <section className="px-6 py-16 md:py-24 text-center max-w-4xl mx-auto space-y-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />
        <span className="text-xs uppercase tracking-widest text-brand-orange font-semibold bg-brand-orange/10 px-3.5 py-1.5 rounded-full border border-brand-orange/20">
          JOIN US
        </span>
        <h1 className="font-serif font-bold text-4xl md:text-6xl text-warm-ivory leading-tight">
          Build the Systems of Tomorrow.
        </h1>
        <p className="text-lg md:text-xl text-soft-gray leading-relaxed font-sans">
          We operate at the forefront of AI automation. Join an agile, high-performance team helping businesses navigate tech transitions.
        </p>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Open Positions List */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="font-serif font-bold text-2xl text-warm-ivory mb-4">Open Positions</h2>
          {openPositions.map((pos, index) => (
            <HoverCard key={index} className="p-6" glowColor="rgba(15, 118, 110, 0.08)">
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-warm-ivory">{pos.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-soft-gray font-sans mt-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-brand-orange" /> {pos.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-brand-orange" /> {pos.type}
                    </span>
                    <span className="text-brand-orange uppercase font-mono font-semibold tracking-wider bg-brand-orange/10 px-2 py-0.5 rounded">
                      {pos.department}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-soft-gray text-sm md:text-base leading-relaxed">
                {pos.description}
              </p>
            </HoverCard>
          ))}
        </div>

        {/* Application Form */}
        <div className="lg:col-span-5">
          <HoverCard className="p-8" glowColor="rgba(255, 107, 53, 0.12)">
            <h3 className="font-serif font-bold text-xl text-warm-ivory mb-2">Apply Now</h3>
            <p className="text-xs text-soft-gray mb-6">Send your portfolio and resume links to apply.</p>

            {submitted ? (
              <div className="p-6 border border-green-500/20 bg-green-500/5 rounded-xl text-center space-y-3">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto" />
                <span className="text-sm font-semibold text-green-500 block">Application Transmitted!</span>
                <p className="text-xs text-soft-gray">We will review your resume and call you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleApply} className="space-y-4 font-sans">
                <div className="space-y-1">
                  <label htmlFor="app-name" className="text-xs font-semibold text-soft-gray uppercase tracking-wider block">Full Name</label>
                  <input
                    type="text"
                    id="app-name"
                    required
                    value={applyData.name}
                    onChange={(e) => setApplyData({ ...applyData, name: e.target.value })}
                     className="w-full bg-white/4 border border-white/8 rounded-lg py-2 px-3 text-sm text-warm-ivory focus:outline-none focus:border-brand-orange transition-all duration-300 ease-out"
                    placeholder="e.g. Elena Rostova"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="app-email" className="text-xs font-semibold text-soft-gray uppercase tracking-wider block">Email Address</label>
                  <input
                    type="email"
                    id="app-email"
                    required
                    value={applyData.email}
                    onChange={(e) => setApplyData({ ...applyData, email: e.target.value })}
                     className="w-full bg-white/4 border border-white/8 rounded-lg py-2 px-3 text-sm text-warm-ivory focus:outline-none focus:border-brand-orange transition-all duration-300 ease-out"
                    placeholder="e.g. elena@learnplus.com"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="app-role" className="text-xs font-semibold text-soft-gray uppercase tracking-wider block">Position</label>
                  <select
                    id="app-role"
                    required
                    value={applyData.role}
                    onChange={(e) => setApplyData({ ...applyData, role: e.target.value })}
                    className="w-full bg-white/4 border border-white/8 rounded-lg py-2.5 px-3 text-sm text-warm-ivory focus:outline-none focus:border-brand-orange cursor-pointer"
                  >
                    <option value="" disabled className="bg-secondary-bg text-soft-gray">Select Position</option>
                    <option value="ai-engineer" className="bg-secondary-bg">AI Systems Engineer</option>
                    <option value="bubble-dev" className="bg-secondary-bg">Bubble / Low-Code Developer</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label htmlFor="app-resume" className="text-xs font-semibold text-soft-gray uppercase tracking-wider block">Resume Link (Google Drive / LinkedIn)</label>
                  <input
                    type="url"
                    id="app-resume"
                    required
                    value={applyData.resume}
                    onChange={(e) => setApplyData({ ...applyData, resume: e.target.value })}
                     className="w-full bg-white/4 border border-white/8 rounded-lg py-2 px-3 text-sm text-warm-ivory focus:outline-none focus:border-brand-orange transition-all duration-300 ease-out"
                    placeholder="https://linkedin.com/in/username"
                  />
                </div>
                <MagneticButton type="submit" className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white py-3 text-sm">
                  <Send className="w-4 h-4 mr-2" /> Send Application
                </MagneticButton>
              </form>
            )}
          </HoverCard>
        </div>
      </section>
    </div>
  );
}
