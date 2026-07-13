import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Send, ShieldCheck, MessageSquare, CheckCircle, Loader2, X } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { HoverCard } from '../../components/ui/HoverCard';
import { MagneticButton } from '../../components/ui/MagneticButton';
import emailjs from '@emailjs/browser';
import { EMAILJS_SERVICE_ID, EMAILJS_PUBLIC_KEY } from '../../config/emailjs';
import { WHATSAPP_URL } from '../../config/whatsapp';

const EMAILJS_TEMPLATE_ID = 'template_zdfhwmn';

function CalendlySkeleton({ visible }: { visible: boolean }) {
  if (!visible) return null;
  return (
    <div className="absolute inset-0 z-[5] flex items-center justify-center bg-primary-bg/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="w-10 h-10 text-brand-orange animate-spin" />
        <p className="text-xs font-mono text-soft-gray">Loading scheduler...</p>
      </div>
    </div>
  );
}

function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed bottom-6 right-6 z-50 max-w-sm"
    >
      <div className="glass-panel rounded-xl p-4 border border-brand-orange/20 shadow-lg shadow-brand-orange/10 flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
          <CheckCircle className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <p className="text-sm text-warm-ivory font-medium">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="text-soft-gray hover:text-warm-ivory transition-colors shrink-0"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    budget: '',
    timeline: '',
    goals: '',
    projectType: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setError(false);

    try {
      const templateParams = {
        full_name: formData.name,
        email: formData.email,
        company: formData.company,
        industry: formData.industry,
        project_type: formData.projectType,
        budget: formData.budget,
        timeline: formData.timeline,
        project_description: formData.goals,
        time: new Date().toLocaleString(),
      };

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      console.log('EmailJS discovery call sent successfully:', response);

      setSubmitted(true);
      setToast('Your discovery request has been submitted successfully.');
      setFormData({
        name: '',
        email: '',
        company: '',
        industry: '',
        budget: '',
        timeline: '',
        goals: '',
        projectType: '',
      });
    } catch (err) {
      console.error('EmailJS discovery call failed:', err);
      setError(true);
      setToast('Failed to submit. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappUrl = WHATSAPP_URL;

  return (

    <div className="pt-24 min-h-screen">
      <Helmet>
        <title>Book a Discovery Call | Nocode Saarthi</title>
        <meta name="description" content="Schedule a highly qualified project discovery call and submit your project inquiry requirements." />
        <link rel="canonical" href="https://nocodesaarthi.com/book-discovery-call" />
      </Helmet>

      {/* Hero Intro */}
      <section className="px-6 py-12 text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-widest text-brand-orange font-semibold bg-brand-orange/10 px-3.5 py-1.5 rounded-full border border-brand-orange/20">
          DISCOVERY CALL
        </span>
        <h1 className="font-serif font-bold text-4xl md:text-5xl text-warm-ivory leading-tight">
          Let's Plan Your Automation Architecture.
        </h1>
        <p className="text-soft-gray text-sm md:text-base leading-relaxed">
          Book a 30-minute technical session to audit your business bottlenecks, evaluate AI feasibility, and map out project budgets.
        </p>
      </section>

      {/* Discovery Flow Layout */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Column 1: Calendly Embed Scheduler */}
        <div className="lg:col-span-7 space-y-6">
          <div className="glass-panel rounded-2xl overflow-hidden p-0 sm:p-4 h-[650px] relative border border-white/8">
            <div className="absolute top-4 left-6 flex items-center gap-2 text-xs font-mono text-soft-gray z-20 bg-secondary-bg/90 px-3 py-1.5 rounded-full backdrop-blur-sm">
              <Calendar className="w-3.5 h-3.5 text-brand-orange" />
              <span>Calendly Integration Live</span>
            </div>

            <CalendlySkeleton visible={loading} />

            <iframe
              src="https://calendly.com/nocodesaarthiteam/30min?embed_domain=nocodesaarthi.com&embed_type=Inline"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Calendly Scheduler"
              className={`rounded-xl bg-white/2 transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}
              onLoad={() => setLoading(false)}
              onError={() => { setLoading(false); setError(true); }}
            />

            {error && (
              <div className="absolute inset-0 flex items-center justify-center bg-primary-bg/90 backdrop-blur-sm z-10 p-6">
                <div className="text-center space-y-4 max-w-md">
                  <div className="w-16 h-16 rounded-full bg-brand-orange/10 flex items-center justify-center mx-auto text-brand-orange">
                    <Calendar className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-warm-ivory">Schedule Your Discovery Call</h3>
                  <p className="text-soft-gray text-sm leading-relaxed">
                    Our booking calendar is temporarily unavailable. Please reach out directly and we will schedule your session within 24 hours.
                  </p>
                  <a
                    href="https://calendly.com/nocodesaarthiteam/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <MagneticButton className="bg-brand-orange text-white px-6 py-3 text-sm shadow-lg shadow-brand-orange/20 border border-brand-orange/30">
                      Open Calendly in New Tab
                    </MagneticButton>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Column 2: Rich Project Inquiry Form */}
        <div className="lg:col-span-5 space-y-6">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-panel rounded-2xl p-8 text-center space-y-6 border border-brand-orange/20"
            >
              <div className="w-16 h-16 rounded-full bg-brand-orange/10 flex items-center justify-center mx-auto text-brand-orange">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-serif font-bold text-2xl text-warm-ivory">Requirements Captured!</h3>
              <p className="text-soft-gray text-sm leading-relaxed">
                Thank you for submitting your project parameters. Our AI Product Architect has received your scope and will review it before our discovery call.
              </p>
              <div className="h-px bg-white/8" />
              <div className="space-y-4">
                <p className="text-xs text-soft-gray font-mono">Need instant response?</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <MagneticButton className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-sm flex items-center justify-center gap-2">
                    <MessageSquare className="w-4 h-4 shrink-0" />
                    <span>WhatsApp Verification</span>
                  </MagneticButton>
                </a>
              </div>
            </motion.div>
          ) : (
            <HoverCard className="p-8" glowColor="rgba(15, 118, 110, 0.12)">
              <h3 className="font-serif font-bold text-2xl text-warm-ivory mb-2">Scope Project Intake</h3>
              <p className="text-xs text-soft-gray mb-6">Specify parameters to help us prepare options prior to the call.</p>

              <form onSubmit={handleSubmit} className="space-y-5 font-sans">
                {/* Name */}
                <div className="space-y-1">
                  <label htmlFor="name" className="text-xs font-semibold text-soft-gray uppercase tracking-wider block">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/4 border border-white/8 rounded-lg py-2.5 px-3 text-sm text-warm-ivory focus:outline-none focus:border-brand-orange transition-colors"
                    placeholder="e.g. John Doe"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-semibold text-soft-gray uppercase tracking-wider block">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/4 border border-white/8 rounded-lg py-2.5 px-3 text-sm text-warm-ivory focus:outline-none focus:border-brand-orange transition-colors"
                    placeholder="e.g. john@company.com"
                  />
                </div>

                {/* Company & Industry */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="company" className="text-xs font-semibold text-soft-gray uppercase tracking-wider block">Company</label>
                    <input
                      type="text"
                      id="company"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-white/4 border border-white/8 rounded-lg py-2.5 px-3 text-sm text-warm-ivory focus:outline-none focus:border-brand-orange transition-all duration-300 ease-out"
                      placeholder="e.g. Acme Corp"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="industry" className="text-xs font-semibold text-soft-gray uppercase tracking-wider block">Industry</label>
                    <input
                      type="text"
                      id="industry"
                      required
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full bg-white/4 border border-white/8 rounded-lg py-2.5 px-3 text-sm text-warm-ivory focus:outline-none focus:border-brand-orange transition-all duration-300 ease-out"
                      placeholder="e.g. Finance"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div className="space-y-1">
                  <label htmlFor="projectType" className="text-xs font-semibold text-soft-gray uppercase tracking-wider block">Project Type</label>
                  <select
                    id="projectType"
                    required
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-white/4 border border-white/8 rounded-lg py-2.5 px-3 text-sm text-warm-ivory focus:outline-none focus:border-brand-orange transition-colors cursor-pointer"
                  >
                    <option value="" disabled className="bg-secondary-bg text-soft-gray">Select Type</option>
                    <option value="ai-agents" className="bg-secondary-bg">Autonomous AI Agents</option>
                    <option value="ai-automation" className="bg-secondary-bg">AI Automation Flow</option>
                    <option value="workflow-automation" className="bg-secondary-bg">Workflow Automations (n8n/Make)</option>
                    <option value="mvp" className="bg-secondary-bg">MVP Development (Bubble/FlutterFlow)</option>
                    <option value="full-stack" className="bg-secondary-bg">Custom Full Stack Application</option>
                    <option value="consulting" className="bg-secondary-bg">AI Corporate Advisory</option>
                  </select>
                </div>

                {/* Budget & Timeline */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="budget" className="text-xs font-semibold text-soft-gray uppercase tracking-wider block">Est. Budget</label>
                    <select
                      id="budget"
                      required
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-white/4 border border-white/8 rounded-lg py-2.5 px-3 text-sm text-warm-ivory focus:outline-none focus:border-brand-orange transition-colors cursor-pointer"
                    >
                      <option value="" disabled className="bg-secondary-bg">Select Budget</option>
                      <option value="under-5k" className="bg-secondary-bg">Under $5k</option>
                      <option value="5k-15k" className="bg-secondary-bg">$5k - $15k</option>
                      <option value="15k-50k" className="bg-secondary-bg">$15k - $50k</option>
                      <option value="above-50k" className="bg-secondary-bg">$50k +</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="timeline" className="text-xs font-semibold text-soft-gray uppercase tracking-wider block">Timeline</label>
                    <select
                      id="timeline"
                      required
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full bg-white/4 border border-white/8 rounded-lg py-2.5 px-3 text-sm text-warm-ivory focus:outline-none focus:border-brand-orange transition-colors cursor-pointer"
                    >
                      <option value="" disabled className="bg-secondary-bg">Select Timeline</option>
                      <option value="under-1m" className="bg-secondary-bg">Under 1 month</option>
                      <option value="1-3m" className="bg-secondary-bg">1 to 3 months</option>
                      <option value="above-3m" className="bg-secondary-bg">3+ months</option>
                    </select>
                  </div>
                </div>

                {/* Goals */}
                <div className="space-y-1">
                  <label htmlFor="goals" className="text-xs font-semibold text-soft-gray uppercase tracking-wider block">Project Goals & Description</label>
                  <textarea
                    id="goals"
                    required
                    rows={3}
                    value={formData.goals}
                    onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                    className="w-full bg-white/4 border border-white/8 rounded-lg py-2.5 px-3 text-sm text-warm-ivory focus:outline-none focus:border-brand-orange transition-colors resize-none"
                    placeholder="Describe what processes you want to automate or features you need..."
                  />
                </div>

                {/* Submit button */}
                <MagneticButton
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white py-3 text-sm shadow-lg shadow-brand-orange/20 border border-brand-orange/30 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Scope Details
                    </>
                  )}
                </MagneticButton>
              </form>
            </HoverCard>
          )}

          <div className="flex items-center gap-2.5 text-xs text-soft-gray font-sans border-t border-white/8 pt-6">
            <ShieldCheck className="w-4 h-4 text-brand-orange shrink-0" />
            <span>GDPR compliant database node. Requirements logs are fully encrypted and never sold.</span>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {toast && (
          <Toast
            message={toast}
            onClose={() => setToast(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
