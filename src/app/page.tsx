"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  Download,
  Code,
  Layout,
  FileText,
  Settings,
  ChevronRight,
  Menu,
  X
} from "lucide-react";
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
  },
  {
    id: "student-performance",
    title: "Student Academic Performance Analysis",
    tagline: "Investigating habits, lifestyle choices, and demographics associated with exam outcomes using SQL and Tableau.",
    objective: "Identify key factors that influence student academic performance and determine which habits, lifestyle choices, and demographic characteristics correlate with higher exam scores.",
    about: "A complete analytics workflow involving data extraction, cohort segmentation, and aggregation through PostgreSQL, followed by interactive exploratory dashboard visualization in Tableau Desktop to isolate student academic success drivers.",
    problem: {
      statement: "Educational institutions lack granular visibility into how lifestyle habits (sleep, screen time, employment) compound to impact exam scores, leading to generic student support strategies.",
      impact: [
        "Inefficient intervention: Academic advisors target static demographics (e.g. parental background) rather than addressable habits (e.g. sleep, attendance).",
        "Choice overload: Students struggle to identify key distractors (e.g. 'chronically online' status) from negligible factors (e.g. part-time jobs).",
        "Lack of data-backed resource allocation to prioritize student well-being programs."
      ],
      causes: [
        "Class participation bottlenecks (low attendance has direct negative correlation).",
        "Excessive screen time (distraction from social media and streaming).",
        "Poor physical well-being (lack of sleep, poor diet, low mental health ratings)."
      ]
    },
    solutions: [
      { title: "SQL Cohort Segmentation", desc: "Write PostgreSQL queries to isolate student groups based on overlapping wellness metrics (diet quality, mental health rating, sleep duration) to identify compound effects on GPA." },
      { title: "Distraction Threshold Mapping", desc: "Segment students by entertainment consumption (social media + Netflix hours) to find the threshold where screen time creates negative drag on study hours." },
      { title: "Attendance Stratification", desc: "Group student records into percentage-based attendance tiers, proving that high attendance is a dominant predictor of academic performance." },
      { title: "Interactive Tableau Dashboards", desc: "Construct visual dashboards featuring treemaps, bubble charts, and study-hour trendlines to enable academic administrators to filter cohorts dynamically." }
    ],
    metrics: {
      nsm: "Average Exam Score Improvement (%)",
      secondary: [
        "Attendance Impact Factor (1.05x higher scores)",
        "Well-being Impact Factor (1.20x higher scores)",
        "Screen Time Distraction Threshold (Hrs/Day)",
        "Parental Background Correlation (Negligible)"
      ]
    },
    gtm: [
      "Export SQL query datasets and design Tableau schemas for clean cross-group cohort filtering.",
      "Deploy dashboards to institutional research administrators to test data-backed intervention strategies.",
      "Establish weekly data pipelines syncing student records to monitor well-being, attendance, and exam scores in real-time."
    ],
    deckUrl: "/student_academic_performance_analysis.pdf",
    deckName: "Student Academic Performance Analysis.pdf"
  }
];

export default function PortfolioHome() {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070708] text-neutral-100 font-sans relative pb-24 selection:bg-white selection:text-black">
      
      {/* Boxed Hero Block with Black Border Stroke Frame */}
      <div className="p-4 md:p-6 bg-[#070708]">
        <div className="bg-[#E55943] text-[#0A0A0C] scanline-grid relative overflow-hidden pb-16 rounded-[24px] border-[4px] border-black">
          
          {/* Abstract background graphics (simple SVG path lines) */}
          <div className="absolute inset-0 pointer-events-none opacity-5 z-0">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M-10,50 Q25,80 60,30 T120,60" fill="none" stroke="#000" strokeWidth="8" />
              <path d="M-10,60 Q25,90 60,40 T120,70" fill="none" stroke="#000" strokeWidth="8" />
              <path d="M-10,70 Q25,100 60,50 T120,80" fill="none" stroke="#000" strokeWidth="8" />
            </svg>
          </div>

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            {/* Header / Nav */}
            <header className="py-6 flex items-center justify-between border-b border-black/15 mb-16 relative z-20">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold tracking-tight text-black font-sans">Rakshit Raj</span>
              </div>

              {/* Desktop Nav */}
              <nav className="hidden md:flex items-center gap-8 text-xs font-mono-tech tracking-wider uppercase text-black font-semibold">
                <a href="#about" className="hover:text-neutral-800 transition-colors">About</a>
                <a href="#skills" className="hover:text-neutral-800 transition-colors">Skills</a>
                <a href="#projects" className="hover:text-neutral-800 transition-colors">Projects</a>
                <a href="#resume" className="hover:text-neutral-800 transition-colors">Resume</a>
                <a href="#contact" className="bg-[#0A0A0C] text-white px-4 py-2 text-xs font-mono-tech uppercase btn-chamfer border border-black hover:bg-neutral-900 transition-all font-semibold">Get in Touch</a>
              </nav>

              {/* Mobile Hamburger Toggle */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 text-black hover:text-neutral-800 transition-colors"
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>

              {/* Mobile Nav Menu Dropdown */}
              <AnimatePresence>
                {mobileMenuOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 p-6 bg-[#0A0A0C] border border-neutral-900 rounded-xl flex flex-col gap-4 text-base text-neutral-400 font-light z-50 shadow-2xl">
                    <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors py-2 border-b border-neutral-900/50">About</a>
                    <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors py-2 border-b border-neutral-900/50">Skills</a>
                    <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors py-2 border-b border-neutral-900/50">Projects</a>
                    <a href="#resume" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors py-2 border-b border-neutral-900/50">Resume</a>
                    <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-white transition-colors py-2">Contact</a>
                  </div>
                )}
              </AnimatePresence>
            </header>

            {/* Unified Hero Section */}
            <div className="grid md:grid-cols-12 gap-8 items-center min-h-[420px]">
              {/* Hero Content (left side) */}
              <div className="md:col-span-8 space-y-6 relative z-10">
                <span className="inline-block text-[10px] font-mono-tech uppercase tracking-widest text-black bg-black/10 px-3 py-1.5 border border-black font-semibold">
                  Aspiring Product Manager
                </span>
                <h1 className="text-5xl sm:text-6xl md:text-[5.5rem] tracking-tight font-sans font-bold text-black leading-[0.9]">
                  Building products <br />
                  people love.
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-black font-medium leading-relaxed max-w-xl">
                  IIT (ISM) Dhanbad pre-final year student. Specializing in data-backed product strategy, user-centric discovery, wireframing, and custom AI prototyping. Proven track record in national product cases.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="#resume"
                    className="bg-[#0A0A0C] text-white hover:bg-neutral-900 transition-colors font-mono-tech text-xs uppercase px-6 py-3.5 btn-chamfer border border-black flex items-center gap-2 font-semibold"
                  >
                    Download Resume
                    <Download className="w-4 h-4" />
                  </a>
                  <a
                    href="#projects"
                    className="border-2 border-black hover:bg-black/10 text-black transition-all font-mono-tech text-xs uppercase px-6 py-3.5 btn-chamfer flex items-center gap-2 font-semibold"
                  >
                    Case Studies
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Interactive Sunset Strips (Right side background overlay) */}
              <div className="md:col-span-4 hidden md:flex justify-end items-center pointer-events-auto z-20">
                <div className="w-64 h-64 border-4 border-black rounded-3xl flex items-center justify-center p-4 relative bg-[#E55943]">
                  <div className="absolute inset-2 border border-dashed border-black/30 rounded-2xl" />
                  <div className="text-center space-y-2 z-10">
                    <div className="font-sans font-bold text-7xl text-black leading-none">PM</div>
                    <div className="font-mono-tech text-[10px] uppercase tracking-widest text-black font-semibold mt-1">[ 0-to-1 spec ]</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Horizontal status ribbon/ticker */}
      <div className="bg-[#0A0A0C] border-b border-neutral-900 py-3.5 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center text-[10px] sm:text-xs font-mono-tech tracking-widest uppercase text-neutral-400 gap-4 flex-wrap">
          <span>IIT Dhanbad</span>
          <span className="text-neutral-800">•</span>
          <span>Product Strategy</span>
          <span className="text-neutral-800">•</span>
          <span>Wireframing &amp; UX</span>
          <span className="text-neutral-800">•</span>
          <span>Data-Backed Decisions</span>
          <span className="text-neutral-800">•</span>
          <span>AI Prototyping</span>
        </div>
      </div>

      {/* Main Container for dark content */}
      {/* Main Container for dark content */}
      <div className="max-w-6xl mx-auto px-6 relative z-10 pt-16 space-y-28">
        
        {/* About Section */}
        <section id="about" className="space-y-12">
          <div className="flex justify-center border-t border-b border-neutral-900 py-6 mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 border border-neutral-900 text-[10px] font-mono-tech tracking-widest text-[#E55943] uppercase">
              [ &times; ] 01 / Who I Am
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-sans tracking-tight font-medium text-white leading-tight">
              Product thinking, user empathy, and strategic prioritization.
            </h2>
            <p className="text-sm text-neutral-500 max-w-xl mx-auto font-light leading-relaxed">
              Applying first-principles reasoning to design scalable features and resolve structural user friction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 border border-neutral-900 bg-[#070708] divide-y md:divide-y-0 md:divide-x divide-neutral-900">
            {/* Left: Clean Profile Photo */}
            <div className="p-8 flex items-center justify-center bg-[#09090b]/40 min-h-[300px]">
              <div className="relative group w-full max-w-[260px] aspect-square rounded-2xl overflow-hidden border border-neutral-800 bg-[#0A0A0C] p-2 transition-all duration-300 hover:border-[#E55943]/30">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#E55943]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <Image
                  src="/rakshit.png"
                  alt="Rakshit Raj"
                  width={260}
                  height={260}
                  className="w-full h-full object-cover rounded-xl filter grayscale contrast-[1.1] brightness-[0.95] hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            {/* Right: 2x2 grid of details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y divide-neutral-900 bg-[#070708]">
              {/* Cell 1: Bio Summary */}
              <div className="p-8 space-y-3 flex flex-col justify-center sm:col-span-2">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono-tech text-[#E55943] tracking-wider uppercase font-semibold">PROFILE SUMMARY</span>
                  <span className="text-[10px] font-mono-tech text-neutral-600">001 // BIO</span>
                </div>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  I am a pre-final year student at <strong className="font-semibold text-white">IIT (ISM) Dhanbad</strong> pursuing my B.Tech. My interest lies at the core of product management — identifying structural user friction, mapping customer journeys, and applying first-principles reasoning to design scalable features.
                </p>
              </div>

              {/* Cell 2: GPA */}
              <div className="p-8 space-y-3 flex flex-col justify-center border-t border-neutral-900">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono-tech text-neutral-500 uppercase font-semibold">ACADEMICS</span>
                  <span className="text-[10px] font-mono-tech text-neutral-600">002 // GPA</span>
                </div>
                <div>
                  <span className="block text-4xl text-white font-sans font-semibold mb-1">9.1</span>
                  <span className="text-xs text-neutral-300 font-medium block">B.Tech CGPA</span>
                  <span className="text-[10px] text-neutral-500 block">IIT (ISM) Dhanbad</span>
                </div>
              </div>

              {/* Cell 3: Rank */}
              <div className="p-8 space-y-3 flex flex-col justify-center border-t border-neutral-900">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono-tech text-neutral-500 uppercase font-semibold">COMPETITIONS</span>
                  <span className="text-[10px] font-mono-tech text-neutral-600">003 // RANK</span>
                </div>
                <div>
                  <span className="block text-4xl text-white font-sans font-semibold mb-1">Top 4</span>
                  <span className="text-xs text-neutral-300 font-medium block">ProdBlitz-3 Rank</span>
                  <span className="text-[10px] text-neutral-500 block">Out of 1,300+ entries</span>
                </div>
              </div>

              {/* Cell 4: Award */}
              <div className="p-8 space-y-3 flex flex-col justify-center border-t border-neutral-900 sm:col-span-2">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono-tech text-neutral-500 uppercase font-semibold">HONORS</span>
                  <span className="text-[10px] font-mono-tech text-neutral-600">004 // AWARD</span>
                </div>
                <div>
                  <span className="block text-4xl text-[#E55943] font-sans font-semibold mb-1">3rd Place</span>
                  <span className="text-xs text-neutral-300 font-medium block">IIT Product Sprints</span>
                  <span className="text-[10px] text-neutral-500 block">Zepto conversion optimization case</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="space-y-12">
          <div className="flex justify-center border-t border-b border-neutral-900 py-6 mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 border border-neutral-900 text-[10px] font-mono-tech tracking-widest text-[#E55943] uppercase">
              [ &times; ] 02 / Tooling
            </div>
          </div>
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-sans tracking-tight font-medium text-white leading-tight">
              A comprehensive PM toolkit for data and execution.
            </h2>
            <p className="text-sm text-neutral-500 max-w-xl mx-auto font-light leading-relaxed">
              My technical foundation, prioritization frameworks, and design applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border border-neutral-900 divide-y md:divide-y-0 md:divide-x divide-neutral-900 bg-[#070708]">
            {/* PM Card */}
            <div className="p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono-tech text-neutral-500 uppercase font-semibold">DISCIPLINE</span>
                  <span className="text-[10px] font-mono-tech text-neutral-600">[ 01 ]</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#E55943]/10 border border-[#E55943]/20 flex items-center justify-center text-[#E55943]">
                    <Layout className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-sans font-medium text-white">Product Management</h3>
                </div>
                <p className="text-xs text-neutral-500 font-light leading-relaxed">
                  Focusing on product discovery, user research, wireframing, and metric optimization.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-neutral-900/60">
                {["Product Strategy", "User Research", "Wireframing", "Roadmapping", "Prioritization", "Agile & Scrum", "A/B Testing", "Churn Analytics", "RICE Model"].map((skill) => (
                  <span key={skill} className="bg-[#09090b] border border-neutral-900 text-neutral-400 text-[10px] px-2.5 py-1.5 font-mono-code">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tech Card */}
            <div className="p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono-tech text-neutral-500 uppercase font-semibold">TECHNICAL</span>
                  <span className="text-[10px] font-mono-tech text-neutral-600">[ 02 ]</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#E55943]/10 border border-[#E55943]/20 flex items-center justify-center text-[#E55943]">
                    <Code className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-sans font-medium text-white">Languages &amp; Logic</h3>
                </div>
                <p className="text-xs text-neutral-500 font-light leading-relaxed">
                  Leveraging data extraction and coding logic to evaluate systems and draw insights.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-neutral-900/60">
                {["SQL (Data Queries)", "Python (Data)", "C Programming", "HTML5 &amp; CSS3", "Spreadsheets", "API Integration", "Logical Reasoning"].map((skill) => (
                  <span key={skill} className="bg-[#09090b] border border-neutral-900 text-neutral-400 text-[10px] px-2.5 py-1.5 font-mono-code">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools Card */}
            <div className="p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono-tech text-neutral-500 uppercase font-semibold">SYSTEMS</span>
                  <span className="text-[10px] font-mono-tech text-neutral-600">[ 03 ]</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#E55943]/10 border border-[#E55943]/20 flex items-center justify-center text-[#E55943]">
                    <Settings className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-sans font-medium text-white">Tooling &amp; Platforms</h3>
                </div>
                <p className="text-xs text-neutral-500 font-light leading-relaxed">
                  Using industry-standard applications to coordinate tasks and create interactive UI prototypes.
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-6 border-t border-neutral-900/60">
                {["Figma", "Jira", "Notion", "Whimsical", "Tableau", "Vercel", "Slack", "Google Analytics", "PowerBI"].map((skill) => (
                  <span key={skill} className="bg-[#09090b] border border-neutral-900 text-neutral-400 text-[10px] px-2.5 py-1.5 font-mono-code">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-12">
          <div className="flex justify-center border-t border-b border-neutral-900 py-6 mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 border border-neutral-900 text-[10px] font-mono-tech tracking-widest text-[#E55943] uppercase">
              [ &times; ] 03 / Deep Dives
            </div>
          </div>
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-sans tracking-tight font-medium text-white leading-tight">
              Case Study Archive
            </h2>
            <p className="text-sm text-neutral-500 max-w-xl mx-auto font-light leading-relaxed">
              Detailed product case studies built on actual research, user surveys, and data-backed impact estimation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 border border-neutral-900 divide-y divide-neutral-900 bg-[#070708] overflow-hidden">
            {projectsData.map((project, idx) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="p-8 hover:bg-[#09090b]/60 cursor-pointer transition-all flex flex-col justify-between min-h-[220px] relative group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] text-[#E55943] uppercase tracking-widest font-mono-tech">
                      00{idx+1} {"// CASE STUDY"}
                    </span>
                    {project.award && (
                      <span className="text-[9px] text-[#E55943] font-mono-tech uppercase">
                        [ {project.award} ]
                      </span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-sans font-medium text-white group-hover:text-[#E55943] transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-neutral-400 font-light leading-relaxed line-clamp-3">
                      {project.tagline}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-[10px] text-[#E55943] font-mono-tech uppercase pt-6 group-hover:gap-2.5 transition-all">
                  Read Full Pitch Deck &amp; PRD Details
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="space-y-12">
          <div className="flex justify-center border-t border-b border-neutral-900 py-6 mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 border border-neutral-900 text-[10px] font-mono-tech tracking-widest text-[#E55943] uppercase">
              [ &times; ] 04 / Experience
            </div>
          </div>
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-sans tracking-tight font-medium text-white leading-tight">
              Work History
            </h2>
            <p className="text-sm text-neutral-500 max-w-xl mx-auto font-light leading-relaxed">
              Practical roles driving metric optimizations, stand-ups, and user surveys.
            </p>
          </div>

          <div className="border border-neutral-900 divide-y divide-neutral-900 bg-[#070708]">
            {/* Sherlock Studio */}
            <div className="p-8 grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex justify-between md:flex-col md:justify-start gap-1">
                  <span className="text-[10px] font-mono-tech text-[#E55943] tracking-wider uppercase font-semibold">JUL 2025 – SEPT 2025</span>
                  <span className="text-[10px] font-mono-tech text-neutral-600 md:mt-1">[ 01 ] INTERNSHIP</span>
                </div>
                <h3 className="text-lg font-sans font-medium text-white">Product Management Intern</h3>
                <p className="text-xs text-neutral-500 font-light">Sherlock Studio (Remote)</p>
              </div>
              <div className="md:col-span-2">
                <ul className="space-y-3 text-xs text-neutral-400 font-light leading-relaxed list-none pl-0">
                  <li className="flex gap-3 items-start">
                    <span className="text-[#E55943] font-mono-tech select-none mt-0.5">&gt;</span>
                    <span>Delivered 3+ feature recommendations based on competitive analysis of RPG horror games to drive market differentiation.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[#E55943] font-mono-tech select-none mt-0.5">&gt;</span>
                    <span>Conducted cost and pricing structure audits on Steam, optimizing the product’s entry-level price specifically for the Indian audience.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-[#E55943] font-mono-tech select-none mt-0.5">&gt;</span>
                    <span>Facilitated daily stand-up meetings with a 10+ member cross-functional team of designers, engineers, and audio artists to align project sprints.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Preview & Download Section */}
        <section id="resume" className="space-y-12">
          <div className="flex justify-center border-t border-b border-neutral-900 py-6 mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 border border-neutral-900 text-[10px] font-mono-tech tracking-widest text-[#E55943] uppercase">
              [ &times; ] 05 / Profile
            </div>
          </div>
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-sans tracking-tight font-medium text-white leading-tight">
              Curriculum Vitae
            </h2>
            <p className="text-sm text-neutral-500 max-w-xl mx-auto font-light leading-relaxed">
              Preview and download the complete resume detailing achievements and coursework.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border border-neutral-900 divide-y md:divide-y-0 md:divide-x divide-neutral-900 bg-[#070708] p-8 items-center gap-6">
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-lg font-sans font-medium text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#E55943]" />
                Academic &amp; Professional Profile
              </h3>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Highlights academic background at IIT (ISM) Dhanbad (9.1 GPA), Inter-IIT product case awards (3rd place), ProdBlitz-3 top 4, Sherlock Studio internship, and structured PM capabilities.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="w-full max-w-[240px] bg-[#E55943] text-black hover:bg-[#CB4934] font-mono-tech text-xs uppercase py-3.5 px-5 btn-chamfer flex items-center justify-center gap-2 transition-all font-semibold"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-12">
          <div className="flex justify-center border-t border-b border-neutral-900 py-6 mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 border border-neutral-900 text-[10px] font-mono-tech tracking-widest text-[#E55943] uppercase">
              [ &times; ] 06 / The Terminal
            </div>
          </div>
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-sans tracking-tight font-medium text-white leading-tight">
              Get In Touch
            </h2>
            <p className="text-sm text-neutral-500 max-w-xl mx-auto font-light leading-relaxed">
              Always open to discussing product design, roadmap iterations, case competitions, or internship opportunities.
            </p>
          </div>

          <div className="max-w-md mx-auto border border-neutral-900 bg-[#070708] divide-y divide-neutral-900">
            <div className="p-8 space-y-4">
              <div className="flex items-center gap-3 text-neutral-400 text-xs font-light">
                <MapPin className="w-4 h-4 text-[#E55943]" />
                <span>Gurgaon, Haryana, India</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-400 text-xs font-light">
                <Mail className="w-4 h-4 text-[#E55943]" />
                <a href="mailto:rakshitraj1107@gmail.com" className="hover:text-white transition-colors">rakshitraj1107@gmail.com</a>
              </div>
            </div>

            <div className="p-8 grid grid-cols-2 divide-x divide-neutral-900 bg-[#09090b]/40">
              <a
                href="https://linkedin.com/in/rakshit-raj-4796a2320"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 text-xs text-neutral-400 hover:text-white font-mono-tech uppercase transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/FocusedFalco"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 text-xs text-neutral-400 hover:text-white font-mono-tech uppercase transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
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
