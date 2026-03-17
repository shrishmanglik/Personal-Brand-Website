import { KnowledgeEntry } from './types';

export const FALLBACK_ENTRY: KnowledgeEntry = {
  id: 'fallback-general',
  category: 'about',
  keywords: [],
  phrases: [],
  response:
    "I'm not sure I have a specific exhibit for that question. Try asking about my work at TELUS Health, the projects I've built, my AI philosophy, or how to get in touch. Or just keep scrolling — the gallery tells the full story.",
  followUp: 'Try: "What do you do?" or "Show me your projects"',
  responseStyle: 'placard',
};

export const KNOWLEDGE_BASE: KnowledgeEntry[] = [
  // ============================================================
  // ABOUT (15 entries)
  // ============================================================
  {
    id: 'about-intro',
    category: 'about',
    keywords: ['who', 'about', 'introduce', 'yourself', 'shrish', 'tell', 'overview'],
    phrases: ['who are you', 'tell me about yourself', 'who is shrish', 'introduce yourself'],
    response:
      "I'm Shrish Manglik — an AI Systems Architect based in Toronto. By day, I manage enterprise benefits portfolios worth millions at TELUS Health. By night, I run Million Dollar AI Studio, where I architect AI systems that cost less than a penny per interaction. I believe the best AI products are the ones that barely use AI at all.",
    navigateTo: 0,
    followUp: 'Ask about my work at TELUS Health or my studio.',
    responseStyle: 'frame',
  },
  {
    id: 'about-location',
    category: 'about',
    keywords: ['where', 'live', 'based', 'location', 'city', 'toronto', 'canada', 'country'],
    phrases: ['where are you based', 'where do you live', 'what city'],
    response:
      "Toronto, Ontario, Canada. Open to remote work globally. The city gives me access to North America's fastest-growing tech ecosystem while staying connected to both Indian and Canadian markets — which matters when you're building cross-border products like ATLAS.",
    navigateTo: 0,
    responseStyle: 'placard',
  },
  {
    id: 'about-background',
    category: 'about',
    keywords: ['background', 'story', 'journey', 'path', 'start', 'began', 'origin'],
    phrases: ['what is your background', 'how did you get started', 'your story', 'your journey'],
    response:
      "Started in Ahmedabad, India — BBA, then data science and business analytics. Moved to Canada in 2019 for fintech studies at Seneca College. Worked my way from banking at RBC to operations management to enterprise benefits administration at TELUS Health. Founded Million Dollar AI Studio in December 2024 when I realized the gap between AI capability and AI implementation was a business opportunity worth building for.",
    navigateTo: 1,
    followUp: 'Ask about my education or my move to Canada.',
    responseStyle: 'frame',
  },
  {
    id: 'about-name',
    category: 'about',
    keywords: ['name', 'mean', 'manglik', 'pronounce'],
    phrases: ['what does your name mean', 'how to pronounce'],
    response:
      "Shrish Manglik. The website you're scrolling through right now is the gallery of everything that name represents — from Ahmedabad to Toronto, from customer support to AI architecture. Keep scrolling, the best rooms are ahead.",
    responseStyle: 'quote',
  },
  {
    id: 'about-remote',
    category: 'about',
    keywords: ['remote', 'available', 'hiring', 'freelance', 'contract', 'open', 'opportunity'],
    phrases: ['are you available', 'open to work', 'looking for work', 'open to opportunities'],
    response:
      "Yes — open to remote opportunities. For full-time roles, I'm targeting AI Systems Architect and AI Implementation Lead positions. For consulting, MDS takes on projects from $3K workflow automations to $200K+ enterprise AI implementations. Either way, let's talk.",
    navigateTo: 7,
    followUp: 'Ask about my services or contact me directly.',
    responseStyle: 'frame',
  },
  {
    id: 'about-age',
    category: 'about',
    keywords: ['age', 'old', 'young', 'born', 'year'],
    phrases: ['how old are you', 'what year were you born'],
    response:
      "I started my BBA in 2015, which should give you a rough timeline. More importantly — I've packed 7+ years of cross-domain experience into that timeline: five industries, two countries, and a studio that's already building products across astrology, chemistry, real estate, and tax.",
    responseStyle: 'placard',
  },
  {
    id: 'about-personality',
    category: 'about',
    keywords: ['personality', 'like', 'hobbies', 'interests', 'fun', 'passion'],
    phrases: ['what are you like', 'your interests', 'what do you do for fun'],
    response:
      "I build things. That's the hobby and the job. When I'm not architecting AI systems, I'm deep in Vedic astrology research for AstroAI, learning about Canadian real estate for NestIQ, or generating content across Sora, Midjourney, and VEO. 7,000+ generations and counting. The line between work and passion dissolved a long time ago.",
    responseStyle: 'placard',
  },
  {
    id: 'about-values',
    category: 'about',
    keywords: ['values', 'principles', 'believe', 'matter', 'important'],
    phrases: ['what do you value', 'what matters to you', 'your principles'],
    response:
      "Precision over approximation. Systems over hacks. Ship over polish. Every product I build reflects these: deterministic computation first, AI only as a last resort, and always production-grade — because enterprise systems taught me that 'close enough' breaks things at 3 AM.",
    responseStyle: 'quote',
  },
  {
    id: 'about-relocate',
    category: 'about',
    keywords: ['relocate', 'move', 'relocation', 'travel', 'onsite'],
    phrases: ['can you relocate', 'willing to move', 'on-site', 'in-office'],
    response:
      "Based in Toronto, open to remote globally. For the right opportunity, open to hybrid arrangements in major Canadian cities. My work is distributed by nature — MDS operates entirely remotely, and my TELUS Health role has been remote-capable.",
    responseStyle: 'placard',
  },
  {
    id: 'about-visa',
    category: 'about',
    keywords: ['visa', 'work permit', 'authorization', 'citizen', 'pr', 'permanent', 'residency', 'status', 'legal'],
    phrases: ['work authorization', 'visa status', 'work permit', 'legal to work', 'permanent resident'],
    response:
      "I'm authorized to work in Canada. No sponsorship required. Based in Toronto with full work eligibility.",
    responseStyle: 'placard',
  },
  {
    id: 'about-experience-years',
    category: 'about',
    keywords: ['years', 'experience', 'long', 'senior', 'level'],
    phrases: ['years of experience', 'how long have you been working', 'experience level', 'how many years'],
    response:
      "7+ years across five domains: customer success (2015), project management (2016), banking (2021), operations (2020-2025), and enterprise benefits administration at TELUS Health (2022-present). Plus the AI studio work since December 2024. The breadth is the differentiator.",
    navigateTo: 2,
    responseStyle: 'frame',
  },
  {
    id: 'about-strengths',
    category: 'about',
    keywords: ['strengths', 'best', 'good', 'excel', 'superpower'],
    phrases: ['what are your strengths', 'what are you good at', 'your superpower'],
    response:
      "Three things: (1) I understand enterprise complexity — not in theory, but from managing multi-million-dollar benefits portfolios. (2) I build systems that scale without scaling costs — deterministic-first architecture. (3) I ship fast — MIDAS framework means every project compounds the last one. Most people are either enterprise operators or indie builders. I'm both.",
    responseStyle: 'frame',
  },
  {
    id: 'about-weakness',
    category: 'about',
    keywords: ['weakness', 'improve', 'struggle', 'challenge', 'difficult'],
    phrases: ['what are your weaknesses', 'areas for improvement', 'what do you struggle with'],
    response:
      "I over-engineer the first version and ship too much scope. Working on it — the MDS philosophy of 'deterministic-first' is partly a discipline against my own instinct to build everything from scratch. Every project teaches me to cut scope earlier and ship the simple version first.",
    responseStyle: 'placard',
  },
  {
    id: 'about-team',
    category: 'about',
    keywords: ['team', 'management', 'lead', 'leadership', 'manage', 'people', 'size'],
    phrases: ['team size', 'management style', 'do you manage people', 'leadership experience'],
    response:
      "At The Beer Store: managed 10+ employees with direct operational oversight. At TELUS Health: train new analysts on complex enterprise accounts (Jeel on Ford, Marci on Abbott). At MDS: solo founder orchestrating AI agents — which is team management for the AI era. My style: clear documentation, systematic processes, trust but verify.",
    responseStyle: 'frame',
  },
  {
    id: 'about-salary',
    category: 'about',
    keywords: ['salary', 'compensation', 'pay', 'money', 'earn', 'expect', 'range', 'rate'],
    phrases: ['salary expectations', 'how much do you charge', 'compensation expectations', 'your rate'],
    response:
      "For full-time AI Systems Architect roles: targeting $150K+ CAD, remote-friendly. For consulting through MDS: $3K-$50K for AI services, $5K-$200K+ for custom enterprise systems. The rate reflects the value — my systems typically save clients 50x their cost in reduced API spend alone.",
    navigateTo: 7,
    responseStyle: 'frame',
  },

  // ============================================================
  // CAREER (15 entries)
  // ============================================================
  {
    id: 'career-overview',
    category: 'career',
    keywords: ['career', 'experience', 'work', 'history', 'resume', 'cv', 'jobs', 'professional'],
    phrases: ['work experience', 'career history', 'what have you done', 'your resume', 'your cv'],
    response:
      "7+ years across five domains: customer success, project management, banking, operations, and enterprise benefits administration — all converging into AI systems architecture. The thread connecting all of it: I find complex systems, understand how they actually work, and make them work better.",
    navigateTo: 2,
    followUp: 'Ask about TELUS Health or my studio.',
    responseStyle: 'frame',
  },
  {
    id: 'career-startup',
    category: 'career',
    keywords: ['startup', 'village', 'first', 'job', 'customer', 'success'],
    phrases: ['startup village', 'first job', 'customer success'],
    response:
      "Startup Village (2015-2016) — my first role. Customer Success Specialist. Learned the fundamentals: talk to users, understand their problems, build solutions that actually help. Every system I architect today still starts with that question: what does the user actually need?",
    navigateTo: 2,
    responseStyle: 'placard',
  },
  {
    id: 'career-eswasthya',
    category: 'career',
    keywords: ['eswasthya', 'project', 'manager', 'health', 'brand'],
    phrases: ['eswasthya', 'project manager'],
    response:
      "Eswasthya (2016-2017) — Project Manager. Health-tech startup in India. Drove a 25% increase in brand visibility. First taste of managing cross-functional teams and understanding how healthcare systems work — a theme that would resurface at TELUS Health years later.",
    navigateTo: 2,
    responseStyle: 'placard',
  },
  {
    id: 'career-moodcafe',
    category: 'career',
    keywords: ['moodcafe', 'research', 'analyst', 'market'],
    phrases: ['moodcafe', 'market research'],
    response:
      "Moodcafe (2017-2018) — Market Research Analyst. Mental health platform. This role taught me data-driven decision making before I knew to call it that. Analyzing market trends, user behavior, competitive positioning — the same analytical framework I now apply to AI product development.",
    navigateTo: 2,
    responseStyle: 'placard',
  },
  {
    id: 'career-rbc',
    category: 'career',
    keywords: ['rbc', 'royal', 'bank', 'banking', 'advisor', 'finance', 'financial'],
    phrases: ['royal bank', 'rbc', 'banking advisor'],
    response:
      "Royal Bank of Canada (2021-2022) — Banking Advisor. First Canadian corporate role. Learned the Canadian financial system inside out: products, compliance, client relationships at scale. The precision required in banking directly prepared me for the precision required in benefits administration.",
    navigateTo: 2,
    responseStyle: 'placard',
  },
  {
    id: 'career-beerstore',
    category: 'career',
    keywords: ['beer', 'store', 'operations', 'supervisor', 'retail', 'management'],
    phrases: ['beer store', 'operations supervisor'],
    response:
      "The Beer Store (2020-2025) — Operations Supervisor. Managed 10+ employees, optimized store performance. Sounds unglamorous — but managing daily operations with real humans, real inventory, and real deadlines teaches you more about systems thinking than any course. Every process optimization I did here translates directly to workflow automation.",
    navigateTo: 2,
    responseStyle: 'placard',
  },
  {
    id: 'career-progression',
    category: 'career',
    keywords: ['progression', 'growth', 'path', 'evolve', 'transition'],
    phrases: ['career progression', 'how did you get here', 'career path'],
    response:
      "Customer support → Project management → Market research → Banking → Operations → Enterprise benefits → AI architecture. Each role added a layer: people skills, analytical thinking, financial precision, operational efficiency, enterprise complexity, and finally — the ability to architect systems that embody all of it.",
    navigateTo: 2,
    responseStyle: 'frame',
  },
  {
    id: 'career-why-enterprise',
    category: 'career',
    keywords: ['why', 'enterprise', 'important', 'relevant', 'connect', 'relate'],
    phrases: ['why is enterprise relevant', 'how does this relate to ai', 'why does enterprise matter'],
    response:
      "Enterprise experience taught me three things that directly shape my AI work: (1) Precision is non-negotiable — when systems handle people's health coverage, you can't ship 'good enough.' (2) Deterministic beats probabilistic — financial reconciliation needs exact math, not AI guessing. (3) The hardest part isn't the technology, it's understanding the domain deeply enough to know what to automate and what to leave to humans.",
    responseStyle: 'quote',
  },
  {
    id: 'career-current',
    category: 'career',
    keywords: ['current', 'now', 'today', 'present', 'doing'],
    phrases: ['what do you do now', 'current role', 'what are you doing today'],
    response:
      "Two things simultaneously: (1) Senior Benefits Analyst at TELUS Health — managing enterprise benefits portfolios for Fortune 500 accounts. (2) Founder of Million Dollar AI Studio — building AI products and consulting. The enterprise role keeps me grounded in real-world complexity. The studio lets me build the future.",
    navigateTo: 3,
    responseStyle: 'frame',
  },

  // ============================================================
  // TELUS HEALTH (20 entries)
  // ============================================================
  {
    id: 'telus-overview',
    category: 'telus',
    keywords: ['telus', 'health', 'benefits', 'analyst', 'senior', 'day', 'job'],
    phrases: ['telus health', 'what do you do at telus', 'your day job', 'benefits analyst'],
    response:
      "Senior Benefits Analyst at TELUS Health since August 2022, promoted June 2025. I manage end-to-end benefits administration for enterprise clients — companies like Abbott and Ford. That means HRIS feed processing, enrollment workflows, insurance adjudications, premium reconciliations worth millions of dollars, and compliance reporting. When I say a single data error can mean someone's prescription isn't covered, I mean it literally.",
    navigateTo: 3,
    followUp: 'Ask about data reconciliation or what I learned from enterprise work.',
    responseStyle: 'frame',
  },
  {
    id: 'telus-data',
    category: 'telus',
    keywords: ['data', 'reconciliation', 'accuracy', 'feed', 'payroll', 'carrier', 'premium', 'integrity'],
    phrases: ['data integrity', 'reconciliation', 'feed checking', 'data accuracy'],
    response:
      "I perform systematic feed checking across payroll, carrier, and premium statement data. Troubleshooting incorrect member records, resolving system errors, executing reconciliations that ensure financial accuracy across multi-million-dollar benefit portfolios. Think of it as data engineering with real human consequences — every number is someone's health coverage.",
    navigateTo: 3,
    responseStyle: 'frame',
  },
  {
    id: 'telus-promotion',
    category: 'telus',
    keywords: ['promotion', 'promoted', 'senior', 'growth', 'advance'],
    phrases: ['promoted', 'how did you get promoted', 'career growth at telus'],
    response:
      "Promoted to Senior Benefits Analyst in June 2025. The promotion came from consistently handling the most complex enterprise accounts, training new team members on intricate processes, and implementing workflow optimizations that reduced manual intervention across the team.",
    navigateTo: 3,
    responseStyle: 'placard',
  },
  {
    id: 'telus-clients',
    category: 'telus',
    keywords: ['clients', 'accounts', 'abbott', 'ford', 'fortune', 'companies'],
    phrases: ['which clients', 'enterprise accounts', 'fortune 500'],
    response:
      "Enterprise accounts including Abbott and Ford. These are complex, high-profile portfolios — thousands of members, multiple benefit plans, intricate carrier relationships, and zero tolerance for error. I also train new analysts on these accounts, which means I need to understand the systems deeply enough to teach them.",
    navigateTo: 3,
    responseStyle: 'frame',
  },
  {
    id: 'telus-process',
    category: 'telus',
    keywords: ['process', 'improvement', 'optimization', 'workflow', 'automate', 'efficient'],
    phrases: ['process improvement', 'workflow optimization'],
    response:
      "Identified and implemented workflow optimizations in premium collection and over-age dependent certification processes. The key insight: most 'manual' work in benefits admin isn't inherently manual — it's just never been systematically analyzed. That same insight now drives how I architect AI systems at MDS.",
    navigateTo: 3,
    responseStyle: 'frame',
  },
  {
    id: 'telus-training',
    category: 'telus',
    keywords: ['train', 'training', 'teach', 'mentor', 'onboard'],
    phrases: ['training role', 'team leadership', 'do you train people'],
    response:
      "I train new team members on complex enterprise accounts. Trained Jeel on the Ford account, Marci on Abbott. Teaching someone to manage a multi-million-dollar benefits portfolio forces you to understand every edge case, every data flow, every failure mode. It's the same skill that makes good system architecture — you have to think about what breaks.",
    navigateTo: 3,
    responseStyle: 'frame',
  },
  {
    id: 'telus-hris',
    category: 'telus',
    keywords: ['hris', 'enrollment', 'insurance', 'adjudication', 'compliance', 'reporting'],
    phrases: ['hris feed', 'enrollment workflow', 'insurance adjudication'],
    response:
      "HRIS feed processing is the backbone: employer HR systems send data, we validate and route it through enrollment workflows, insurance adjudications, and compliance checks. One bad feed can cascade into incorrect coverage for hundreds of members. I've built intuition for spotting data anomalies that most people would miss — and that intuition directly translates to building error-resistant AI systems.",
    navigateTo: 3,
    responseStyle: 'frame',
  },
  {
    id: 'telus-ai-connection',
    category: 'telus',
    keywords: ['learn', 'lesson', 'enterprise', 'translate', 'apply'],
    phrases: ['what did enterprise teach you', 'how does telus relate to ai', 'lessons from enterprise'],
    response:
      "Enterprise benefits administration taught me: (1) Precision is non-negotiable — a wrong number means someone loses coverage. (2) Deterministic beats probabilistic — financial reconciliation needs exact math. (3) The hardest part isn't technology, it's domain understanding. Every MDS product reflects these lessons.",
    navigateTo: 3,
    responseStyle: 'quote',
  },
  {
    id: 'telus-scope',
    category: 'telus',
    keywords: ['scope', 'responsibility', 'role', 'duties', 'daily'],
    phrases: ['what does your role involve', 'day to day', 'daily responsibilities'],
    response:
      "Daily: process HRIS feeds, resolve enrollment discrepancies, handle Tier 2 escalations from members and HR teams, generate census and analytical reports, reconcile premiums, ensure compliance. It's a role where attention to detail isn't a nice-to-have — it's the entire job. Million-dollar portfolios don't tolerate approximation.",
    navigateTo: 3,
    responseStyle: 'frame',
  },
  {
    id: 'telus-census',
    category: 'telus',
    keywords: ['census', 'report', 'analytical', 'taxable', 'benefit', 'file'],
    phrases: ['census reports', 'analytical reports', 'taxable benefit'],
    response:
      "I generate census reports, taxable benefit files, and analytical reports for enterprise clients. These aren't just spreadsheets — they're the financial truth of a benefits portfolio. One incorrect row can mean audit findings, compliance violations, or incorrect tax filings. The precision this requires is exactly why I build deterministic systems.",
    navigateTo: 3,
    responseStyle: 'placard',
  },
  {
    id: 'telus-escalation',
    category: 'telus',
    keywords: ['escalation', 'tier', 'support', 'client', 'hr', 'interface'],
    phrases: ['tier 2 escalation', 'client interface', 'client support'],
    response:
      "I handle Tier 2 escalations — the problems that front-line support can't resolve. Direct interface with client HR departments. When a Fortune 500 company's HR VP calls about a benefits discrepancy affecting hundreds of employees, I'm the one who investigates, resolves, and communicates the fix.",
    navigateTo: 3,
    responseStyle: 'placard',
  },

  // ============================================================
  // MDS / AI STUDIO (20 entries)
  // ============================================================
  {
    id: 'mds-overview',
    category: 'mds',
    keywords: ['mds', 'studio', 'million', 'dollar', 'company', 'business', 'founded'],
    phrases: ['million dollar ai studio', 'your company', 'your studio', 'what is mds'],
    response:
      "Million Dollar AI Studio — an AI-native product studio I founded in December 2024. Three revenue streams: AI Services (done-for-you builds, $3K-$50K), AI Products (SaaS platforms I own), and Custom AI Systems (enterprise implementations, $5K-$200K+). The core philosophy: build AI systems where 95% of computation is deterministic and costs nothing. AI is the last resort, not the first tool.",
    navigateTo: 4,
    followUp: 'Ask about the deterministic-first philosophy or MIDAS.',
    responseStyle: 'frame',
  },
  {
    id: 'mds-deterministic',
    category: 'mds',
    keywords: ['deterministic', 'philosophy', 'approach', 'cost', 'cheap', 'expensive', 'penny', 'api'],
    phrases: ['deterministic first', 'how do you keep costs low', 'your approach to ai', 'cost per interaction'],
    response:
      "Deterministic-first architecture: templates cost $0.00, rule engines cost ~$0.001, and AI API calls are the absolute last resort. Target: less than $0.01 per user interaction. Most 'AI products' are just expensive API wrappers. MDS products compute 95%+ of their output without touching an LLM. This website you're using right now? This conversation costs $0.00. Zero API calls. Pure keyword matching. That's the philosophy in action.",
    navigateTo: 4,
    responseStyle: 'frame',
  },
  {
    id: 'mds-services',
    category: 'mds',
    keywords: ['services', 'offer', 'consulting', 'build', 'help', 'price', 'pricing', 'tier'],
    phrases: ['what services', 'what do you offer', 'how much do you charge', 'can you build'],
    response:
      "Three tiers: AI Services ($3K-$50K) — done-for-you AI builds: websites, workflow automation, AI marketing systems. Custom AI Systems ($5K-$200K+) — enterprise-grade AI integration, multi-agent orchestration, end-to-end implementation. AI Products — SaaS platforms I build and operate: AstroAI Studio, ChemAI Studio, NestIQ, ATLAS.",
    navigateTo: 4,
    responseStyle: 'list',
  },
  {
    id: 'mds-midas',
    category: 'mds',
    keywords: ['midas', 'framework', 'orchestration', 'agent', 'multi-agent'],
    phrases: ['what is midas', 'midas framework', 'multi-agent system'],
    response:
      "MIDAS — Multi-agent Intelligent Development & Automation System. My internal orchestration framework synthesized from 50+ open-source repositories. It coordinates specialized AI agents in a hierarchical structure — like a virtual software company with a PM, architect, developers, QA, and DevOps. 12-category knowledge taxonomy. 5-phase build pipeline. Every product I build compounds the framework's knowledge.",
    navigateTo: 4,
    responseStyle: 'frame',
  },
  {
    id: 'mds-why',
    category: 'mds',
    keywords: ['why', 'started', 'founded', 'motivation', 'reason', 'gap'],
    phrases: ['why did you start', 'why mds', 'motivation for starting'],
    response:
      "I saw a gap between AI capability and AI implementation. Companies know they need AI but don't know how to build systems that actually work at scale without hemorrhaging API costs. My enterprise background showed me what 'production-grade' actually means — it's not a demo that works, it's a system that works at 3 AM when nobody's watching. That's what MDS builds.",
    navigateTo: 4,
    responseStyle: 'quote',
  },
  {
    id: 'mds-timeline',
    category: 'mds',
    keywords: ['timeline', 'long', 'delivery', 'turnaround', 'fast', 'quick', 'when'],
    phrases: ['how long does it take', 'project timeline', 'delivery time', 'turnaround time'],
    response:
      "Depends on scope. AI Services (websites, automations): 2-4 weeks. Custom AI Systems: 4-12 weeks depending on complexity. The MIDAS framework accelerates everything — each project compounds knowledge from previous builds. I've shipped complete SaaS platforms in under a month.",
    navigateTo: 4,
    responseStyle: 'placard',
  },
  {
    id: 'mds-guarantee',
    category: 'mds',
    keywords: ['guarantee', 'refund', 'risk', 'quality', 'assurance', 'promise'],
    phrases: ['do you guarantee', 'what if it fails', 'quality guarantee'],
    response:
      "I build production-grade systems, not demos. Every engagement starts with a clear scope document, includes milestone reviews, and ends with working software that's deployed and documented. My enterprise background means I treat every project like it needs to pass an audit. If you want a quick prototype that looks good in a pitch deck, there are cheaper options. If you want a system that actually works, let's talk.",
    navigateTo: 7,
    responseStyle: 'frame',
  },
  {
    id: 'mds-nda',
    category: 'mds',
    keywords: ['nda', 'confidential', 'privacy', 'secret', 'proprietary', 'ip'],
    phrases: ['do you sign ndas', 'confidentiality', 'intellectual property'],
    response:
      "Absolutely. Standard practice for all client engagements. NDA before discovery, clear IP ownership terms in the contract. Your business logic stays yours. The only thing I retain is generalized architectural knowledge — which is how MIDAS gets smarter with every project without compromising anyone's IP.",
    responseStyle: 'placard',
  },
  {
    id: 'mds-examples',
    category: 'mds',
    keywords: ['examples', 'portfolio', 'past', 'previous', 'case', 'study', 'proof'],
    phrases: ['examples of past work', 'case studies', 'proof of work', 'previous clients'],
    response:
      "Six active products are the proof: AstroAI Studio (Vedic astrology SaaS), ChemAI Studio (chemistry education), NestIQ (rental intelligence), ATLAS (cross-border tax), JobFlow AI (job search), and a content production system generating 100+ outputs monthly. Each demonstrates the deterministic-first architecture in a different domain. This website is another example — a conversational gallery running at $0.00 per interaction.",
    navigateTo: 5,
    responseStyle: 'frame',
  },
  {
    id: 'mds-start',
    category: 'mds',
    keywords: ['start', 'begin', 'engage', 'first', 'step', 'process', 'onboard'],
    phrases: ['how do we start', 'how to begin', 'first step', 'engagement process'],
    response:
      "Email shrishmanglik@gmail.com with what you're building. I'll respond within 24 hours with initial thoughts. If there's a fit: (1) Discovery call to understand your domain, (2) Scope document with architecture proposal, (3) Fixed-price quote or retainer structure, (4) Build sprints with milestone reviews. No surprises.",
    navigateTo: 7,
    responseStyle: 'frame',
  },
  {
    id: 'mds-compete',
    category: 'mds',
    keywords: ['competitor', 'different', 'unique', 'stand', 'apart', 'vs', 'compare'],
    phrases: ['what makes you different', 'why you vs competitors', 'how do you stand out'],
    response:
      "Most AI consultants sell AI. I sell systems that happen to use AI only where it's the best tool. The result: my products cost 50x less per interaction than typical AI wrappers, they're more reliable because 95% of computation is deterministic, and they actually survive in production. Plus — I'm the rare person who's both an enterprise operator and an indie builder. I understand boardroom requirements AND can ship code.",
    responseStyle: 'frame',
  },

  // ============================================================
  // PROJECTS (12 entries)
  // ============================================================
  {
    id: 'project-astroai',
    category: 'projects',
    keywords: ['astro', 'astrology', 'vedic', 'kundali', 'jyotish', 'horoscope'],
    phrases: ['astroai', 'astro ai', 'vedic astrology', 'astrology app'],
    response:
      "AstroAI Studio — a Vedic astrology SaaS platform. Built with Swiss Ephemeris for astronomical calculations (Tier 1: deterministic, $0.00), classical yoga and dosha rules (Tier 2: rule engine, ~$0.001), and AI only for narrative interpretation (Tier 3: last resort). Supports Kundali generation, Vimshottari Dasha, 50+ Yoga detection, Dosha analysis, Shadbala, Ashtakavarga, 16 divisional charts, and Ashtakoot matching.",
    navigateTo: 5,
    followUp: 'Ask about the deterministic cost model.',
    responseStyle: 'frame',
  },
  {
    id: 'project-nestiq',
    category: 'projects',
    keywords: ['nest', 'nestiq', 'rental', 'landlord', 'property', 'real', 'estate', 'housing'],
    phrases: ['nestiq', 'rental intelligence', 'rental platform'],
    response:
      "NestIQ — Canada's rental intelligence platform. Deterministic computation engines for landlords and property managers: rent benchmarking, cash flow modeling, maintenance forecasting, tenant screening scoring, tax optimization, and regulatory compliance across ON/BC/AB. Every competitor bills in USD. NestIQ bills in CAD. Every competitor ignores provincial jurisdiction differences. NestIQ handles 13.",
    navigateTo: 5,
    responseStyle: 'frame',
  },
  {
    id: 'project-atlas',
    category: 'projects',
    keywords: ['atlas', 'tax', 'cross-border', 'treaty', 'newcomer', 'immigration', 'dtaa'],
    phrases: ['atlas', 'cross-border tax', 'tax intelligence'],
    response:
      "ATLAS — cross-border tax intelligence for Indian newcomers to Canada. Treaty analysis engine that navigates Double Tax Avoidance Agreements. Phase 1 complete: 44 out of 44 tests passing. Built for the Wealthsimple AI Builder Program submission. The complexity is in multi-jurisdiction rule engines — same pattern that shows up in NestIQ's provincial compliance and AstroAI's classical yoga rules.",
    navigateTo: 5,
    responseStyle: 'frame',
  },
  {
    id: 'project-chemai',
    category: 'projects',
    keywords: ['chem', 'chemistry', 'education', 'student', 'exam', 'jee', 'neet'],
    phrases: ['chemai', 'chem ai', 'chemistry education'],
    response:
      "ChemAI Studio — AI-powered chemistry education for Indian Class 11-12, JEE, and NEET students. FSRS-5 spaced repetition for optimal memory retention. Blueprint-accurate exam paper generation — 100% deterministic, matching actual board exam patterns. Parametric question bank that generates variations without AI. The exam engine doesn't guess what to test — it follows the exact blueprint.",
    navigateTo: 5,
    responseStyle: 'frame',
  },
  {
    id: 'project-jobflow',
    category: 'projects',
    keywords: ['jobflow', 'job', 'search', 'resume', 'application', 'apply'],
    phrases: ['jobflow', 'job search', 'resume tailoring'],
    response:
      "JobFlow AI — an AI job search command center. Intelligent resume tailoring, company research automation, and portfolio project suggestion engine. Built to target $150K+ remote AI roles in Canada. Because even the person who builds AI systems needs a system to find the next opportunity.",
    navigateTo: 5,
    responseStyle: 'frame',
  },
  {
    id: 'project-content',
    category: 'projects',
    keywords: ['content', 'production', 'pipeline', 'output', 'monthly', 'consistency'],
    phrases: ['content production', 'content system', '100 outputs'],
    response:
      "Content Production System — automated pipelines generating 100+ branded outputs monthly with 285% improvement in consistency. Uses MIDAS prompt methodology across Sora, VEO, Runway, Midjourney, and Claude. The methodology is documented, tested, and repeatable — not vibes-based prompting.",
    navigateTo: 5,
    responseStyle: 'placard',
  },
  {
    id: 'project-all',
    category: 'projects',
    keywords: ['projects', 'portfolio', 'built', 'products', 'all', 'everything'],
    phrases: ['what have you built', 'your projects', 'show me your work', 'all projects'],
    response:
      "Six active products: AstroAI Studio (Vedic astrology SaaS), ChemAI Studio (chemistry education), NestIQ (rental intelligence), ATLAS (cross-border tax), JobFlow AI (job search), and a content production system generating 100+ outputs monthly with 285% consistency improvement. All built on the same deterministic-first architecture. All managed through the MIDAS framework.",
    navigateTo: 5,
    followUp: 'Ask about any specific project.',
    responseStyle: 'frame',
  },

  // ============================================================
  // SKILLS & EDUCATION (8 entries)
  // ============================================================
  {
    id: 'skills-ai',
    category: 'skills',
    keywords: ['skills', 'tools', 'technologies', 'tech', 'stack', 'use', 'know'],
    phrases: ['what tools do you use', 'your tech stack', 'technologies you know'],
    response:
      "AI layer: Claude, GPT-5, Gemini, Perplexity, Sora 2, VEO 3.1, Midjourney. Engineering: Python, TypeScript, FastAPI, Next.js, React, Supabase, PostgreSQL. Frameworks: LangChain, CrewAI, Claude Code, MCP. Infrastructure: Vercel, Railway, Docker. Analytics: Tableau, SQL, R. The stack is settled — I don't chase trends, I ship products.",
    navigateTo: 6,
    responseStyle: 'frame',
  },
  {
    id: 'skills-prompt',
    category: 'skills',
    keywords: ['prompt', 'engineering', 'prompting', 'generation', 'sora', 'veo', 'midjourney', 'video', 'image'],
    phrases: ['prompt engineering', 'ai generation', 'video generation', 'image generation'],
    response:
      "7,000+ systematic generations across Sora, VEO, Runway, Midjourney, Claude, GPT-5, and Gemini. Developed a proprietary prompt methodology (MIDAS Prompt Methodology) that achieved 285% improvement in output consistency. The methodology is documented, tested, and repeatable — not vibes-based prompting.",
    navigateTo: 6,
    responseStyle: 'frame',
  },
  {
    id: 'skills-python',
    category: 'skills',
    keywords: ['python', 'fastapi', 'backend', 'server', 'api'],
    phrases: ['python experience', 'backend stack'],
    response:
      "Python with FastAPI for backends. Used across AstroAI (Swiss Ephemeris bindings), ChemAI (FSRS-5 algorithms), and ATLAS (treaty rule engines). FastAPI for its async performance and automatic OpenAPI docs. Supabase/PostgreSQL for data. The backend stack is optimized for deterministic computation, not AI API proxying.",
    navigateTo: 6,
    responseStyle: 'placard',
  },
  {
    id: 'skills-frontend',
    category: 'skills',
    keywords: ['frontend', 'react', 'nextjs', 'next', 'javascript', 'web'],
    phrases: ['frontend stack', 'web development', 'react experience'],
    response:
      "Next.js 14 + React + TypeScript + Tailwind CSS. This very website is the proof — static export, GSAP scroll animations, deterministic conversational engine, all running on Vercel at $0.00/month. For SaaS products: Supabase Auth + Vercel deployment. The frontend is never the bottleneck.",
    navigateTo: 6,
    responseStyle: 'placard',
  },
  {
    id: 'education-overview',
    category: 'education',
    keywords: ['education', 'degree', 'university', 'college', 'study', 'studied', 'qualification', 'academic'],
    phrases: ['your education', 'where did you study', 'qualifications', 'academic background'],
    response:
      "Five post-secondary credentials across two countries: BBA from GLS University (Ahmedabad), PG Diplomas in Business Analytics and Data Science from Gujarat University and IIIT-Bangalore, then PG Diplomas in Business Analytics and Financial Technology from Seneca College in Toronto. Plus Google Data Analytics Professional Certificate. The India-to-Canada academic journey mirrors the career one.",
    navigateTo: 1,
    responseStyle: 'frame',
  },
  {
    id: 'education-india',
    category: 'education',
    keywords: ['india', 'ahmedabad', 'gls', 'gujarat', 'iiit', 'bangalore', 'bba'],
    phrases: ['education in india', 'gls university', 'iiit bangalore'],
    response:
      "India education: BBA from GLS University, Ahmedabad (2015-2018, 6.89/10). PG Diploma in Business Analytics from Gujarat University (2018-2019, 8.00/10). PG Diploma in Data Science from IIIT-Bangalore (2018-2019, 3.54/4.00). The BBA gave me business fundamentals; the PG diplomas gave me the analytical toolkit that now powers everything I build.",
    navigateTo: 1,
    responseStyle: 'frame',
  },
  {
    id: 'education-canada',
    category: 'education',
    keywords: ['seneca', 'fintech', 'financial', 'technology', 'diploma'],
    phrases: ['seneca college', 'fintech diploma', 'education in canada'],
    response:
      "Canada education: PG Diploma in Business Analytics from Seneca College (2019-2020, 3.40/4.00) and PG Diploma in Financial Technology (2020-2021, 3.60/4.00). The fintech diploma was prescient — it gave me the financial systems knowledge that would become central to my work at TELUS Health and to building ATLAS.",
    navigateTo: 1,
    responseStyle: 'frame',
  },
  {
    id: 'skills-certification',
    category: 'skills',
    keywords: ['certification', 'google', 'analytics', 'certificate', 'credential'],
    phrases: ['google certification', 'data analytics certificate'],
    response:
      "Google Data Analytics Professional Certificate. The formal credential on top of practical experience. But honestly — the real certification is the six products I've shipped and the enterprise portfolios I manage daily. Credentials open doors; work keeps them open.",
    navigateTo: 6,
    responseStyle: 'placard',
  },

  // ============================================================
  // PHILOSOPHY (6 entries)
  // ============================================================
  {
    id: 'philosophy-approach',
    category: 'philosophy',
    keywords: ['philosophy', 'approach', 'think', 'believe', 'method', 'different', 'unique'],
    phrases: ['your philosophy', 'how do you think', 'what makes you different', 'your approach'],
    response:
      "Three principles: (1) Deterministic before probabilistic — if you can compute it, don't generate it. (2) Precision is non-negotiable — enterprise systems taught me that 'close enough' isn't. (3) The framework compounds — every project makes the next one faster through MIDAS knowledge accumulation. Most AI consultants sell AI. I sell systems that happen to use AI only where it's the best tool.",
    responseStyle: 'quote',
  },
  {
    id: 'philosophy-ai-opinion',
    category: 'philosophy',
    keywords: ['opinion', 'ai', 'future', 'think', 'industry', 'trend', 'hype'],
    phrases: ['your opinion on ai', 'future of ai', 'ai industry', 'is ai overhyped'],
    response:
      "AI is powerful but wildly misapplied. Most products using AI don't need it — they need better engineering. The companies that win will be the ones that use AI surgically: deterministic computation for 95% of the work, AI for the last 5% that genuinely requires intelligence. Everything else is burning investor money on API calls.",
    responseStyle: 'quote',
  },
  {
    id: 'philosophy-cost',
    category: 'philosophy',
    keywords: ['cost', 'expensive', 'budget', 'affordable', 'investment', 'roi', 'return'],
    phrases: ['cost of ai', 'is ai expensive', 'roi on ai', 'return on investment'],
    response:
      "Traditional AI: $0.05-$0.50 per interaction. MDS approach: less than $0.01. At scale, that's the difference between a viable business and a cash bonfire. This conversation? $0.00. This entire website? $0.00/month hosting. That's not a limitation — it's a design philosophy. Build the expensive parts first as cheap parts, then use AI only for what's genuinely impossible without it.",
    responseStyle: 'frame',
  },

  // ============================================================
  // META (8 entries)
  // ============================================================
  {
    id: 'meta-website',
    category: 'meta',
    keywords: ['website', 'site', 'built', 'made', 'how', 'this', 'tech', 'create'],
    phrases: ['how was this built', 'how did you make this', 'what is this built with', 'this website'],
    response:
      "You're looking at it. This website is Next.js 14, GSAP for the cinematic scroll gallery, Tailwind CSS for styling, and a deterministic conversational engine for this very conversation. Zero AI API calls. The entire site runs on static files hosted on Vercel. Total monthly cost: $0.00. This is what I build for clients — systems that feel intelligent but run on math.",
    responseStyle: 'frame',
  },
  {
    id: 'meta-chatbot',
    category: 'meta',
    keywords: ['chatbot', 'bot', 'ai', 'conversation', 'talking', 'chat', 'llm', 'gpt'],
    phrases: ['is this ai', 'am i talking to ai', 'is this a chatbot', 'how does this chat work', 'is this gpt'],
    response:
      "This conversation runs on a deterministic matching engine. No AI API calls. No language model. Just carefully crafted responses matched to your questions through keyword analysis. It costs exactly $0.00 per conversation. The fact that it feels intelligent without using AI is precisely the point — and precisely what I help clients build.",
    responseStyle: 'frame',
  },
  {
    id: 'meta-cost',
    category: 'meta',
    keywords: ['cost', 'api', 'token', 'free', 'hosting', 'run'],
    phrases: ['how much does this cost', 'api costs', 'cost to run this', 'is this free'],
    response:
      "This conversation: $0.00. This entire website: $0.00/month hosting. That's the deterministic-first philosophy. When I build products for clients, the target is less than $0.01 per user interaction. Most of the 'AI products' you see out there are spending $0.05-$0.50 per interaction on raw API calls. I build systems that are 50x cheaper and often more reliable.",
    responseStyle: 'frame',
  },
  {
    id: 'meta-how-long',
    category: 'meta',
    keywords: ['long', 'took', 'build', 'time', 'hours', 'days'],
    phrases: ['how long did this take', 'how long to build', 'time to build this'],
    response:
      "This website — including the 3D gallery, cinematic scroll system, all 8 rooms of content, and the conversational engine with 100+ hand-crafted responses — was built with Claude Code in a single session. The MIDAS framework accelerates everything. But the real answer is: years. The content reflects 7+ years of experience that can't be speed-run.",
    responseStyle: 'placard',
  },
  {
    id: 'meta-source',
    category: 'meta',
    keywords: ['source', 'code', 'github', 'open', 'repo', 'repository', 'architecture'],
    phrases: ['view source', 'source code', 'github repo', 'is this open source', 'view architecture'],
    response:
      "The architecture: Next.js 14 static export → GSAP ScrollTrigger (scrub: 1.5) for cinematic room transitions → Zustand for state → deterministic keyword matcher (150+ entries) for this conversation → Vercel hosting. No Three.js (dropped it for CSS performance). No AI APIs. Pure TypeScript, CSS transforms, and hand-crafted responses. The entire site proves you don't need AI to feel intelligent.",
    responseStyle: 'frame',
  },
  {
    id: 'meta-real',
    category: 'meta',
    keywords: ['real', 'human', 'fake', 'genuine', 'authentic', 'person'],
    phrases: ['is this real', 'are you real', 'are you human', 'is this fake'],
    response:
      "I'm very real. Shrish Manglik, Toronto, Canada. This conversation is pre-written (deterministic matching, not AI) but every word is mine — written to represent my actual experience, opinions, and work. The gallery is a curated exhibition, just like any portfolio. The difference is this one talks back.",
    responseStyle: 'placard',
  },
  {
    id: 'meta-impressive',
    category: 'meta',
    keywords: ['impressive', 'cool', 'amazing', 'wow', 'incredible', 'beautiful'],
    phrases: ['this is impressive', 'this is cool', 'amazing website', 'beautiful site'],
    response:
      "Thank you. The website is designed to be the consulting pitch itself — if this experience convinces you that deterministic systems can feel intelligent, imagine what a purpose-built system can do for your business. That's the MDS value proposition in action. Want to build something together?",
    navigateTo: 7,
    responseStyle: 'placard',
  },

  // ============================================================
  // CONTACT (6 entries)
  // ============================================================
  {
    id: 'contact-info',
    category: 'contact',
    keywords: ['contact', 'reach', 'email', 'phone', 'call', 'connect', 'linkedin'],
    phrases: ['how to contact', 'your email', 'get in touch', 'reach you', 'contact info'],
    response:
      "Email: shrishmanglik@gmail.com · Phone: (647) 879-9449 · LinkedIn: linkedin.com/in/shrishmanglik · Studio: milliondollarstudio.ai — Pick your preferred channel. I typically respond within 24 hours.",
    navigateTo: 7,
    responseStyle: 'placard',
  },
  {
    id: 'contact-hire',
    category: 'contact',
    keywords: ['hire', 'work', 'together', 'project', 'engagement', 'consult', 'collaborate'],
    phrases: ['can i hire you', 'work together', 'start a project', 'collaborate'],
    response:
      "Let's talk. For AI consulting and builds: $3K-$200K+ depending on scope. For full-time opportunities: I'm targeting AI Systems Architect and Implementation Lead roles, remote-friendly, $150K+ CAD. Either way, start with an email to shrishmanglik@gmail.com with what you're building and I'll tell you honestly whether I can help.",
    navigateTo: 7,
    responseStyle: 'frame',
  },
  {
    id: 'contact-linkedin',
    category: 'contact',
    keywords: ['linkedin', 'social', 'profile', 'network'],
    phrases: ['your linkedin', 'linkedin profile', 'social media'],
    response:
      "LinkedIn: linkedin.com/in/shrishmanglik — that's my professional hub. Connect and mention you came from the gallery. For studio inquiries: milliondollarstudio.ai.",
    navigateTo: 7,
    responseStyle: 'placard',
  },
  {
    id: 'contact-meeting',
    category: 'contact',
    keywords: ['meeting', 'schedule', 'book', 'calendar', 'call', 'zoom', 'chat'],
    phrases: ['schedule a meeting', 'book a call', 'can we talk'],
    response:
      "Email shrishmanglik@gmail.com with a brief description of what you're looking to build or discuss. I'll respond within 24 hours with availability. For urgent matters: (647) 879-9449. I keep my calendar flexible for the right conversations.",
    navigateTo: 7,
    responseStyle: 'placard',
  },

  // ============================================================
  // NAVIGATION SHORTCUTS (8 entries)
  // ============================================================
  {
    id: 'nav-top',
    category: 'about',
    keywords: ['top', 'beginning', 'start', 'entrance', 'home', 'first'],
    phrases: ['go to top', 'back to start', 'entrance', 'go home', 'first room'],
    navigateTo: 0,
    response: '',
    responseStyle: 'none',
  },
  {
    id: 'nav-origins',
    category: 'education',
    keywords: ['origins', 'education', 'journey'],
    phrases: ['show education', 'go to origins', 'education room'],
    navigateTo: 1,
    response: '',
    responseStyle: 'none',
  },
  {
    id: 'nav-career',
    category: 'career',
    keywords: ['career', 'enterprise', 'work', 'history'],
    phrases: ['show career', 'go to career', 'enterprise wing'],
    navigateTo: 2,
    response: '',
    responseStyle: 'none',
  },
  {
    id: 'nav-telus',
    category: 'telus',
    keywords: ['telus', 'room'],
    phrases: ['go to telus', 'telus room', 'show telus'],
    navigateTo: 3,
    response: '',
    responseStyle: 'none',
  },
  {
    id: 'nav-studio',
    category: 'mds',
    keywords: ['studio', 'innovation', 'lab', 'mds'],
    phrases: ['go to studio', 'innovation lab', 'show mds'],
    navigateTo: 4,
    response: '',
    responseStyle: 'none',
  },
  {
    id: 'nav-projects',
    category: 'projects',
    keywords: ['projects', 'vault'],
    phrases: ['show projects', 'go to projects', 'project vault'],
    navigateTo: 5,
    response: '',
    responseStyle: 'none',
  },
  {
    id: 'nav-skills',
    category: 'skills',
    keywords: ['skills', 'workshop'],
    phrases: ['show skills', 'go to workshop', 'skills room'],
    navigateTo: 6,
    response: '',
    responseStyle: 'none',
  },
  {
    id: 'nav-contact',
    category: 'contact',
    keywords: ['contact', 'exit', 'end'],
    phrases: ['take me to contact', 'contact page', 'go to contact', 'exit portal'],
    navigateTo: 7,
    response: '',
    responseStyle: 'none',
  },

  // ============================================================
  // FALLBACKS & EDGE CASES (5 entries)
  // ============================================================
  {
    id: 'fallback-greeting',
    category: 'about',
    keywords: ['hi', 'hello', 'hey', 'sup', 'yo', 'morning', 'evening', 'afternoon', 'welcome'],
    phrases: ['hi', 'hello', 'hey there', 'good morning', 'good evening'],
    response:
      "Welcome to the gallery. I'm Shrish — AI Systems Architect, enterprise benefits specialist, and builder of things that work. Ask me anything, or scroll down to explore the exhibits.",
    responseStyle: 'placard',
  },
  {
    id: 'fallback-thanks',
    category: 'about',
    keywords: ['thanks', 'thank', 'cool', 'awesome', 'great', 'nice', 'impressive', 'appreciate'],
    phrases: ['thank you', 'thanks', 'this is cool', 'appreciate it'],
    response:
      "Glad you're enjoying the gallery. If you want to build something together or just want to connect — Room 8 has all the contact details. Or ask me anything else.",
    navigateTo: 7,
    responseStyle: 'placard',
  },
  {
    id: 'fallback-help',
    category: 'meta',
    keywords: ['help', 'guide', 'instructions', 'how', 'use', 'commands'],
    phrases: ['help', 'how do i use this', 'what can i ask'],
    response:
      "Ask me about: my background, career at TELUS Health, Million Dollar AI Studio, projects I've built (AstroAI, NestIQ, ATLAS, ChemAI, JobFlow), my tech stack, philosophy, or how to get in touch. You can also say things like 'go to projects' to navigate directly to a room.",
    responseStyle: 'frame',
  },
  {
    id: 'fallback-nonsense',
    category: 'about',
    keywords: ['lol', 'haha', 'lmao', 'wtf', 'omg', 'bruh'],
    phrases: [],
    response:
      "I see you're testing the boundaries. This is a deterministic engine — no AI, no judgment, just keyword matching. But if you have a real question about my work, experience, or how to get in touch, I'm here for that.",
    responseStyle: 'placard',
  },
  {
    id: 'fallback-profanity',
    category: 'about',
    keywords: ['fuck', 'shit', 'damn', 'ass', 'hell', 'crap', 'stupid', 'suck', 'hate', 'worst'],
    phrases: [],
    response:
      "Noted. If there's something specific about the experience that isn't working for you, I'd rather hear constructive feedback. Otherwise — the gallery's still open. Room 8 has contact info if you want to reach the actual human behind this.",
    navigateTo: 7,
    responseStyle: 'placard',
  },
];
