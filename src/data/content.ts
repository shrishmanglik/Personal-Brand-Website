export const SITE_CONTENT = {
  meta: {
    title: 'Shrish Manglik — AI Systems Architect',
    description:
      'AI Systems Architect & Implementation Strategist based in Toronto. Founder of Million Dollar AI Studio.',
    url: 'https://www.shrishmanglik.com',
  },
  hero: {
    name: 'SHRISH MANGLIK',
    title: 'AI Systems Architect & Implementation Strategist',
    location: 'Toronto, ON, Canada',
    availability: 'Open to Remote',
  },
  education: [
    {
      id: 'edu-1',
      degree: 'BBA — Business Administration',
      institution: 'GLS University, Ahmedabad',
      years: '2015–2018',
      gpa: '6.89/10.00',
      region: 'india' as const,
    },
    {
      id: 'edu-2',
      degree: 'PG Diploma — Business Analytics',
      institution: 'Gujarat University, Ahmedabad',
      years: '2018–2019',
      gpa: '8.00/10.00',
      region: 'india' as const,
    },
    {
      id: 'edu-3',
      degree: 'PG Diploma — Data Science',
      institution: 'IIIT-Bangalore',
      years: '2018–2019',
      gpa: '3.54/4.00',
      region: 'india' as const,
    },
    {
      id: 'edu-4',
      degree: 'PG Diploma — Business Analytics',
      institution: 'Seneca College, Toronto',
      years: '2019–2020',
      gpa: '3.40/4.00',
      region: 'canada' as const,
    },
    {
      id: 'edu-5',
      degree: 'PG Diploma — Financial Technology',
      institution: 'Seneca College, Toronto',
      years: '2020–2021',
      gpa: '3.60/4.00',
      region: 'canada' as const,
    },
  ],
  career: [
    {
      id: 'career-1',
      role: 'Customer Success Specialist',
      company: 'Startup Village',
      years: '2015–2016',
      size: 'small' as const,
    },
    {
      id: 'career-2',
      role: 'Project Manager',
      company: 'Eswasthya',
      years: '2016–2017',
      size: 'small' as const,
      highlight: '25% increase in brand visibility',
    },
    {
      id: 'career-3',
      role: 'Market Research Analyst',
      company: 'Moodcafe',
      years: '2017–2018',
      size: 'small' as const,
    },
    {
      id: 'career-4',
      role: 'Banking Advisor',
      company: 'Royal Bank of Canada',
      years: '2021–2022',
      size: 'medium' as const,
    },
    {
      id: 'career-5',
      role: 'Operations Supervisor',
      company: 'The Beer Store',
      years: '2020–2025',
      size: 'medium' as const,
      highlight: 'Managed 10+ employees, optimized store performance',
    },
    {
      id: 'career-6',
      role: 'Senior Benefits Analyst',
      company: 'TELUS Health',
      years: '2022–Present',
      size: 'hero' as const,
      highlight: 'Promoted June 2025',
    },
  ],
  telusHealth: {
    title: 'Senior Benefits Analyst — Enterprise Accounts',
    period: 'August 2022 – Present | Promoted June 2025',
    pieces: [
      {
        title: 'Data Integrity',
        description:
          'Systematic feed checking across payroll, carrier, and premium statement data. Troubleshooting incorrect member records and system errors. Reconciliations ensuring financial accuracy across multi-million-dollar benefit portfolios.',
      },
      {
        title: 'Enterprise Complexity',
        description:
          'HRIS feed processing, enrollment workflows, insurance adjudications, premium reconciliations, and compliance reporting — all for enterprise-scale accounts like Abbott and Ford.',
      },
      {
        title: 'Process Evolution',
        description:
          'Identified and implemented workflow optimizations in premium collection and over-age dependent certification processes, reducing manual intervention and improving turnaround times.',
      },
      {
        title: 'Communication & Leadership',
        description:
          'Census reports, taxable benefit files, analytical reports. Direct client HR interface. Tier 2 escalation management. Training new analysts on complex Fortune 500 accounts.',
      },
    ],
    quote:
      "Managing the systems that manage the safety nets — where a single data error can mean someone's prescription isn't covered, or their family's benefits lapse. Precision isn't optional.",
  },
  mds: {
    name: 'Million Dollar AI Studio',
    tagline: 'We build AI that works',
    founded: 'December 2024',
    pillars: [
      {
        name: 'AI Services',
        description:
          'Done-for-you AI builds. Custom websites, workflow automation, AI marketing systems.',
        range: '$3K–$50K',
      },
      {
        name: 'AI Products',
        description:
          'SaaS platforms with deterministic-first architecture. Less than $0.01 per interaction.',
        products: 'AstroAI • ChemAI • NestIQ • ATLAS',
      },
      {
        name: 'Custom AI Systems',
        description:
          'Enterprise-grade AI integration. Multi-agent orchestration. End-to-end implementation.',
        range: '$5K–$200K+',
      },
    ],
    midas: {
      name: 'MIDAS Framework',
      full: 'Multi-agent Intelligent Development & Automation System',
      description:
        'Synthesized from 50+ open-source frameworks into a unified orchestration engine with hierarchical agent architecture, cost optimization, and knowledge accumulation.',
      stats: [
        '50+ frameworks analyzed',
        '12-category knowledge taxonomy',
        '5-phase build pipeline',
        '7,000+ prompt generations',
      ],
    },
  },
  projects: [
    {
      id: 'proj-1',
      name: 'AstroAI Studio',
      description:
        'Vedic astrology SaaS. Swiss Ephemeris astronomical calculations with AI interpretation layer.',
      stack: 'FastAPI • React • Supabase',
      size: 'large' as const,
    },
    {
      id: 'proj-2',
      name: 'ChemAI Studio',
      description:
        'AI chemistry education. Adaptive learning with FSRS spaced repetition and blueprint-accurate exam generation.',
      stack: 'Next.js • FastAPI • FSRS-5',
      size: 'medium' as const,
    },
    {
      id: 'proj-3',
      name: 'NestIQ',
      description:
        "Canada's rental intelligence platform. Deterministic computation engines for landlords and property managers.",
      stack: 'Next.js • Supabase • TypeScript',
      size: 'medium' as const,
    },
    {
      id: 'proj-4',
      name: 'ATLAS',
      description:
        'Cross-border tax intelligence for Indian newcomers to Canada. Treaty analysis engine.',
      stack: 'Next.js • Supabase',
      size: 'medium' as const,
    },
    {
      id: 'proj-5',
      name: 'JobFlow AI',
      description:
        'AI job search command center. Resume tailoring, company research automation, portfolio engine.',
      stack: 'React • Firebase • Gemini',
      size: 'medium' as const,
    },
    {
      id: 'proj-6',
      name: 'Content Production System',
      description:
        'Automated pipelines generating 100+ branded outputs monthly. 285% consistency improvement.',
      stack: 'MIDAS • Multi-platform',
      size: 'small' as const,
    },
  ],
  skills: {
    ai: [
      'Claude (Anthropic)',
      'GPT-5',
      'Google Gemini',
      'AI Studio',
      'Perplexity',
      'Sora 2 Pro',
      'VEO 3.1',
      'Runway',
      'Midjourney V7',
      'ElevenLabs',
      'Multi-agent Orchestration',
      'Prompt Engineering',
      'RAG Architecture',
      'MCP',
    ],
    engineering: [
      'Python',
      'TypeScript',
      'SQL',
      'FastAPI',
      'Next.js',
      'React',
      'Firebase',
      'Git/GitHub',
      'n8n',
      'Zapier',
      'LangChain',
      'CrewAI',
      'Claude Code',
    ],
    strategy: [
      'Tableau',
      'Advanced Excel',
      'SAP',
      'HRIS Systems',
      'Benefits Platforms',
      'Data Visualization',
      'Figma',
      'Process Optimization',
      'Stakeholder Management',
    ],
  },
  contact: {
    email: 'shrishmanglik@gmail.com',
    phone: '(647) 879-9449',
    linkedin: 'https://linkedin.com/in/shrishmanglik',
    studio: 'https://milliondollarstudio.ai',
    cta: "Let's Build Something",
    subtitle:
      'Whether you need an AI system, a strategic partner, or just want to connect.',
  },
  rooms: [
    { id: 'room-1', name: 'The Grand Foyer' },
    { id: 'room-2', name: 'The Origins' },
    { id: 'room-3', name: 'The Enterprise Wing' },
    { id: 'room-4', name: 'The TELUS Health Chamber' },
    { id: 'room-5', name: 'The Innovation Lab' },
    { id: 'room-6', name: 'The Project Vault' },
    { id: 'room-7', name: 'The Workshop' },
    { id: 'room-8', name: 'The Exit Portal' },
  ],
};
