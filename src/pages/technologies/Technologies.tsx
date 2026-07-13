import { Cpu, Terminal, Database, Bot, RefreshCw, Server, ShieldCheck } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { HoverCard } from '../../components/ui/HoverCard';
import { ScrollReveal } from '../../components/ui/ScrollReveal';
import {
  SiReact, SiTypescript, SiNextdotjs, SiNodedotjs, SiExpress,
  SiPostgresql, SiSupabase, SiGooglegemini, SiClaude, SiLangchain,
  SiN8N, SiMake, SiZapier, SiVercel, SiDocker, SiOpenaigym, SiLightning
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

interface TechItem {
  name: string;
  description: string;
  icon?: React.ReactNode;
}

interface TechCategory {
  title: string;
  icon: React.ReactNode;
  glow: string;
  items: TechItem[];
}

// Helper function to get brand icon for a tool
const getTechIcon = (name: string): React.ReactNode => {
  const iconMap: Record<string, React.ReactNode> = {
    // Frontend
    'React': <SiReact className="w-3.5 h-3.5 text-brand-orange shrink-0" />,
    'TypeScript': <SiTypescript className="w-3.5 h-3.5 text-brand-orange shrink-0" />,
    'Next.js': <SiNextdotjs className="w-3.5 h-3.5 text-brand-orange shrink-0" />,
    // Backend
    'Node.js': <SiNodedotjs className="w-3.5 h-3.5 text-brand-orange shrink-0" />,
    'Express': <SiExpress className="w-3.5 h-3.5 text-brand-orange shrink-0" />,
    // Databases
    'PostgreSQL': <SiPostgresql className="w-3.5 h-3.5 text-brand-orange shrink-0" />,
    'Supabase': <SiSupabase className="w-3.5 h-3.5 text-brand-orange shrink-0" />,
    // AI Models
    'OpenAI GPT-4o': <SiOpenaigym className="w-3.5 h-3.5 text-brand-orange shrink-0" />, // SiOpenai not available in react-icons/si v5; SiOpenaigym is the closest SI brand icon
    'Claude 3.5 Sonnet': <SiClaude className="w-3.5 h-3.5 text-brand-orange shrink-0" />,
    'Gemini 1.5 Pro': <SiGooglegemini className="w-3.5 h-3.5 text-brand-orange shrink-0" />,
    'LangChain / LangGraph': <SiLangchain className="w-3.5 h-3.5 text-brand-orange shrink-0" />,
    // Workflow Automation
    'n8n': <SiN8N className="w-3.5 h-3.5 text-brand-orange shrink-0" />,
    'Make.com': <SiMake className="w-3.5 h-3.5 text-brand-orange shrink-0" />,
    'Zapier': <SiZapier className="w-3.5 h-3.5 text-brand-orange shrink-0" />,
    // Cloud & Infrastructure
    'AWS': <FaAws className="w-3.5 h-3.5 text-brand-orange shrink-0" />,
    'Vercel': <SiVercel className="w-3.5 h-3.5 text-brand-orange shrink-0" />,
    'Docker': <SiDocker className="w-3.5 h-3.5 text-brand-orange shrink-0" />,
  };
  return iconMap[name] || <SiLightning className="w-3.5 h-3.5 text-brand-orange shrink-0" />;
};

const techCategories: TechCategory[] = [
  {
    title: 'Frontend Engineering',
    icon: <Terminal className="w-5 h-5" />,
    glow: 'rgba(15, 118, 110, 0.12)',
    items: [
      { name: 'React', description: 'Advanced client side component architecture.' },
      { name: 'TypeScript', description: 'Strong static typings for stable applications.' },
      { name: 'Next.js', description: 'Server rendered fast landing frameworks.' },
    ]
  },
  {
    title: 'Backend Systems',
    icon: <Server className="w-5 h-5" />,
    glow: 'rgba(255, 107, 53, 0.12)',
    items: [
      { name: 'Node.js', description: 'Fast asynchronous event-driven environments.' },
      { name: 'Express', description: 'Lightweight REST API routers implementation.' },
    ]
  },
  {
    title: 'Databases & Security',
    icon: <Database className="w-5 h-5" />,
    glow: 'rgba(192, 132, 252, 0.12)',
    items: [
      { name: 'PostgreSQL', description: 'Robust, ACID-compliant relational storage.' },
      { name: 'Supabase', description: 'Scalable auth layers and pgvector storage.' },
    ]
  },
  {
    title: 'Cognitive AI Models',
    icon: <Bot className="w-5 h-5" />,
    glow: 'rgba(15, 118, 110, 0.12)',
    items: [
      { name: 'OpenAI GPT-4o', description: 'High capability logical prompts routing.' },
      { name: 'Claude 3.5 Sonnet', description: 'Top tier coding and documentation parsing.' },
      { name: 'Gemini 1.5 Pro', description: 'Unmatched 2 million token long context window.' },
      { name: 'LangChain / LangGraph', description: 'Complex conversational multi-agent logic.' }
    ]
  },
  {
    title: 'Workflow Automation',
    icon: <RefreshCw className="w-5 h-5" />,
    glow: 'rgba(255, 107, 53, 0.12)',
    items: [
      { name: 'n8n', description: 'Self-hosted, cost-effective API pipeline engine.' },
      { name: 'Make.com', description: 'Visual visual nodes cloud orchestrator.' },
      { name: 'Zapier', description: 'Simple third-party integrations connector.' }
    ]
  },
  {
    title: 'Cloud & Infrastructure',
    icon: <Cpu className="w-5 h-5" />,
    glow: 'rgba(247, 244, 238, 0.08)',
    items: [
      { name: 'AWS', description: 'Scalable cloud computing EC2 and Textract OCR.' },
      { name: 'Vercel', description: 'Edge caching front-end hosting.' },
      { name: 'Docker', description: 'Containerized deployment setups for tools.' }
    ]
  }
];

export default function Technologies() {
  return (
    <div className="pt-24 min-h-screen">
      <Helmet>
        <title>Technology Stack & AI Tools | Nocode Saarthi</title>
        <meta name="description" content="Explore our technical capabilities: LangChain RAG database setups, n8n orchestrations, and full stack React/TS web apps." />
        <link rel="canonical" href="https://nocodesaarthi.com/technologies" />
      </Helmet>

      {/* Hero Header */}
      <section className="px-6 py-16 md:py-24 text-center max-w-4xl mx-auto space-y-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />
        <span className="text-xs uppercase tracking-widest text-brand-orange font-semibold bg-brand-orange/10 px-3.5 py-1.5 rounded-full border border-brand-orange/20">
          OUR TECH STACK
        </span>
        <h1 className="font-serif font-bold text-4xl md:text-6xl text-warm-ivory leading-tight">
          Modern Frameworks. Zero Technical Debt.
        </h1>
        <p className="text-lg md:text-xl text-soft-gray leading-relaxed">
          We use state-of-the-art developer standards to engineer lightweight apps and cognitive agents that remain easy to maintain.
        </p>
      </section>

      {/* Tech categories Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {techCategories.map((category, index) => (
          <ScrollReveal key={index} delay={index * 0.1}>
            <HoverCard glowColor={category.glow} className="flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-brand-orange">
                    {category.icon}
                  </div>
                  <h3 className="font-serif font-bold text-lg text-warm-ivory">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.items.map((item, i) => (
                    <div key={i} className="p-4 bg-white/2 rounded-xl border border-white/4 space-y-1">
                      <h4 className="font-bold text-warm-ivory text-sm md:text-base flex items-center gap-1.5">
                        {getTechIcon(item.name)}
                        <span>{item.name}</span>
                      </h4>
                      <p className="text-soft-gray text-xs md:text-sm font-sans">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </HoverCard>
          </ScrollReveal>
        ))}
      </section>

      {/* Technology standards notes */}
      <section className="px-6 py-16 border-t border-white/5 bg-secondary-bg/15 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <ScrollReveal>
            <h2 className="font-serif font-bold text-2xl md:text-3xl text-warm-ivory">Our Technological Commitments</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <ScrollReveal delay={0}>
              <HoverCard className="p-6">
                <ShieldCheck className="w-8 h-8 text-brand-orange mb-4" />
                <h4 className="font-bold text-warm-ivory mb-2">Private & Secure</h4>
                <p className="text-soft-gray text-xs leading-relaxed">
                  We strictly configure data nodes with local SSL certs, isolated Docker layers, and private API vectors to enforce GDPR rules.
                </p>
              </HoverCard>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <HoverCard className="p-6">
                <ShieldCheck className="w-8 h-8 text-brand-orange mb-4" />
                <h4 className="font-bold text-warm-ivory mb-2">No Platform Lock-in</h4>
                <p className="text-soft-gray text-xs leading-relaxed">
                  We organize data structures cleanly. You retain full database ownership and can export clean code repository packages at any time.
                </p>
              </HoverCard>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <HoverCard className="p-6">
                <ShieldCheck className="w-8 h-8 text-brand-orange mb-4" />
                <h4 className="font-bold text-warm-ivory mb-2">Production-Grade Only</h4>
                <p className="text-soft-gray text-xs leading-relaxed">
                  No fragile demos. All pipelines are configured with webhook retry loops, logging triggers, and error management alerts.
                </p>
              </HoverCard>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}