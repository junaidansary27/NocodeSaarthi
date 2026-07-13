import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Rocket } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';

const servicesList = [
  { name: 'AI Agents', path: '/services/ai-agents' },
  { name: 'AI Automation', path: '/services/ai-automation' },
  { name: 'Workflow Automation', path: '/services/workflow-automation' },
  { name: 'MVP Development', path: '/services/mvp-development' },
  { name: 'Full Stack Development', path: '/services/full-stack-development' },
  { name: 'No-Code Development', path: '/services/no-code-development' },
  { name: 'AI Consulting', path: '/services/ai-consulting' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on page navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-navbar py-4 shadow-xl shadow-black/10' : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group transition-all duration-300 ease-out hover:scale-[1.03] select-none"
        >
          <img
            src="/logo/logo.png"
            alt="Nocode Saarthi Logo"
            className="h-[40px] w-auto object-contain transition-all duration-300 ease-out group-hover:drop-shadow-[0_0_10px_rgba(255,107,53,0.4)]"
          />
          <div className="flex flex-col justify-center leading-none">
            <span className="font-serif font-bold text-lg sm:text-xl md:text-2xl text-warm-ivory tracking-tight transition-colors duration-300">
              Nocode <span className="text-brand-orange">Saarthi</span>
            </span>
            <span className="text-[8px] sm:text-[9px] md:text-[10px] font-mono tracking-widest text-soft-gray opacity-65 mt-1.5 uppercase font-medium transition-colors duration-300 group-hover:text-warm-ivory/80">
              Build • Automate • Grow
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 font-sans">
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button className="flex items-center gap-1.5 text-sm font-medium text-soft-gray hover:text-warm-ivory py-2 transition-all duration-300 ease-out hover:scale-105 cursor-pointer">
              Services <ChevronDown className="w-4 h-4" />
            </button>
            <AnimatePresence>
              {servicesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-full mt-2 w-64 glass-panel rounded-xl shadow-2xl p-2 z-50"
                >
                  {servicesList.map((service) => (
                    <NavLink
                      key={service.path}
                      to={service.path}
                      className={({ isActive }) =>
                        `block px-4 py-2.5 rounded-lg text-sm transition-all duration-300 ease-out ${isActive
                          ? 'bg-brand-orange/10 text-brand-orange font-medium'
                          : 'text-soft-gray hover:bg-white/5 hover:text-warm-ivory'
                        }`
                      }
                    >
                      {service.name}
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              `relative text-sm font-medium transition-all duration-300 ease-out py-1 hover:scale-105 ${isActive ? 'text-brand-orange' : 'text-soft-gray hover:text-warm-ivory'
              }`
            }
          >
            {({ isActive }) => (
              <>
                Portfolio
                {isActive && (
                  <motion.div
                    layoutId="activeNavUnderline"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-brand-orange rounded-full"
                  />
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/technologies"
            className={({ isActive }) =>
              `relative text-sm font-medium transition-all duration-300 ease-out py-1 hover:scale-105 ${isActive ? 'text-brand-orange' : 'text-soft-gray hover:text-warm-ivory'
              }`
            }
          >
            {({ isActive }) => (
              <>
                Technologies
                {isActive && (
                  <motion.div
                    layoutId="activeNavUnderline"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-brand-orange rounded-full"
                  />
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/founder"
            className={({ isActive }) =>
              `relative text-sm font-medium transition-all duration-300 ease-out py-1 hover:scale-105 ${isActive ? 'text-brand-orange' : 'text-soft-gray hover:text-warm-ivory'
              }`
            }
          >
            {({ isActive }) => (
              <>
                Founder
                {isActive && (
                  <motion.div
                    layoutId="activeNavUnderline"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-brand-orange rounded-full"
                  />
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `relative text-sm font-medium transition-all duration-300 ease-out py-1 hover:scale-105 ${isActive ? 'text-brand-orange' : 'text-soft-gray hover:text-warm-ivory'
              }`
            }
          >
            {({ isActive }) => (
              <>
                Contact
                {isActive && (
                  <motion.div
                    layoutId="activeNavUnderline"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-brand-orange rounded-full"
                  />
                )}
              </>
            )}
          </NavLink>
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link to="/book-discovery-call">
            <MagneticButton className="bg-brand-orange hover:bg-brand-orange/90 text-white px-6 py-2.5 text-sm font-semibold shadow-lg shadow-brand-orange/20 border border-brand-orange/30">
              Book Discovery Call
            </MagneticButton>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-warm-ivory hover:text-brand-orange transition-all duration-300 ease-out p-2 cursor-pointer"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Slide Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full md:w-96 glass-panel z-40 flex flex-col justify-between p-8 pt-28 shadow-2xl border-l border-white/10"
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-brand-orange font-semibold">Services</span>
                <div className="grid grid-cols-1 gap-2 pl-2">
                  {servicesList.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="text-soft-gray hover:text-warm-ivory text-sm py-1.5 transition-all duration-300 ease-out"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="h-px bg-white/5" />

              <div className="flex flex-col gap-4 text-lg font-medium">
                <Link
                  to="/portfolio"
                  className="text-soft-gray hover:text-warm-ivory transition-all duration-300 ease-out"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Portfolio
                </Link>
                <Link
                  to="/technologies"
                  className="text-soft-gray hover:text-warm-ivory transition-all duration-300 ease-out"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Technologies
                </Link>
                <Link
                  to="/founder"
                  className="text-soft-gray hover:text-warm-ivory transition-all duration-300 ease-out"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Founder
                </Link>
                <Link
                  to="/contact"
                  className="text-soft-gray hover:text-warm-ivory transition-all duration-300 ease-out"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  to="/focal"
                  className="text-soft-gray hover:text-warm-ivory transition-all duration-300 ease-out"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Focal
                </Link>
              </div>
            </div>

            <div>
              <Link to="/book-discovery-call" className="block w-full">
                <button className="w-full bg-brand-orange text-white py-3.5 rounded-full font-semibold shadow-lg shadow-brand-orange/20 cursor-pointer">
                  Book Discovery Call
                </button>
              </Link>
              <div className="flex items-center justify-center gap-2 mt-4 text-xs text-soft-gray">
                <Rocket className="w-3.5 h-3.5 text-brand-orange" />
                <span>Building the Future of Business</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
