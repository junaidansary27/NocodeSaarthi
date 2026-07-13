import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, MapPin, Send } from 'lucide-react';
import { HoverCard } from '../../components/ui/HoverCard';
import { MagneticButton } from '../../components/ui/MagneticButton';
import emailjs from '@emailjs/browser';
import { EMAILJS_SERVICE_ID, EMAILJS_PUBLIC_KEY } from '../../config/emailjs';

const EMAILJS_TEMPLATE_ID = 'template_ium6r0j';

export default function Contact() {
  const [contactData, setContactData] = useState({ name: '', mobile: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [serverMessage, setServerMessage] = useState('');

  const validate = (data: typeof contactData): Record<string, string> => {
    const next: Record<string, string> = {};
    if (data.name.trim().length < 2) next.name = 'Please enter your name.';
    const digits = data.mobile.replace(/\D/g, '');
    if (!/^[+]?[\d\s()-]{6,}$/.test(data.mobile.trim()) || digits.length < 7 || digits.length > 15) {
      next.mobile = 'Enter a valid mobile number (7-15 digits, international).';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) next.email = 'Enter a valid email address.';
    if (data.message.trim().length < 10) next.message = 'Message must be at least 10 characters.';
    return next;
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;
    const trimmed = {
      name: contactData.name.trim(),
      mobile: contactData.mobile.trim(),
      email: contactData.email.trim(),
      message: contactData.message.trim(),
    };
    const found = validate(trimmed);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus('loading');
    setServerMessage('');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: trimmed.name,
          mobile: trimmed.mobile,
          email: trimmed.email,
          message: trimmed.message,
          time: new Date().toLocaleString(),
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus('success');
      setContactData({ name: '', mobile: '', email: '', message: '' });
      setErrors({});
      setTimeout(() => setStatus('idle'), 8000);
    } catch (err) {
      setStatus('error');
      const e = err as { text?: string; message?: string };
      setServerMessage(e?.text || e?.message || 'Unable to send your message. Please try again later.');
    }
  };

  return (
    <div className="pt-24 min-h-screen">
      <Helmet>
        <title>Contact & Secure Payments | Nocode Saarthi</title>
        <meta name="description" content="Reach our engineering support desk and process secure project milestone payments via Stripe or Razorpay." />
        <link rel="canonical" href="https://nocodesaarthi.com/contact" />
      </Helmet>

      {/* Hero Header */}
      <section className="px-6 py-12 text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-widest text-brand-orange font-semibold bg-brand-orange/10 px-3.5 py-1.5 rounded-full border border-brand-orange/20">
          SECURE GATEWAY
        </span>
        <h1 className="font-serif font-bold text-4xl md:text-5xl text-warm-ivory leading-tight">
          Connect With Us & Pay Safely.
        </h1>
        <p className="text-soft-gray text-sm md:text-base leading-relaxed">
          Submit support inquiries or securely complete consultation, kickoff deposits, and project milestones instantly.
        </p>
      </section>

      {/* Grid columns */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* Column 1: Contact Form & Info */}
        <div className="lg:col-span-6 space-y-8">
          <HoverCard glowColor="rgba(15, 118, 110, 0.12)">
            <h3 className="font-serif font-bold text-2xl text-warm-ivory mb-6">Drop Us a Message</h3>
            {status === 'success' ? (
              <div className="p-6 bg-brand-orange/10 border border-brand-orange/20 rounded-xl text-center space-y-3">
                <span className="text-sm font-semibold text-brand-orange">Message Transmitted!</span>
                <p className="text-xs text-soft-gray">We will respond within 12 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4 font-sans">
                {status === 'error' && (
                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-center">
                    <span className="text-sm font-semibold text-red-400">Submission Failed</span>
                    <p className="text-xs text-soft-gray mt-1">{serverMessage}</p>
                  </div>
                )}
                <div className="space-y-1">
                  <label htmlFor="contact-name" className="text-xs font-semibold text-soft-gray uppercase tracking-wider block">Your Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    value={contactData.name}
                    onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                     className={"w-full bg-white/4 border border-white/8 rounded-lg py-2.5 px-3 text-sm text-warm-ivory focus:outline-none focus:border-brand-orange transition-all duration-300 ease-out" + (errors.name ? " border-red-500/60" : "")}
                    placeholder="e.g. Sarah Jenkins"
                  />
                  {errors.name && <p className="text-xs text-red-400">{errors.name}</p>}
                </div>
                <div className="space-y-1">
                  <label htmlFor="contact-mobile" className="text-xs font-semibold text-soft-gray uppercase tracking-wider block">Mobile Number</label>
                  <input
                    type="tel"
                    id="contact-mobile"
                    required
                    value={contactData.mobile}
                    onChange={(e) => setContactData({ ...contactData, mobile: e.target.value })}
                     className={"w-full bg-white/4 border border-white/8 rounded-lg py-2.5 px-3 text-sm text-warm-ivory focus:outline-none focus:border-brand-orange transition-all duration-300 ease-out" + (errors.mobile ? " border-red-500/60" : "")}
                    placeholder="Enter your mobile number"
                  />
                  {errors.mobile && <p className="text-xs text-red-400">{errors.mobile}</p>}
                </div>
                <div className="space-y-1">
                  <label htmlFor="contact-email" className="text-xs font-semibold text-soft-gray uppercase tracking-wider block">Email Address</label>
                  <input
                    type="email"
                    id="contact-email"
                    required
                    value={contactData.email}
                    onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                     className={"w-full bg-white/4 border border-white/8 rounded-lg py-2.5 px-3 text-sm text-warm-ivory focus:outline-none focus:border-brand-orange transition-all duration-300 ease-out" + (errors.email ? " border-red-500/60" : "")}
                    placeholder="e.g. sarah@fintech.com"
                  />
                  {errors.email && <p className="text-xs text-red-400">{errors.email}</p>}
                </div>
                <div className="space-y-1">
                  <label htmlFor="contact-message" className="text-xs font-semibold text-soft-gray uppercase tracking-wider block">Message</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={contactData.message}
                    onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                    className={"w-full bg-white/4 border border-white/8 rounded-lg py-2.5 px-3 text-sm text-warm-ivory focus:outline-none focus:border-brand-orange transition-colors resize-none" + (errors.message ? " border-red-500/60" : "")}
                    placeholder="What project parameters or questions would you like to ask?"
                  />
                  {errors.message && <p className="text-xs text-red-400">{errors.message}</p>}
                </div>
                <MagneticButton type="submit" disabled={status === 'loading'} className="w-full bg-white/5 hover:bg-white/8 border border-white/8 text-warm-ivory py-3 text-sm disabled:opacity-60 disabled:cursor-not-allowed">
                  <Send className="w-4 h-4 mr-2" /> {status === 'loading' ? 'Sending...' : 'Send Query'}
                </MagneticButton>
              </form>
            )}
          </HoverCard>

          {/* Quick contact nodes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <HoverCard className="p-6 flex items-start gap-4">
              <Mail className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-warm-ivory text-sm">Email Support</h4>
                <p className="text-xs text-soft-gray mt-1">hello@nocodesaarthi.com</p>
              </div>
            </HoverCard>
            <HoverCard className="p-6 flex items-start gap-4">
              <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-warm-ivory text-sm">Location</h4>
                <p className="text-xs text-soft-gray mt-1">Remote</p>
              </div>
            </HoverCard>
          </div>
        </div>

        {/* Column 2: Payment Terms & Additional Charges */}
        <div className="lg:col-span-6 space-y-8">
          <HoverCard glowColor="rgba(255, 107, 53, 0.12)">
            <h3 className="font-serif font-bold text-2xl text-warm-ivory mb-6">Payment Terms</h3>
            <ul className="space-y-3 text-sm text-soft-gray">
              <li className="flex items-start gap-2">
                <span className="text-brand-orange mt-0.5">•</span>
                <span>40% Advance – Project Kickoff</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange mt-0.5">•</span>
                <span>30% – Midway Milestone</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange mt-0.5">•</span>
                <span>30% – Before Final Deployment</span>
              </li>
            </ul>
          </HoverCard>

          <HoverCard glowColor="rgba(255, 107, 53, 0.12)">
            <h3 className="font-serif font-bold text-2xl text-warm-ivory mb-6">Additional Charges</h3>
            <ul className="space-y-3 text-sm text-soft-gray">
              <li className="flex items-start gap-2">
                <span className="text-brand-orange mt-0.5">•</span>
                <span>OpenAI / LLM API usage</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange mt-0.5">•</span>
                <span>WhatsApp Business API fees</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange mt-0.5">•</span>
                <span>Payment Gateway charges</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange mt-0.5">•</span>
                <span>Hosting & Cloud Infrastructure</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange mt-0.5">•</span>
                <span>Domain & SSL</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange mt-0.5">•</span>
                <span>SMS / Email services</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-orange mt-0.5">•</span>
                <span>Third-party licenses</span>
              </li>
            </ul>
          </HoverCard>
        </div>
      </section>
    </div>
  );
}
