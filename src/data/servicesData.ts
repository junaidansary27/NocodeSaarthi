export interface ServiceContent {
  id: string;
  title: string;
  tagline: string;
  heroDesc: string;
  problem: {
    title: string;
    desc: string;
    points: string[];
  };
  solution: {
    title: string;
    desc: string;
    points: { title: string; desc: string }[];
  };
  deliverables: string[];
  process: { step: string; title: string; desc: string }[];
  technologies: string[];
  timeline: string;
  faqs: { question: string; answer: string }[];
  testimonial: {
    review: string;
    author: string;
    role: string;
    company: string;
    image: string;
  };
}

export const servicesData: Record<string, ServiceContent> = {
  'ai-agents': {
    id: 'ai-agents',
    title: 'Autonomous AI Agents',
    tagline: 'Delegate high-volume cognitive tasks to self-improving digital workers.',
    heroDesc: 'We design and deploy custom, multi-agent LLM systems that execute workflows, write code, resolve support queries, and optimize databases autonomously.',
    problem: {
      title: 'The Bottleneck of Manual Cognitive Work',
      desc: 'Human operations spend over 60% of their day responding to repetitive emails, looking up records in legacy ERPs, and updating spreadsheets.',
      points: [
        'High operational costs for 24/7 coverage',
        'Human error in critical data entry and routing tasks',
        'Slow response times leading to client drop-offs',
        'Inability to scale customer operations without linear hiring'
      ]
    },
    solution: {
      title: 'Intelligent AI Agents Powered by Custom RAG',
      desc: 'Our autonomous agents integrate directly with your databases, messaging channels (Slack, WhatsApp), and internal CRM systems.',
      points: [
        { title: 'Semantic Knowledge Search', desc: 'Utilizes advanced vector embeddings to retrieve precise regulatory or company manuals.' },
        { title: 'Dynamic API Execution', desc: 'Agents trigger standard REST webhooks to modify data, issue refunds, or dispatch emails.' },
        { title: 'Self-Correcting Loops', desc: 'Employs reflection algorithms to verify output correctness before user submission.' }
      ]
    },
    deliverables: [
      'Multi-Agent orchestration architecture (LangGraph / CrewAI)',
      'Vector Database setup (Supabase pgvector / Pinecone)',
      'Enterprise API Integrations',
      'Interactive Admin Monitoring Panel',
      '30 Days Hypercare & System Refinement'
    ],
    process: [
      { step: '01', title: 'Knowledge Mapping', desc: 'Auditing your databases, docs, and processes.' },
      { step: '02', title: 'Prompt engineering & RAG setup', desc: 'Developing prompt strategies and database links.' },
      { step: '03', title: 'Agent Sandbox', desc: 'Testing agent logic in safe staging environments.' },
      { step: '04', title: 'Production Deployment', desc: 'Going live with human-in-the-loop triggers.' }
    ],
    technologies: ['OpenAI GPT-4o', 'LangChain', 'Supabase', 'TypeScript', 'Node.js', 'Pinecone'],
    timeline: '4 - 6 Weeks',
    faqs: [
      { question: 'What LLMs do you use for these agents?', answer: 'We typically use OpenAI GPT-4o, Claude 3.5 Sonnet, or Gemini 1.5 Pro depending on performance needs, and Llama 3 for self-hosted instances.' },
      { question: 'Is my enterprise data kept private?', answer: 'Yes. We enforce enterprise API configurations that prevent providers from using your private database queries for training models.' }
    ],
    testimonial: {
      review: 'The AI billing agent Nocode Saarthi deployed handles 80% of our daily query volume, freeing our support team to focus on enterprise sales. Flawless execution.',
      author: 'Markus Vance',
      role: 'Head of Support',
      company: 'Logix SaaS',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
    }
  },
  'ai-automation': {
    id: 'ai-automation',
    title: 'Cognitive AI Automation',
    tagline: 'Infuse artificial intelligence directly into your daily SaaS workflows.',
    heroDesc: 'Automate content writing, lead scoring, document extraction, and visual reports by weaving state-of-the-art AI triggers right into your core systems.',
    problem: {
      title: 'Unstructured Data is Trapped & Costing You Millions',
      desc: 'Startups and MSMEs lose days translating scanned PDF receipts, incoming sales emails, and customer feedback surveys manually into database records.',
      points: [
        'Time wasted processing unstructured invoices and agreements',
        'Inability to instantly categorize user sentiment',
        'Manual translation and summarization bottlenecks',
        'Delayed sales follow-ups due to raw, un-enriched leads'
      ]
    },
    solution: {
      title: 'Automated Intelligent Document Processing (IDP)',
      desc: 'We construct end-to-end automation pipelines that read, classify, translate, and act on inputs instantly.',
      points: [
        { title: 'AI-Enhanced Form Processing', desc: 'Automatically extract line items from complex invoices with 99.8% accuracy.' },
        { title: 'Real-time Lead Enrichment', desc: 'Perform immediate web search checks on new signups and draft custom email replies.' },
        { title: 'Categorization Pipelines', desc: 'Sort customer emails by threat levels and automatically escalate high-churn warnings.' }
      ]
    },
    deliverables: [
      'Document parsing pipeline using OCR + LLMs',
      'Automated custom enrichment scripts',
      'Slack/Teams alerting triggers',
      'Comprehensive error reporting dashboard',
      'Complete operator playbook documentation'
    ],
    process: [
      { step: '01', title: 'Data Audit', desc: 'We isolate the unstructured documents and tables.' },
      { step: '02', title: 'Pipeline Prototyping', desc: 'Writing custom parsers and testing model extraction.' },
      { step: '03', title: 'Integration Sync', desc: 'Connecting output directly into Hubspot, Salesforce, or Postgres.' },
      { step: '04', title: 'Handover & Training', desc: 'Providing full training to team operators.' }
    ],
    technologies: ['Gemini Pro', 'n8n', 'Python', 'AWS Textract', 'PostgreSQL', 'Express'],
    timeline: '3 - 5 Weeks',
    faqs: [
      { question: 'Can this read hand-written invoices?', answer: 'Yes, using hybrid setups of AWS Textract or OpenAI Vision models we can parse handwritten invoices and notes with high precision.' },
      { question: 'What happens if the AI makes an error?', answer: 'We set a confidence score threshold. Any document scoring below 90% is flagged for human review in a designated dashboard.' }
    ],
    testimonial: {
      review: 'Our document classification time dropped from hours to seconds. The AI pipeline reads incoming contracts and highlights key clauses perfectly.',
      author: 'Jean-Luc Dupond',
      role: 'COO',
      company: 'Venezia Shipping',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80'
    }
  },
  'workflow-automation': {
    id: 'workflow-automation',
    title: 'Hyper-Efficient Workflow Automation',
    tagline: 'Connect all your SaaS software and run a zero-friction business.',
    heroDesc: 'Stop copy-pasting data. We build scalable n8n and Make pipelines that link CRM, finance, HR, and project management tools together.',
    problem: {
      title: 'The Chaos of Fragmented Software Systems',
      desc: 'Most modern teams use 10+ different SaaS apps. Because they do not talk to each other, team members act as human bridges copy-pasting entries.',
      points: [
        'Data silos leading to outdated customer records',
        'Delayed invoice creation and payment collections',
        'Cluttered, non-standard project management files',
        'Repetitive, high-churn admin tasks'
      ]
    },
    solution: {
      title: 'Automated Operations Hub',
      desc: 'We construct robust, API-first automation scripts that synchronize all internal applications in real-time.',
      points: [
        { title: 'Zero-Maintenance n8n / Make Setups', desc: 'Pipelines built to handle errors, rate-limiting, and large batches gracefully.' },
        { title: 'CRM-to-Finance Autopilot', desc: 'Sync closed-won Hubspot deals into Stripe/Razorpay and issue invoices immediately.' },
        { title: 'Instant Slack Reports', desc: 'Keep your team updated with automated daily digests of operational performance.' }
      ]
    },
    deliverables: [
      'Self-hosted n8n infrastructure setup (for security and zero API fees)',
      'Up to 10 automated core business workflows',
      'Custom API webhooks development',
      '2 Weeks testing & bug-fixing support',
      'Interactive architecture diagram'
    ],
    process: [
      { step: '01', title: 'SaaS Mapping', desc: 'Cataloging your active tools, APIs, and access tokens.' },
      { step: '02', title: 'Pipeline Architecture', desc: 'Drawing logical blueprints of the data flow.' },
      { step: '03', title: 'Workflow Implementation', desc: 'Assembling nodes, webhooks, and routing rules.' },
      { step: '04', title: 'Live Testing & Handover', desc: 'Simulating edge cases and training your administrators.' }
    ],
    technologies: ['n8n', 'Make', 'Zapier', 'Node.js', 'Express', 'Google Cloud APIs'],
    timeline: '2 - 4 Weeks',
    faqs: [
      { question: 'Why use n8n over Zapier?', answer: 'n8n is open-source and can be self-hosted in your cloud. This allows unlimited execution runs with zero monthly billings, saving thousands of dollars compared to Zapier.' },
      { question: 'How secure is self-hosted n8n?', answer: 'Extremely secure. We configure it inside your private Docker container or VPS with strict TLS/SSL, access controls, and private environment variables.' }
    ],
    testimonial: {
      review: 'Nocode Saarthi replaced our expensive Zapier enterprise tier with self-hosted n8n workflows. Saved us over $12,000 annually while scaling executions.',
      author: 'Priya Iyer',
      role: 'Operations Director',
      company: 'TechCraft Academy',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80'
    }
  },
  'mvp-development': {
    id: 'mvp-development',
    title: 'Rapid MVP Development',
    tagline: 'Launch your software product in 4 weeks, not 6 months.',
    heroDesc: 'Validate your startup idea fast. We develop premium, user-ready Minimum Viable Products using powerful No-Code and Low-Code technologies.',
    problem: {
      title: 'Startups Die of Slow Speed-to-Market',
      desc: 'Building software from scratch using traditional code can cost $100k+ and take half a year. By the time it launches, competitors have captured the market.',
      points: [
        'Wasted developer salaries on unvalidated ideas',
        'Over-engineering features that users never open',
        'Missing investor deadlines and market windows',
        'Messy initial code structures that are impossible to refactor'
      ]
    },
    solution: {
      title: 'Premium, Scalable MVP Frameworks',
      desc: 'We use high-end visual builders, modular databases, and responsive engines to launch premium apps in weeks.',
      points: [
        { title: 'Interactive Web Interfaces', desc: 'Clean, pixel-perfect frontends matched with reliable background databases.' },
        { title: 'Built-in Subscription Flows', desc: 'Stripe, Razorpay, or UPI integration ready to collect revenue on day one.' },
        { title: 'Scalable Database Schemas', desc: 'Designed cleanly so you can migrate to custom code without losing customer history.' }
      ]
    },
    deliverables: [
      'Interactive Figma prototypes',
      'Production-ready visual application (Bubble / FlutterFlow)',
      'Database integration with strict security logic',
      'Admin monitoring panel & analytic tracking setup',
      'Full product training and developer handoff document'
    ],
    process: [
      { step: '01', title: 'Figma UI Design', desc: 'Designing beautiful mockup screens for user validation.' },
      { step: '02', title: 'MVP Database Setup', desc: 'Creating optimized schemas and user tables.' },
      { step: '03', title: 'Visual Engineering', desc: 'Building pages, logic flows, and custom styling.' },
      { step: '04', title: 'Revenue Integration', desc: 'Deploying Stripe checkouts and marketing webhooks.' }
    ],
    technologies: ['Bubble', 'FlutterFlow', 'Supabase', 'Stripe', 'Razorpay', 'Vercel'],
    timeline: '3 - 6 Weeks',
    faqs: [
      { question: 'Can visual MVPs scale to thousands of users?', answer: 'Yes! When structured correctly with backend database systems like Supabase, visual apps can support tens of thousands of active users without lag.' },
      { question: 'Will I own the IP and source code?', answer: 'Absolutely. You retain 100% intellectual property ownership. If built on FlutterFlow, you can export clean Flutter/Dart source code.' }
    ],
    testimonial: {
      review: 'They turned our raw wireframes into a live, paying SaaS product in exactly 30 days. Our beta users loved the UI. Investors signed our pre-seed term sheet!',
      author: 'Marcus Aurel',
      role: 'Co-Founder',
      company: 'FounderOS',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
    }
  },
  'full-stack-development': {
    id: 'full-stack-development',
    title: 'Full Stack Development',
    tagline: 'High-performance, enterprise-ready custom code for complex architectures.',
    heroDesc: 'When visual builders are not enough. We build customized, high-security, ultra-fast web and mobile apps using React, Node.js, and PostgreSQL.',
    problem: {
      title: 'When visual tools hit a performance ceiling',
      desc: 'Complex algorithms, heavy real-time data sync, massive file rendering, and custom hardware integrations require pure, optimized code.',
      points: [
        'Slow load times affecting SEO rankings',
        'Vendor lock-in constraints on complex computational tasks',
        'Difficulty integrating legacy proprietary APIs',
        'Limitations on custom mobile app store features'
      ]
    },
    solution: {
      title: 'Modern TypeScript & Serverless Architecture',
      desc: 'We engineer blazingly fast full-stack applications with optimal clean architecture principles.',
      points: [
        { title: 'Dynamic Client-Side UI', desc: 'Engineered using React and Tailwind CSS for flawless, lightweight user interfaces.' },
        { title: 'Highly Scalable Backends', desc: 'Fast, secure Node.js APIs deployed with automatic scaling policies.' },
        { title: 'Optimized Databases', desc: 'Robust PostgreSQL configurations built to handle heavy transactional write/read patterns.' }
      ]
    },
    deliverables: [
      'Clean modular React/Vite source code repository',
      'API gateway server configured for heavy load',
      'SQL database schemas and migrations scripts',
      'CI/CD deployment pipeline script (GitHub Actions / Vercel)',
      '1 Year architecture roadmap documentation'
    ],
    process: [
      { step: '01', title: 'System Design', desc: 'Architecting databases, route paths, and server layouts.' },
      { step: '02', title: 'Frontend Assembly', desc: 'Writing clean responsive layouts using React & Tailwind.' },
      { step: '03', title: 'Backend Integration', desc: 'Coding secure JWT auth, routes, and transaction functions.' },
      { step: '04', title: 'Deployment Automations', desc: 'Setting up testing pipelines and launching live servers.' }
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Supabase', 'Vercel'],
    timeline: '6 - 10 Weeks',
    faqs: [
      { question: 'Do you write automated tests?', answer: 'Yes, we include integration and unit tests using Vitest/Jest to ensure stability during updates.' },
      { question: 'Which hosting platforms do you recommend?', answer: 'For standard setups we recommend Vercel/Netlify for frontends, and Render, AWS, or DigitalOcean for server instances.' }
    ],
    testimonial: {
      review: 'Their technical excellence is top-tier. The React/Node platform they developed is super fast, handles peak transaction volumes, and was delivered on time.',
      author: 'Sarah Jenkins',
      role: 'CEO',
      company: 'Evigo Global',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80'
    }
  },
  'no-code-development': {
    id: 'no-code-development',
    title: 'No-Code Development',
    tagline: 'Build internal dashboards and databases with absolute flexibility.',
    heroDesc: 'Empower your teams. We design unified corporate directories, internal reporting sheets, inventory trackers, and client portals using modern No-Code tools.',
    problem: {
      title: 'Internal Ops Teams Trapped in Spreadsheet Hell',
      desc: 'Standard operations often break because data is scattered across files, emails, and text messages. Getting a simple report requires hours of manual compiling.',
      points: [
        'Broken communication between team managers',
        'Security risks from sharing master worksheets',
        'Zero tracking of field employee reports',
        'Customer details getting lost in manual lists'
      ]
    },
    solution: {
      title: 'Structured Internal Apps and Dashboards',
      desc: 'We construct beautiful, secure, database-driven internal apps that consolidate operational workflows.',
      points: [
        { title: 'Tailored Client Portals', desc: 'Allow your clients to upload files, pay invoices, and view progress safely.' },
        { title: 'Unified Data Repositories', desc: 'Centralize details with strict editing permissions per department.' },
        { title: 'Mobile Field Applications', desc: 'Provide field workers with easy mobile intake forms that sync instantly.' }
      ]
    },
    deliverables: [
      'Interactive visual dashboard (Glide / Softr / Airtable)',
      'Relational database architecture setup',
      'Automated reminder notifications flow',
      'Access permission guidelines structure',
      'Recorded video training manuals for employees'
    ],
    process: [
      { step: '01', title: 'Needs Assessment', desc: 'Analyzing how your operations managers compile daily tasks.' },
      { step: '02', title: 'Database Design', desc: 'Linking databases with relational dependencies.' },
      { step: '03', title: 'Visual Assembly', desc: 'Building screens, upload buttons, and tables.' },
      { step: '04', title: 'User Launch', desc: 'Onboarding employees and auditing access limits.' }
    ],
    technologies: ['Airtable', 'Glide', 'Softr', 'Make', 'Zapier', 'Google Workspace'],
    timeline: '2 - 3 Weeks',
    faqs: [
      { question: 'Is my data safe in No-Code tools?', answer: 'Yes. Tools like Airtable and Softr utilize advanced encryption and role-based permissions, keeping files safe.' },
      { question: 'Can we add custom code in the future?', answer: 'Yes! Softr and Glide allow you to insert custom JS, CSS, and HTML widgets whenever needed.' }
    ],
    testimonial: {
      review: 'Our field inventory teams now scan barcodes and update items in real-time. This No-Code portal replaced three manual worksheets immediately.',
      author: 'Vikram Mehta',
      role: 'Operations Head',
      company: 'Apex Logistics',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
    }
  },
  'ai-consulting': {
    id: 'ai-consulting',
    title: 'AI Advisory & Corporate Strategy',
    tagline: 'Equip your board and managers with actionable AI roadmaps.',
    heroDesc: 'Stop chasing hypes. We provide clear, objective feasibility studies, ROI modeling, security audits, and hands-on workshops to scale your organization.',
    problem: {
      title: 'The AI Hype Trap & Costly Wrong Moves',
      desc: 'Many businesses waste thousands on expensive software licenses and unfeasible AI projects, without a clear roadmap or operational ROI model.',
      points: [
        'Vague, costly vendor quotes with zero performance guarantees',
        'Security risks from employee chat prompts leakage',
        'Lack of technical skills among non-dev staff members',
        'Unclear project scopes leading to developmental delays'
      ]
    },
    solution: {
      title: 'Actionable AI Blueprinting & Education',
      desc: 'We analyze your workflows and design a structured path to build, integrate, and train your staff on AI systems.',
      points: [
        { title: 'Workflow Feasibility Audits', desc: 'Highlight the top 5 areas in your operations that will return 10x ROI.' },
        { title: 'Prompt & AI Security Standards', desc: 'Draft clean governance protocols to prevent confidential data leaks.' },
        { title: 'Interactive Corporate Workshops', desc: 'Up-skill your team on prompt engineering, n8n, and visual tools.' }
      ]
    },
    deliverables: [
      'Comprehensive AI Feasibility Audit Document',
      'Cost-Benefit & Tool ROI Analysis sheet',
      'AI Security & Governance Playbook',
      'Customized prompt library template',
      'Two 2-hour corporate workshop sessions'
    ],
    process: [
      { step: '01', title: 'Consultation Discovery', desc: 'Reviewing your department workflows and software setup.' },
      { step: '02', title: 'AI Audit Report', desc: 'Compiling tools suggestions, costs, and timeline estimations.' },
      { step: '03', title: 'Governance Blueprinting', desc: 'Drafting data security guidelines and prompt models.' },
      { step: '04', title: 'Team Workshop', desc: 'Conducting live interactive classes for your management.' }
    ],
    technologies: ['OpenAI', 'Claude', 'LangChain', 'n8n', 'Data Security Best Practices'],
    timeline: '2 Weeks',
    faqs: [
      { question: 'Do you offer ongoing consulting retainer packages?', answer: 'Yes! We offer monthly retainer packages to guide engineering teams during feature releases.' },
      { question: 'Can you deliver workshops on-site?', answer: 'Yes, we deliver both remote virtual training sessions and on-site executive bootcamps.' }
    ],
    testimonial: {
      review: 'Their advisory cleared up our confusion. We cancelled redundant software trials and built a custom automation roadmap that saved us $40,000 in dev costs.',
      author: 'Emily Watson',
      role: 'VP Strategy',
      company: 'Horizon Corp',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80'
    }
  }
};
