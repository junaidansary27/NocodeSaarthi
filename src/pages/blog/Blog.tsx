import { BookOpen, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { HoverCard } from '../../components/ui/HoverCard';
import { MagneticButton } from '../../components/ui/MagneticButton';
import { Link } from 'react-router-dom';

interface Article {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
}

const articles: Article[] = [
  {
    title: 'The n8n Playbook: Why We Replaced Zapier & Saved $12,000 Annually',
    excerpt: 'Explore how self-hosted workflow automation tools scale execution counts to infinity with zero license costs.',
    date: 'June 28, 2026',
    readTime: '6 min read',
    category: 'Operations',
    slug: 'n8n-vs-zapier-playbook'
  },
  {
    title: 'Designing Multi-Agent LLMs: A Structural Guide to LangGraph',
    excerpt: 'How to build self-correcting prompt routing logic tables and agent validation loops in LangGraph.',
    date: 'May 14, 2026',
    readTime: '9 min read',
    category: 'AI Engineering',
    slug: 'multi-agent-langgraph-guide'
  },
  {
    title: 'Is Low-Code Ready for HIPAA-Compliant Medical MVPs?',
    excerpt: 'A review of Supabase data column encryptions and secure inputs routing on visual frameworks like FlutterFlow.',
    date: 'April 02, 2026',
    readTime: '5 min read',
    category: 'Compliance',
    slug: 'low-code-hipaa-compliance'
  }
];

export default function Blog() {
  return (
    <div className="pt-24 min-h-screen">
      <Helmet>
        <title>Insights & Engineering Blog | Nocode Saarthi</title>
        <meta name="description" content="Read our operational blueprints on self-hosting n8n, programming multi-agent LLM systems, and secure database designs." />
        <link rel="canonical" href="https://nocodesaarthi.com/blog" />
      </Helmet>

      {/* Hero Header */}
      <section className="px-6 py-16 md:py-24 text-center max-w-4xl mx-auto space-y-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />
        <span className="text-xs uppercase tracking-widest text-brand-orange font-semibold bg-brand-orange/10 px-3.5 py-1.5 rounded-full border border-brand-orange/20">
          INSIGHTS BLOG
        </span>
        <h1 className="font-serif font-bold text-4xl md:text-6xl text-warm-ivory leading-tight">
          Blueprints & Technical Deep Dives.
        </h1>
        <p className="text-lg md:text-xl text-soft-gray leading-relaxed font-sans">
          We write objective tutorials and reports for operations managers and product developers. No corporate buzzwords.
        </p>
      </section>

      {/* Articles Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <HoverCard key={index} className="flex flex-col justify-between h-full" glowColor="rgba(15, 118, 110, 0.08)">
            <div>
              <div className="flex items-center gap-3 text-xs text-soft-gray font-mono mb-4">
                <span>{article.date}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/10" />
                <span>{article.readTime}</span>
              </div>

              <span className="text-[10px] uppercase font-mono tracking-wider bg-brand-orange/10 border border-brand-orange/20 text-brand-orange px-2.5 py-1 rounded mb-4 inline-block font-semibold">
                {article.category}
              </span>

              <h3 className="font-serif font-bold text-xl text-warm-ivory mt-2 mb-3 leading-snug hover:text-brand-orange transition-colors">
                {article.title}
              </h3>
              <p className="text-soft-gray text-xs md:text-sm leading-relaxed mb-6 font-sans">
                {article.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-white/4 flex items-center justify-between">
              <span className="text-xs text-soft-gray font-mono">By Devendra Saarthi</span>
                 <button
                   className="flex items-center gap-1 text-xs font-semibold text-brand-orange hover:text-warm-ivory transition-all duration-300 ease-out cursor-pointer"
                   onClick={() => alert(`Reviewing the article "${article.title}" in our next newsletter sprint!`)}
                 >
                <span>Read Article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </HoverCard>
        ))}
      </section>

      {/* Newsletter block */}
      <section className="px-6 py-20 text-center bg-secondary-bg/25 border-t border-white/5">
        <div className="max-w-3xl mx-auto space-y-6">
          <BookOpen className="w-10 h-10 text-brand-orange mx-auto" />
          <h2 className="font-serif font-bold text-3xl text-warm-ivory">Want these drafts in your inbox?</h2>
          <p className="text-soft-gray text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Subscribe to our weekly brief on how startups automate workflows and scale using custom AI and No-Code.
          </p>
          <div className="pt-4">
            <Link to="/contact">
              <MagneticButton className="bg-brand-orange text-white px-8 py-3.5 shadow-lg shadow-brand-orange/20">
                Join 4,200+ Operators
              </MagneticButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
