"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  MapPin, 
  Download, 
  Code, 
  Layout, 
  FileText, 
  Settings,
  ChevronRight,
  Award,
  Menu,
  X
} from "lucide-react";
import SunsetCanvas from "@/components/SunsetCanvas";
import ProjectModal from "@/components/ProjectModal";

// Setup full project database extracted from scraped Notion/PDF data
const projectsData = [
  {
    id: "zepto",
    title: "Innovating Zepto",
    tagline: "Diagnosing a 10% drop in Search → Add-to-Cart conversions and recovering ₹3.6Cr/day in revenue.",
    award: "3rd Place (Inter-IIT Product Competition)",
    objective: "Analyze and resolve the search-to-cart drop affecting daily orders.",
    about: "As a hypothetical Product Manager at Zepto, I was tasked with the challenge to understand the reasons behind a 10% drop in the 'Search to Add-to-Cart' conversion rate over a 4-week period and prioritize the most impactful solutions to improve product discovery and intent capture.",
    problem: {
      statement: "Zepto saw a 10% drop in Search → Add-to-Cart conversion rate, impacting 1.8–1.9 lakh orders daily.",
      impact: [
        "Daily order drop: ~1.8–1.9 lakh potential lost orders per day.",
        "Revenue drop: At ₹200 average order value, this equals a daily revenue loss of ₹3.6–3.8 Crore (~₹110 Crore monthly).",
        "Affects repeat users the most on mobile app, threatening customer retention."
      ],
      causes: [
        "UX Choice Paralysis: Fragmented app experience due to multiple distinct shopping categories upon opening.",
        "Pop-up Overload: Excessive promotional pop-ups (subscriptions, banners) interrupt checkout and tracking.",
        "Search bar lacks visual priority and fails to display relevant trending products.",
        "Out of Stock (OOS) disappointment: High volume of search results return out-of-stock items.",
        "Tech bottlenecks: Slow search result load speeds due to CPU throttling and tech debt."
      ]
    },
    solutions: [
      { title: "Search Bar Elevation", desc: "Redesign the search bar to be the most prominent, larger, centrally placed, and visually distinct element on the home screen." },
      { title: "Pop-up Minimization", desc: "Minimize intrusive pop-ups and transition to subtle, non-intrusive banners or in-context prompts to keep users focused on purchases." },
      { title: "Predictive Inventory (ZeptoReserve)", desc: "Temporarily reserve stock during high-intent phases (e.g. while products are in the cart) to prevent last-minute out-of-stock checkouts." },
      { title: "Scarcity & Urgency Cues", desc: "Provide real-time stock availability and scarcity alerts directly under search items to drive conversion." },
      { title: "Fairness-driven Stock Allocation", desc: "Distribute high-demand items dynamically across dark stores to optimize geographic availability." }
    ],
    metrics: {
      nsm: "Search to Add-to-Cart Conversion Rate (%)",
      secondary: [
        "Daily active search users",
        "Search-to-Checkout time latency",
        "Out of Stock (OOS) page bounce rate",
        "Pop-up dismissal rate vs conversion"
      ]
    },
    gtm: [
      "Launch elevated search UI with clean, autocomplete search parameters.",
      "A/B test the elimination of multiple pop-ups to track order completion speed.",
      "Deploy ZeptoReserve to 5% of dark stores, validating checkout conversion recovery before global launch."
    ],
    deckUrl: "https://drive.google.com/file/d/1vQTNLhYqNLjRAmPtuw8jphDM7trEX5cw/view?usp=sharing",
    deckName: "Zepto Case Study.pdf"
  },
  {
    id: "whatsapp",
    title: "WhatsApp for Professional Collaboration",
    tagline: "Redesigning WhatsApp with visual Kanban boards, threaded chats, and cloud tools to capture Slack & Teams market share.",
    objective: "Transform WhatsApp into a mobile-first professional collaboration platform.",
    about: "As a hypothetical Product Manager at WhatsApp, I was tasked with the challenge to help WhatsApp capture a share of the professional communication and productivity market currently dominated by Slack, Microsoft Teams, and Google Workspace, by integrating seamless collaboration features with the app's intuitive UI.",
    marketSize: {
      tam: "$27.95 Billion",
      sam: "$18.2 Billion",
      som: "$3.64 Billion",
      source: "World Bank Data, Global Market Insights"
    },
    problem: {
      statement: "WhatsApp is used for work communications but lacks professional tools, causing small teams to switch to complex desktop-first alternatives.",
      impact: [
        "Small businesses switch to Teams or Slack, causing drop-offs in WhatsApp's daily engagement.",
        "Inbox clutter: Unthreaded, chaotic chat bubbles cause teams to miss critical files and task updates.",
        "Lost monetization: Missed opportunity to generate high-margin SaaS revenue from WhatsApp's 2B+ users."
      ],
      causes: [
        "No structured thread management for grouped discussions.",
        "No visual tracking of tasks or project phases.",
        "Lack of cloud storage and external integrations (Google Sheets/Docs)."
      ]
    },
    solutions: [
      { title: "Organized Collaboration Channels", desc: "Create dedicated professional workspaces and channels, removing community group limits to support teams of any size." },
      { title: "In-App Kanban Board", desc: "Allow users to convert chat actions into tasks on visual Kanban boards to monitor project progress." },
      { title: "Google Workspace Integration", desc: "Open, edit, and collaborate on Google docs and spreadsheets directly inside the WhatsApp interface without context switching." },
      { title: "Threaded Conversations", desc: "Introduce nested message threads to reduce chat clutter and group conversations by specific topics." },
      { title: "Professional Cloud Storage", desc: "Dedicated cloud storage for professional channels, allowing teams to retrieve files without worrying about device storage." }
    ],
    metrics: {
      nsm: "Weekly Active Collaborators × Avg. Collaborations per Workspace",
      secondary: [
        "Thread utilization rate (RICE Score: 11.2)",
        "Google API integration clicks (RICE Score: 8.52)",
        "Tasks created per user per week (RICE Score: 8.4)",
        "Paid subscription conversion rate"
      ]
    },
    gtm: [
      "Onboarding Quiz: Guide workspace creators in setting up channels.",
      "Beta launch: Offer free trials to select startups and small agencies.",
      "SaaS pricing tier rollout: Launch Pro ($1.80/mo) and Business ($3.50/mo) tiers for advanced storage and integrations."
    ],
    deckUrl: "https://drive.google.com/file/d/1pZmrzdGT3lbEmrrpqgkfHrii9Q3DAGYL/view?usp=sharing",
    deckName: "WhatsApp Collab Deck.pdf"
  },
  {
    id: "finshots",
    title: "Improving Finshots Engagement",
    tagline: "Increasing in-app user retention and organic growth through multilingual support, alerts, and refined recommendations.",
    objective: "Reduce reliance on external prompts by building strong internal habit loops.",
    about: "As a PM at Finshots, I designed a product strategy to solve the 'single-article bounce' rate (where users exit after reading just one post) by creating in-app engagement loops and expanding reach to regional Indian audiences.",
    marketSize: {
      tam: "912 Million (Internet users in India)",
      sam: "228 Million (Finance interested, English literate, digitally active)",
      som: "27 Million (12% brand awareness capture)",
      source: "EY Research, Statista"
    },
    problem: {
      statement: "Finshots has low organic growth and high bounce rates due to an over-reliance on intrusive email and notification prompts.",
      impact: [
        "High user fatigue: Over-reliance on external notifications drives app uninstalls over time.",
        "Regional exclusion: 70%+ of potential readers in non-tier-1 cities are excluded due to English-only content.",
        "Low multi-article reads: Average visit duration is limited to one article reading session."
      ],
      causes: [
        "Lack of regional language support.",
        "Inefficient search bar (no autocomplete, fails with partial matching).",
        "No save-for-later or reading reminder alert systems."
      ]
    },
    solutions: [
      { title: "Multilingual Support", desc: "Add options to read daily explainers in regional Indian languages, starting with Hindi." },
      { title: "Custom Reading Reminders", desc: "Introduce a quick alert icon allowing users to schedule custom push reminders to read saved articles later." },
      { title: "Smarter Search & Filters", desc: "Optimize the search bar with instant suggestions, partial match logic, and sorting tags ('Most Liked', 'By Date')." },
      { title: "Refined Feed & Recommendations", desc: "Introduce 'You May Also Like' cards at the end of each explainer to encourage immediate exploration of related articles." }
    ],
    metrics: {
      nsm: "Weekly Active Readers × Avg. Articles Read per User per Week",
      secondary: [
        "Language toggle usage rate",
        "Reminder Click-Through-Rate (CTR)",
        "Search-to-read ratio",
        "Dislike-to-read feed optimization score"
      ]
    },
    gtm: [
      "Onboarding mini-guide showcasing the reminder and search filters.",
      "SMS and email notifications launched in regional languages to announce multilingual support.",
      "Iterative recommendation model updates using reader dislikes and feedback loops."
    ],
    deckUrl: "https://drive.google.com/file/d/1-9r3gBr53LOMBhtlBaMTDKwhez2ripdW/view?usp=sharing",
    deckName: "Improving Finshots.pdf"
  },
  {
    id: "nykaa",
    title: "Increasing Nykaa's Loyalty & Repeat Purchases",
    tagline: "Driving higher repeat purchases among first-time beauty buyers to protect ₹90 Crore in monthly revenue.",
    objective: "Cultivate post-purchase engagement loops for new shoppers.",
    about: "As a Product Manager at Nykaa, I analysed the post-purchase drop-off rate of first-time buyers and proposed an engagement-driven, omni-channel loyalty framework to convert one-time transactional shoppers into long-term brand advocates.",
    problem: {
      statement: "High churn rate among new users after their first order due to a highly transactional experience and aggressive mass-market competitor pricing.",
      impact: [
        "Monthly revenue at risk: With 2.5 million orders monthly, if 20% are first-time buyers with ₹1800 average order value, ₹90 Crore/mo is lost to churn.",
        "A 25% drop in repeat user order frequency results in an additional ₹90 Crore monthly loss.",
        "Low user lifetime value (LTV) due to poor cross-selling and discovery."
      ],
      causes: [
        "Mass-market pricing threats from competitors like Purplle.",
        " horizontal giants (Amazon) dominating in logistics speed and convenience.",
        "Transactional focus: No content loops, try-ons, or skincare consultations post-purchase."
      ]
    },
    solutions: [
      { title: "Personalized Retention Discounts", desc: "Provide customized, loyalty-triggered discounts tailored specifically for the second purchase cycle." },
      { title: "Smart Buy Curations", desc: "Leverage purchase history to display highly-rated, affordable daily essentials, making product discovery easier." },
      { title: "Omni-channel Experiential Zones", desc: "Integrate app profiles with physical Nykaa stores, offering in-store virtual makeovers, consultations, and interactive product screens." },
      { title: "Content-to-Commerce Integration", desc: "Show beauty tutorials, community skincare forums, and influencer routine pages directly below order tracking screens." }
    ],
    metrics: {
      nsm: "First-to-Second Purchase Conversion Rate (%)",
      secondary: [
        "Average Order Frequency per Customer",
        "Skincare routine builder engagement rate",
        "Referral conversion rate",
        "In-store check-in and QR codes scanned"
      ]
    },
    gtm: [
      "Send post-purchase Skincare routine builder quiz via WhatsApp.",
      "Partner with physical outlet consultation zones to launch QR-code app activations.",
      "A/B test personalized second-order vouchers vs generic newsletter discounts."
    ],
    deckUrl: "https://drive.google.com/file/d/10koRnmbVAKUTXin7hgXzokgG4_DdkHB0/view?usp=sharing",
    deckName: "Nykaa Case Study.pdf"
  },
  {
    id: "careerpath",
    title: "Career Path AI",
    tagline: "Building a personalized EdTech platform with AI-curated roadmaps and task sandboxes.",
    award: "Top 4 Rank (ProdBlitz-3 Competition)",
    objective: "Eliminate career decision paralysis and provide hands-on role trials.",
    about: "Designed as part of ProdBlitz 3.0 at IIT (ISM) Dhanbad, Career Path AI is an adaptive, lifelong learning ecosystem built to solve unstructured upskilling and career choice paralysis by integrating AI-generated paths with role simulations.",
    marketSize: {
      tam: "$7.3 Trillion (Global education spend by 2025)",
      sam: "$548 Billion (EdTech + Corporate training)",
      som: "$5–11 Billion (Target SOM in early phases)",
      source: "HolonIQ Research"
    },
    problem: {
      statement: "Learners suffer from decision paralysis, unstructured learning paths, and a lack of real-world role trial systems, leading to persistent skill gaps.",
      impact: [
        "Time wasted: Thousands of students spend months in confusion trying to switch domains without actual career role exposure.",
        "High churn: Traditional e-learning platforms suffer from high drop-off rates due to generic, static course catalogs.",
        "No practical application: Traditional certifications fail to test whether the student can perform the day-to-day tasks of a role."
      ],
      causes: [
        "Information overload from varied course providers.",
        "No sandbox or mock projects that replicate actual work environments.",
        "Lack of interactive career-readiness assessments."
      ]
    },
    solutions: [
      { title: "Adaptive Career Readiness Graph", desc: "Utilize an onboarding questionnaire mapping academic background and interests to generate a personal readiness spider chart." },
      { title: "2-Week Micro-Experiments", desc: "Allow users to select short career trials (e.g. 'Day in the Life of a PM') to explore different fields before committing." },
      { title: "AI-Powered Sandbox", desc: "Create simulated role tasks (e.g. 'Analyze a user metrics dataset' or 'Draft a product PRD') and provide instant, automated AI evaluation." },
      { title: "Custom Skill-Switcher Roadmap", desc: "Provide customized transition maps (e.g., 'Civil Engineering to Product Management') detailing specific gaps and GTM phases." },
      { title: "Streaks & Gamified Nudges", desc: "Build in smart reminder alerts, streaks, and community forums to keep learners consistent." }
    ],
    metrics: {
      nsm: "Avg. Sandbox Tasks Completed per User per Month",
      secondary: [
        "Onboarding quiz completion rate",
        "Micro-experiment enrollment-to-completion rate",
        "Daily active streak retention",
        "AI career path confidence accuracy score"
      ]
    },
    gtm: [
      "Onboard 100 beta testers from IIT (ISM) Dhanbad to refine the sandbox evaluation latency.",
      "Host virtual product case challenges via the community layer to drive user acquisition.",
      "Launch a 4-phase rollout plan aiming to secure 50,000 active users."
    ],
    deckUrl: "https://drive.google.com/file/d/11jLej6yQdqdC-UvkXpjrDl7xAriuC0IL/view?usp=sharing",
    deckName: "Career Path AI Deck.pdf"
  }
];

export default function PortfolioHome() {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#030303] text-neutral-100 font-sans relative pb-24 selection:bg-orange-500 selection:text-black">
      {/* Decorative Top Accent Light */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] sunset-glow bg-orange-600/20" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[250px] sunset-glow bg-red-600/10" />

      {/* Grid Overlay Background */}
      <div className="absolute inset-0 grid-bg opacity-[0.03] pointer-events-none z-0" />

      {/* Container */}
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header / Nav */}
        <header className="py-6 flex items-center justify-between border-b border-neutral-900/60 mb-12 relative">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse"></span>
            <span className="text-lg font-bold tracking-tight text-white">Rakshit Raj</span>
          </motion.div>
          
          {/* Desktop Nav */}
          <motion.nav 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center gap-8 text-sm text-neutral-400 font-light"
          >
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#resume" className="hover:text-white transition-colors">Resume</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </motion.nav>

          {/* Mobile Hamburger Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-400 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Nav Menu Dropdown */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 right-0 mt-2 p-6 bg-neutral-950/95 border border-neutral-900 rounded-xl flex flex-col gap-4 text-base text-neutral-400 font-light z-50 backdrop-blur-md shadow-2xl"
              >
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors py-2 border-b border-neutral-900/50">About</a>
                <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors py-2 border-b border-neutral-900/50">Skills</a>
                <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors py-2 border-b border-neutral-900/50">Projects</a>
                <a href="#resume" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors py-2 border-b border-neutral-900/50">Resume</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors py-2">Contact</a>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* Hero Section */}
        <section className="mb-20 space-y-12">
          <div className="max-w-3xl space-y-6">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs uppercase tracking-widest text-orange-500 font-semibold bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20"
            >
              Aspiring Product Manager
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05]"
            >
              Building products <br className="hidden md:block"/>
              <span className="text-gradient">people love.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-neutral-400 font-light leading-relaxed"
            >
              IIT (ISM) Dhanbad pre-final year student. Specializing in data-backed product strategy, user-centric discovery, wireframing, and custom AI prototyping. Proven track record in national product cases.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a 
                href="#projects" 
                className="bg-white text-black hover:bg-neutral-200 transition-colors font-medium px-6 py-3 rounded-lg flex items-center gap-1.5"
              >
                View Case Studies
                <ChevronRight className="w-4 h-4" />
              </a>
              <a 
                href="#resume" 
                className="bg-neutral-950 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900 transition-all font-medium px-6 py-3 rounded-lg flex items-center gap-1.5"
              >
                Download Resume
                <Download className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Sunset Theme Visual Canvas component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <SunsetCanvas />
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 border-t border-neutral-900 grid md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-4">About Me</h2>
              <p className="text-sm text-neutral-500 font-light leading-relaxed">
                Product thinking, user empathy, and strategic prioritization mapped at the intersection of business and technology.
              </p>
            </div>
            <div className="relative group w-48 h-48 md:w-full md:max-w-[240px] aspect-square rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950/40 p-2 transition-all hover:border-orange-500/30 mx-auto md:mx-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <Image 
                src="/rakshit.png" 
                alt="Rakshit Raj" 
                width={240}
                height={240}
                className="w-full h-full object-cover rounded-xl filter grayscale contrast-[1.1] brightness-[0.9] hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
          <div className="md:col-span-2 space-y-6 text-neutral-400 font-light leading-relaxed">
            <p>
              I am a pre-final year student at <strong className="font-bold text-white">IIT (ISM) Dhanbad</strong> pursuing my B.Tech. My interest lies at the core of product management — identifying structural user friction, mapping customer journeys, and applying first-principles reasoning to design scalable features.
            </p>
            <p>
              I gain energy from building mockups on Figma, debating tech strategies, and solving complex business cases. I have delivered feature roadmaps for startups, structured pricing structures, and built 0-to-1 AI product specs.
            </p>
            
            {/* Achievement / Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
              <div className="p-4 bg-neutral-950 border border-neutral-900 rounded-xl">
                <span className="block text-2xl font-bold text-white mb-1">9.1</span>
                <span className="text-xs text-neutral-500 uppercase tracking-wider block">B.Tech GPA</span>
                <span className="text-[10px] text-neutral-600 block mt-1">IIT (ISM) Dhanbad</span>
              </div>
              <div className="p-4 bg-neutral-950 border border-neutral-900 rounded-xl">
                <span className="block text-2xl font-bold text-orange-400 mb-1">Top 4</span>
                <span className="text-xs text-neutral-500 uppercase tracking-wider block">Rank</span>
                <span className="text-[10px] text-neutral-600 block mt-1">ProdBlitz-3 (1300+ entries)</span>
              </div>
              <div className="p-4 bg-neutral-950 border border-neutral-900 rounded-xl col-span-2 md:col-span-1">
                <span className="block text-2xl font-bold text-orange-500 mb-1">3rd Place</span>
                <span className="text-xs text-neutral-500 uppercase tracking-wider block">Award</span>
                <span className="text-[10px] text-neutral-600 block mt-1">Product Sprints (Zepto Case)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 border-t border-neutral-900 space-y-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">Technical Skills & Tooling</h2>
            <p className="text-sm text-neutral-400 font-light">My product manager toolbox, technical foundation, and core capabilities.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* PM Card */}
            <div className="p-6 bg-neutral-950 border border-neutral-900 rounded-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500">
                  <Layout className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">Product Management</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Product Strategy", "User & Market Research", "Wireframing", "Roadmapping", "Feature Prioritization", "Agile & Scrum", "A/B Testing", "LTV & Churn Analytics", "RICE Prioritization"].map((skill) => (
                  <span key={skill} className="bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs px-2.5 py-1.5 rounded-md font-light">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tech Card */}
            <div className="p-6 bg-neutral-950 border border-neutral-900 rounded-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500">
                  <Code className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">Languages & Logic</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["SQL (Data Queries)", "Python (Data Analysis)", "C Programming", "HTML5", "Spreadsheets (Excel)", "API Integrations", "First-Principles Logic"].map((skill) => (
                  <span key={skill} className="bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs px-2.5 py-1.5 rounded-md font-light">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools Card */}
            <div className="p-6 bg-neutral-950 border border-neutral-900 rounded-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500">
                  <Settings className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">Tooling & Platforms</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Figma (Design/UI)", "Jira (Task Ops)", "Notion", "Whimsical (User Flows)", "Tableau", "Vercel", "Slack", "Google Analytics", "PowerBI"].map((skill) => (
                  <span key={skill} className="bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs px-2.5 py-1.5 rounded-md font-light">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 border-t border-neutral-900 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">Case Study Deep Dives</h2>
              <p className="text-sm text-neutral-400 font-light">Detailed product case studies built on actual research, user surveys, and data-backed impact estimation.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projectsData.map((project, idx) => (
              <motion.div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                whileHover={{ y: -4 }}
                className={`p-6 rounded-xl border border-neutral-900 bg-neutral-950/40 hover:border-orange-500/30 hover:bg-neutral-950/80 cursor-pointer transition-all flex flex-col justify-between min-h-[240px] relative group ${idx === 4 ? "md:col-span-2" : ""}`}
              >
                {/* Visual Top Glow on card hover */}
                <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-orange-500/0 group-hover:via-orange-500/40 to-transparent transition-all duration-300" />
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-orange-500 uppercase tracking-widest font-semibold bg-orange-500/5 border border-orange-500/10 px-2 py-0.5 rounded">
                      Case Study
                    </span>
                    {project.award && (
                      <span className="text-[10px] text-orange-400 bg-orange-400/10 px-2.5 py-0.5 rounded-full flex items-center gap-1 font-medium border border-orange-400/20">
                        <Award className="w-3 h-3" />
                        {project.award}
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-400 font-light leading-relaxed line-clamp-3">
                      {project.tagline}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-1.5 text-xs text-orange-500 font-medium pt-4 group-hover:gap-2.5 transition-all">
                  Read Full Pitch Deck & PRD Details
                  <ChevronRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 border-t border-neutral-900 space-y-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">Professional Experience</h2>
            <p className="text-sm text-neutral-400 font-light">Practical roles driving metric optimizations, stand-ups, and user surveys.</p>
          </div>
          
          <div className="relative border-l border-neutral-900 pl-6 space-y-8 ml-3">
            {/* Sherlock Studio */}
            <div className="relative">
              <span className="absolute -left-[31px] top-1.5 w-4.5 h-4.5 rounded-full border-4 border-[#030303] bg-orange-500 flex items-center justify-center"></span>
              <div className="space-y-2">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                  <h3 className="text-lg font-bold text-white">Product Management Intern</h3>
                  <span className="text-sm text-orange-400/90 font-light">Jul 2025 – Sept 2025</span>
                </div>
                <div className="flex items-center justify-between gap-1 text-xs text-neutral-500 font-light">
                  <span>Sherlock Studio</span>
                  <span>Remote</span>
                </div>
                <ul className="space-y-2 text-sm text-neutral-400 font-light list-disc list-inside leading-relaxed pl-1 pt-1">
                  <li>Delivered 3+ feature recommendations based on competitive analysis of RPG horror games to drive market differentiation.</li>
                  <li>Conducted cost and pricing structure audits on Steam, optimizing the product’s entry-level price specifically for the Indian audience.</li>
                  <li>Facilitated daily stand-up meetings with a 10+ member cross-functional team of designers, engineers, and audio artists to align project sprints.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Preview & Download Section */}
        <section id="resume" className="py-16 border-t border-neutral-900 space-y-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">Curriculum Vitae</h2>
            <p className="text-sm text-neutral-400 font-light">Preview and download the complete resume detailing achievements and coursework.</p>
          </div>

          <div className="p-6 bg-neutral-950 border border-neutral-900 rounded-xl grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-orange-500" />
                resume.pdf
              </h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                Highlights academic background at IIT (ISM) Dhanbad (9.1 GPA), Inter-IIT product case awards (3rd place), ProdBlitz-3 top 4, Sherlock Studio internship, and structured PM capabilities.
              </p>
            </div>
            <div>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-850 text-white font-medium py-3.5 px-5 rounded-lg flex items-center justify-center gap-2 transition-all"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 border-t border-neutral-900 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Get in Touch</h2>
            <p className="text-sm text-neutral-400 font-light">
              Always open to discussing product design, roadmap iterations, case competitions, or internship opportunities.
            </p>
          </div>

          <div className="max-w-md mx-auto p-6 bg-neutral-950 border border-neutral-900 rounded-xl space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-neutral-400 text-sm font-light">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span>Gurgaon, Haryana, India</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-400 text-sm font-light">
                <Mail className="w-4 h-4 text-orange-500" />
                <a href="mailto:rakshitraj1107@gmail.com" className="hover:text-white transition-colors">rakshitraj1107@gmail.com</a>
              </div>
            </div>

            <div className="flex gap-4 pt-2">
              <a
                href="https://linkedin.com/in/rakshit-raj-4796a2320"
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white transition-all py-3 px-4 rounded-lg flex items-center justify-center gap-2 text-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/FocusedFalco"
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white transition-all py-3 px-4 rounded-lg flex items-center justify-center gap-2 text-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </section>

      </div>

      {/* Project Details Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}
