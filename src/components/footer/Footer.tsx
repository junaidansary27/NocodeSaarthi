import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, MessageSquare } from 'lucide-react';
import { WHATSAPP_URL } from '../../config/whatsapp';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="border-t border-white/8 bg-secondary-bg/20 backdrop-blur-sm pt-20 pb-8 px-6 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-5">
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="/logo/logo.png"
              alt="Nocode Saarthi Logo"
              className="h-6 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
            <span className="font-serif font-bold text-lg text-warm-ivory tracking-tight group-hover:text-brand-orange transition-colors duration-300">
              Nocode <span className="text-brand-orange group-hover:text-warm-ivory transition-colors duration-300">Saarthi</span>
            </span>
          </Link>
          <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-soft-gray/70">
            Build • Automate • Grow
          </p>
          <p className="text-soft-gray text-sm md:text-base max-w-sm font-sans leading-relaxed">
            Building the Future of Business Through AI. We design and deploy enterprise-grade automation, bespoke AI agents, and robust MVPs.
          </p>
          <div className="space-y-2">
            <h4 className="text-xs font-semibold text-warm-ivory uppercase tracking-wider">Government Registered MSME Enterprise</h4>
            <p className="text-xs text-soft-gray">Recognized by Ministry of MSME, Government of India</p>
            <img src="/msme/msme-1.png" alt="Official MSME Certification" className="w-12 h-auto object-contain" />
          </div>
        </div>

        {/* Services Links */}
        <div className="space-y-4">
          <h4 className="font-semibold text-warm-ivory text-sm uppercase tracking-wider">Services</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5 text-sm font-sans">
            <li>
              <Link to="/services/ai-agents" className="text-soft-gray hover:text-brand-orange transition-all duration-300 ease-out">
                AI Agents
              </Link>
            </li>
            <li>
              <Link to="/services/ai-automation" className="text-soft-gray hover:text-brand-orange transition-all duration-300 ease-out">
                AI Automation
              </Link>
            </li>
            <li>
              <Link to="/services/workflow-automation" className="text-soft-gray hover:text-brand-orange transition-all duration-300 ease-out">
                Workflow Automation
              </Link>
            </li>
            <li>
              <Link to="/services/mvp-development" className="text-soft-gray hover:text-brand-orange transition-all duration-300 ease-out">
                MVP Development
              </Link>
            </li>
            <li>
              <Link to="/services/full-stack-development" className="text-soft-gray hover:text-brand-orange transition-all duration-300 ease-out">
                Full Stack Web App
              </Link>
            </li>
            <li>
              <Link to="/services/no-code-development" className="text-soft-gray hover:text-brand-orange transition-all duration-300 ease-out">
                No-Code Dev
              </Link>
            </li>
            <li>
              <Link to="/services/email-marketing" className="text-soft-gray hover:text-brand-orange transition-all duration-300 ease-out">
                Email Marketing
              </Link>
            </li>
            <li>
              <Link to="/services/mobile-application-development" className="text-soft-gray hover:text-brand-orange transition-all duration-300 ease-out">
                Mobile Application Development
              </Link>
            </li>
            <li>
              <Link to="/services/business-analytics" className="text-soft-gray hover:text-brand-orange transition-all duration-300 ease-out">
                Business Analytics
              </Link>
            </li>
            <li>
              <Link to="/services/saas-development" className="text-soft-gray hover:text-brand-orange transition-all duration-300 ease-out">
                SaaS Development
              </Link>
            </li>
            <li>
              <Link to="/services/enterprise-content-management" className="text-soft-gray hover:text-brand-orange transition-all duration-300 ease-out">
                Enterprise Content Management
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="space-y-4">
          <h4 className="font-semibold text-warm-ivory text-sm uppercase tracking-wider">Agency</h4>
          <ul className="space-y-2.5 text-sm font-sans">
            <li>
              <Link to="/founder" className="text-soft-gray hover:text-brand-orange transition-all duration-300 ease-out">
                Founder Bio
              </Link>
            </li>
            <li>
              <Link to="/technologies" className="text-soft-gray hover:text-brand-orange transition-all duration-300 ease-out">
                Technologies
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-soft-gray hover:text-brand-orange transition-all duration-300 ease-out">
                Get in Touch
              </Link>
            </li>
            <li>
              <Link to="/careers" className="text-soft-gray hover:text-brand-orange transition-all duration-300 ease-out">
                Careers
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-soft-gray hover:text-brand-orange transition-all duration-300 ease-out">
                Insights Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter / Contact */}
        <div className="space-y-4">
          <h4 className="font-semibold text-warm-ivory text-sm uppercase tracking-wider">Stay Informed</h4>
          <p className="text-soft-gray text-xs md:text-sm leading-relaxed">
            Subscribe to our weekly brief on how startups automate workflows and scale using AI.
          </p>
          <form onSubmit={handleSubscribe} className="relative flex items-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="w-full bg-white/5 border border-white/8 rounded-lg py-2.5 pl-3 pr-10 text-sm text-warm-ivory focus:outline-none focus:border-brand-orange transition-colors"
            />
            <button
              type="submit"
              className="absolute right-1 p-2 text-brand-orange hover:text-warm-ivory transition-all duration-300 ease-out cursor-pointer"
              aria-label="Subscribe"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
          {subscribed && (
            <span className="text-xs text-brand-orange block animate-fade-in font-mono">
              ✓ Subscribed successfully!
            </span>
          )}
        </div>
      </div>

      <div className="h-px bg-white/8 my-8 max-w-7xl mx-auto" />

      {/* Bottom Legal bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-soft-gray font-sans">
        <p>© {new Date().getFullYear()} Nocode Saarthi. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link to="/privacy" className="hover:text-brand-orange transition-all duration-300 ease-out">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-brand-orange transition-all duration-300 ease-out">
            Terms & Conditions
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-brand-orange hover:underline"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
