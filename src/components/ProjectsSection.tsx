"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import WordsPullUpMultiStyle, { MultiStyleSegment } from "./WordsPullUpMultiStyle";

export interface ProjectData {
  id: string;
  title: string;
  tagline: string;
  award?: string;
  objective: string;
  about: string;
  marketSize?: {
    tam: string;
    sam: string;
    som: string;
    source: string;
  };
  problem: {
    statement: string;
    impact: string[];
    causes: string[];
  };
  solutions: {
    title: string;
    desc: string;
  }[];
  metrics: {
    nsm: string;
    secondary: string[];
  };
  gtm: string[];
  deckUrl: string;
  deckName: string;
}

export const projectsData: ProjectData[] = [
  {
    id: "nykaa",
    title: "Nykaa Case Study",
    tagline: "Optimizing user retention and second-purchase conversion loops for beauty and personal care ecommerce.",
    award: "3rd Place (Inter-IIT Product Competition)",
    objective: "Increase second-purchase retention rate and reduce churn.",
    about: "Designed during the Inter-IIT Tech Meet, this product strategy evaluates Nykaa's repeat order funnel, identifying drop-off points after first-purchase delivery and introducing personalized retention discounts, smart buy curations, and in-app beauty routine widgets.",
    problem: {
      statement: "Nykaa experiences significant drop-offs after the first transaction, with users failing to return for repeat purchases.",
      impact: [
        "High Customer Acquisition Cost (CAC) without sustained repeat purchase payback.",
        "Underutilized loyalty programs and post-purchase engagement channels.",
        "Low user lifetime value (LTV) due to poor cross-selling and discovery."
      ],
      causes: [
        "Mass-market pricing threats from competitors like Purplle.",
        "Horizontal giants (Amazon) dominating in logistics speed and convenience.",
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
    title: "Student Academic Performance Analytics",
    tagline: "End-to-end data analytics using SQL & Tableau to analyze study habits, lifestyle choices, and demographics of 1,000 students.",
    award: "Data Analytics Case Study",
    objective: "Conduct exploratory data analysis (EDA), cohort segmentations, and correlation analysis to identify key drivers of student exam outcomes.",
    about: "A comprehensive data analytics project utilizing PostgreSQL for data extraction, joining, and aggregation, followed by Tableau Desktop dashboard construction to visualize academic performance patterns across attendance, sleep, screen time, and employment variables.",
    problem: {
      statement: "Academic institutions lack quantified, data-driven visibility into how addressable student habits (such as sleep and screen time) correlate with exam performance compared to static demographic traits.",
      impact: [
        "Inability to optimize academic intervention strategies due to undocumented habit correlations.",
        "Lack of quantified thresholds for student screen-time distraction versus productive study hours.",
        "Undifferentiated support programs that fail to prioritize addressable factors like classroom attendance."
      ],
      causes: [
        "Un-aggregated student databases with disparate lifestyle and academic variables.",
        "Absence of interactive cohort-filtering dashboards for institutional researchers.",
        "Unexplored relationships between wellness metrics (diet, mental health) and GPA outcomes."
      ]
    },
    solutions: [
      { title: "SQL Cohort Segmentation & Aggregation", desc: "Wrote complex PostgreSQL queries to clean, segment, and aggregate student records based on wellness indicators (diet, sleep, mental health) to isolate compound GPA effects." },
      { title: "Distraction Threshold Quantisation", desc: "Segmented and queried student records by combined social media and streaming hours to determine the point where entertainment consumption decreases exam scores." },
      { title: "Attendance Correlation Analysis", desc: "Grouped students into attendance percentage tiers, proving a dominant 1.05x score multiplier for high-attendance cohorts regardless of demographic factors." },
      { title: "Exploratory Tableau Dashboards", desc: "Built interactive Tableau dashboards featuring treemaps, bubble charts, and dual-axis trendlines to present findings dynamically to administrators." }
    ],
    metrics: {
      nsm: "Data Insight Actionability & Query Execution Speed",
      secondary: [
        "PostgreSQL Query Optimization",
        "Dashboard Interactive Filters",
        "Data Scope (1,000 Student Profiles)",
        "Variables Evaluated (15 distinct metrics)"
      ]
    },
    gtm: [],
    deckUrl: "/student_academic_performance_analysis.pdf",
    deckName: "Student Academic Performance Analysis.pdf"
  },
  {
    id: "zepto",
    title: "Zepto Quick-Commerce Conversion",
    tagline: "Optimizing checkout flow, reducing 10-minute order drop-offs, and introducing surge-demand micro-incentives.",
    award: "Quick-Commerce Case Study",
    objective: "Reduce cart abandonment rate during peak hours and improve repeat order frequency.",
    about: "Evaluates Zepto's checkout funnel during peak grocery hours, identifying price-sensitivity drop-offs at delivery fee calculation and proposing dynamic bundling, slot reservations, and instant cart recovery widgets.",
    problem: {
      statement: "Quick-commerce users experience high checkout drop-offs during peak surge pricing windows.",
      impact: [
        "Lost revenue during high-intent visits.",
        "Increased cart abandonment rate above 35% during peak hours.",
        "Customer migration to competing quick-commerce apps."
      ],
      causes: [
        "Unexpected surge fee additions at final payment step.",
        "Lack of transparent arrival estimates during inclement weather.",
        "Missing small-item add-on suggestions to bridge free delivery threshold."
      ]
    },
    solutions: [
      { title: "Dynamic Free Delivery Thresholds", desc: "Nudge users with small add-on items tailored to their basket to unlock free delivery automatically." },
      { title: "Cart Time-Reservation Lock", desc: "Reserve high-demand fresh produce and inventory for 5 minutes during the checkout step." },
      { title: "1-Click Reorder Widget", desc: "Introduce a smart home screen widget for 1-click reordering of daily essentials." }
    ],
    metrics: {
      nsm: "Cart-to-Order Conversion Rate (%)",
      secondary: [
        "Average Order Value (AOV)",
        "Repeat Order Frequency per Month",
        "Peak Surge Cart Abandonment Rate"
      ]
    },
    gtm: [
      "Roll out home screen 1-click reorder widget to top 10% frequent buyers.",
      "A/B test dynamic free delivery threshold vs flat surge fee model."
    ],
    deckUrl: "https://drive.google.com/file/d/10koRnmbVAKUTXin7hgXzokgG4_DdkHB0/view?usp=sharing",
    deckName: "Zepto Quick Commerce Case Study.pdf"
  },
  {
    id: "sherlock",
    title: "Sherlock Studio Workflow Redesign",
    tagline: "Redesigning creator onboarding, asset management, and collaborative review workflows during Sherlock Studio internship.",
    award: "Product Internship Case Study",
    objective: "Streamline creator asset upload latency and increase team review completion rates.",
    about: "Completed during Rakshit's internship at Sherlock Studio, this project redesigned the core creator onboarding flow and introduced real-time collaborative timestamp commenting for video editors and brand managers.",
    problem: {
      statement: "Independent video creators and brand partners suffered from disjointed feedback loops and unstructured media file organization.",
      impact: [
        "Delayed video publishing timelines across client campaigns.",
        "Extended revision cycles leading to team burnout.",
        "Lower creator retention on the platform."
      ],
      causes: [
        "No frame-accurate comment tagging on video timelines.",
        "Scattered feedback across email and WhatsApp threads.",
        "Complex media folder hierarchies causing lost assets."
      ]
    },
    solutions: [
      { title: "Frame-Accurate Video Commenting", desc: "Tag feedback directly on video timeline milliseconds for instant editor clarity." },
      { title: "One-Click Client Approval Links", desc: "Share secure passwordless review previews for instant brand sign-offs." },
      { title: "AI Media Tagging & Search", desc: "Auto-generate searchable tags for raw video clips to organize project assets." }
    ],
    metrics: {
      nsm: "Video Review Turnaround Time (Hours)",
      secondary: [
        "Creator Onboarding Completion Rate",
        "Revision Loop Count per Video",
        "Monthly Active Creators"
      ]
    },
    gtm: [
      "Launch beta trial with 50 video production agencies.",
      "Integrate Slack and WhatsApp notification hooks for real-time review alerts."
    ],
    deckUrl: "/Sherlock_Studio_Case_Study.pdf",
    deckName: "Sherlock Studio Case Study.pdf"
  }
];

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectData) => void;
}

export default function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const headerSegments: MultiStyleSegment[] = [
    { text: "Product Case Studies & PRDs.", className: "text-[#E1E0CC]" },
    {
      text: "Built on actual user research, data analytics, and impact estimation.",
      className: "text-gray-500 block w-full mt-1 sm:mt-2",
    },
  ];

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="projects" className="bg-black py-24 md:py-32 px-4 md:px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Navigation Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-3xl">
            <span className="text-primary text-[10px] sm:text-xs tracking-widest uppercase mb-4 block font-medium">
              CASE STUDY ARCHIVE ({projectsData.length} PROJECTS)
            </span>
            <WordsPullUpMultiStyle
              segments={headerSegments}
              containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight"
            />
          </div>

          {/* Slide Navigation Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all ${
                canScrollLeft
                  ? "bg-[#101010] text-primary hover:border-primary cursor-pointer hover:bg-primary/10"
                  : "bg-black/40 text-gray-600 cursor-not-allowed border-white/5"
              }`}
              aria-label="Previous Projects"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all ${
                canScrollRight
                  ? "bg-[#101010] text-primary hover:border-primary cursor-pointer hover:bg-primary/10"
                  : "bg-black/40 text-gray-600 cursor-not-allowed border-white/5"
              }`}
              aria-label="Next Projects"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Sliding Projects Horizontal Container */}
        <div
          ref={scrollContainerRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto scrollbar-none scroll-smooth snap-x snap-mandatory py-4 -mx-4 px-4 md:-mx-6 md:px-6"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => onSelectProject(project)}
              className="bg-[#101010] rounded-2xl md:rounded-[1.8rem] p-8 border border-white/5 hover:border-primary/40 flex flex-col justify-between cursor-pointer transition-all duration-300 group shadow-xl hover:-translate-y-1 shrink-0 w-[300px] sm:w-[350px] md:w-[380px] lg:w-[400px] snap-start"
            >
              <div className="space-y-5">
                {/* Header Tag + Award */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs text-primary uppercase tracking-widest font-medium">
                    00{idx + 1} {"// CASE STUDY"}
                  </span>
                  {project.award && (
                    <span className="text-[10px] sm:text-xs text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20 font-medium truncate max-w-[200px]">
                      {project.award}
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-2xl font-medium text-white group-hover:text-primary transition-colors mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 font-light leading-relaxed line-clamp-3">
                    {project.tagline}
                  </p>
                </div>
              </div>

              {/* Bottom CTA Link */}
              <div className="flex items-center gap-2 text-xs sm:text-sm text-primary font-medium pt-8 group-hover:gap-3 transition-all duration-300">
                <span>Read Pitch Deck &amp; PRD Details</span>
                <ChevronRight className="w-4 h-4 text-primary" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
