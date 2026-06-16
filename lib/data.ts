import {
  BarChart3,
  Bot,
  Camera,
  Clapperboard,
  Database,
  Film,
  LineChart,
  Megaphone,
  MessageCircle,
  Search,
  Settings2,
  Workflow
} from "lucide-react";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/media", label: "Media" },
  { href: "/marketing-tech", label: "Marketing Tech" },
  { href: "/tech-solutions", label: "Tech Solutions" },
  { href: "/work", label: "Work" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export const industries = [
  "Education",
  "Healthcare",
  "Real Estate",
  "Retail",
  "Startups",
  "Events",
  "Corporate Brands"
];

export const coreWings = [
  {
    title: "Everything Media",
    href: "/media",
    icon: Film,
    description: "Cinematic production for brands that want to look credible, premium, and memorable.",
    services: ["Brand Films", "Advertisements", "Cinematic Testimonials", "Social Media Reels", "Event Coverage"]
  },
  {
    title: "Everything Marketing Tech",
    href: "/marketing-tech",
    icon: Megaphone,
    description: "Campaign systems that help businesses generate, nurture, and convert leads.",
    services: ["Performance Marketing", "WhatsApp Marketing", "Google Ads", "SEO"]
  },
  {
    title: "Tech Solutions",
    href: "/tech-solutions",
    icon: Workflow,
    description: "Custom business technology to reduce manual work and improve operations.",
    services: ["CRM Solutions", "Social Media Automations", "Operation Software", "Supply Chain Software Solutions"]
  }
];

export const mediaServices = [
  { title: "Brand Films", icon: Clapperboard, description: "Narrative-led films that make a brand feel established, focused, and worth trusting." },
  { title: "Advertisements", icon: Camera, description: "Commercial assets built for launches, campaigns, paid media, and high-intent audiences." },
  { title: "Cinematic Testimonials", icon: MessageCircle, description: "Human proof stories crafted with sharp questions, clean visuals, and emotional clarity." },
  { title: "Social Media Reels", icon: Film, description: "Short-form videos designed for attention, retention, and measurable campaign use." },
  { title: "Event Coverage", icon: Camera, description: "Premium capture for conferences, launches, workshops, and institutional milestones." }
];

export const marketingServices = [
  { title: "Performance Marketing", icon: LineChart, description: "Campaign planning, testing, optimization, and reporting for lead and revenue growth." },
  { title: "WhatsApp Marketing", icon: MessageCircle, description: "Lead capture, nurture flows, broadcasts, and follow-up systems built around WhatsApp." },
  { title: "Google Ads", icon: Search, description: "Intent-led campaigns across search, display, remarketing, and landing page funnels." },
  { title: "SEO", icon: BarChart3, description: "Search visibility systems that compound through content, technical fixes, and local optimization." }
];

export const techServices = [
  { title: "CRM Solutions", icon: Database, description: "Lead and sales pipelines customized around the way your team actually works." },
  { title: "Social Media Automations", icon: Bot, description: "Automated posting, routing, reporting, and response workflows across digital channels." },
  { title: "Operation Software", icon: Settings2, description: "Internal tools that replace spreadsheets, reduce manual updates, and reveal bottlenecks." },
  { title: "Supply Chain Software", icon: Workflow, description: "Workflow systems for procurement, inventory, fulfillment, vendor coordination, and visibility." }
];

export const portfolioCategories = [
  "All",
  "Brand Films",
  "Advertisements",
  "Testimonials",
  "Reels",
  "Event Coverage",
  "Marketing Campaigns",
  "Campaigns",
  "Tech Solutions"
];

export const homePortfolioCategories = ["All", "Brand Films", "Testimonials", "Marketing Reels", "Campaigns", "Tech Solutions"];

export const portfolioItems = [
  {
    title: "Education Brand Campaign",
    category: "Brand Films",
    description: "A campus-positioning film and admissions content pack for a growing education brand.",
    impact: "Built stronger admissions recall",
    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Cinematic Student Testimonial",
    category: "Testimonials",
    description: "A student success story shaped for credibility across paid and organic channels.",
    impact: "Improved trust for high-intent leads",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Performance Marketing Campaign",
    category: "Marketing Campaigns",
    description: "Google Ads, landing page, and reporting stack for a conversion-focused campaign.",
    impact: "Sample result: 2.5x ROAS",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "WhatsApp Lead Generation Funnel",
    category: "Campaigns",
    description: "Lead form, WhatsApp automation, and follow-up workflow for faster sales response.",
    impact: "Sample result: 600+ leads generated",
    image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Corporate Brand Film",
    category: "Brand Films",
    description: "Executive-led brand story designed for sales meetings, website embeds, and events.",
    impact: "Created a premium first impression",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "CRM Automation System",
    category: "Tech Solutions",
    description: "A custom lead management system with automated follow-ups and campaign visibility.",
    impact: "Reduced manual tracking effort",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Launch Advertisement",
    category: "Advertisements",
    description: "A paid media creative set for a product launch with short edits and audience-specific hooks.",
    impact: "Built for conversion testing",
    image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Founder Marketing Reel",
    category: "Reels",
    description: "A sharp founder-led reel package for organic authority and paid retargeting audiences.",
    impact: "Created reusable short-form assets",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Corporate Event Coverage",
    category: "Event Coverage",
    description: "A conference coverage package with highlight film, speaker clips, and social edits.",
    impact: "Extended event value after launch day",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80"
  }
];

export const metrics = [
  "2.5x ROAS",
  "600+ leads generated",
  "40% lower cost per lead",
  "WhatsApp campaign automation",
  "Google Ads + landing page funnel"
];

export const processSteps = [
  "Understand the Business",
  "Build the Strategy",
  "Create Media / Tech Assets",
  "Launch Campaigns",
  "Track, Optimize & Scale"
];

export const whyPoints = [
  "Strategy-first approach",
  "Media + Marketing + Tech under one roof",
  "Conversion-focused creative",
  "Automation-led execution",
  "Business outcomes over vanity metrics"
];

export const caseStudies = [
  {
    title: "Education Lead Generation Campaign",
    result: "Sample result: 600+ qualified admission enquiries",
    problem: "The institution needed a predictable admissions pipeline beyond seasonal referrals.",
    strategy: "Combine trust-building content with Google Ads, targeted landing pages, and WhatsApp follow-up.",
    execution: "Built campaign assets, launched intent-based ads, routed leads to WhatsApp, and tracked funnel stages.",
    tools: ["Google Ads", "Landing Page", "WhatsApp Automation", "CRM Dashboard"]
  },
  {
    title: "WhatsApp Marketing Funnel",
    result: "Sample result: 40% faster lead response time",
    problem: "Incoming leads were scattered across forms, calls, and social channels without structured follow-up.",
    strategy: "Centralize lead capture and use automated WhatsApp sequences for qualification and reminders.",
    execution: "Created opt-in flows, message templates, lead tags, and sales handoff triggers.",
    tools: ["WhatsApp API", "Lead Forms", "Automation Rules", "Sales CRM"]
  },
  {
    title: "Google Ads Performance Campaign",
    result: "Sample result: 2.5x ROAS",
    problem: "The client had ad spend but lacked a conversion architecture and useful reporting.",
    strategy: "Rebuild campaigns around intent, improve the landing page, and measure cost per lead by segment.",
    execution: "Launched search campaigns, remarketing audiences, creative tests, and weekly optimization cycles.",
    tools: ["Google Ads", "Analytics", "Landing Page Builder", "Looker Studio"]
  },
  {
    title: "CRM Automation for Sales Team",
    result: "Sample result: 30% less manual reporting effort",
    problem: "Sales teams were using spreadsheets, causing missed follow-ups and unclear pipeline ownership.",
    strategy: "Design a practical CRM workflow with lead stages, reminders, campaign source tracking, and dashboards.",
    execution: "Mapped sales operations, built custom fields, created automations, and trained the team.",
    tools: ["Custom CRM", "Workflow Automation", "Dashboards", "WhatsApp Reminders"]
  }
];
