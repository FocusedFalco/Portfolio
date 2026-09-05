"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, FileText, Briefcase, GraduationCap, Trophy, Award, Code, UserCheck } from "lucide-react";

export default function ResumeSection() {
  type TabType = "experience" | "education" | "skills" | "leadership";
  const [activeTab, setActiveTab] = useState<TabType>("experience");

  const tabs: { id: TabType; label: string; icon: typeof Briefcase }[] = [
    { id: "experience", label: "Experience & Projects", icon: Briefcase },
    { id: "education", label: "Education & Achievements", icon: GraduationCap },
    { id: "skills", label: "Technical Skills & Tools", icon: Code },
    { id: "leadership", label: "Positions of Responsibility", icon: UserCheck },
  ];

  return (
    <section id="resume" className="bg-black py-24 md:py-32 px-4 md:px-6 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="bg-[#101010] rounded-2xl md:rounded-[2.5rem] p-8 sm:p-12 md:p-14 border border-white/5 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-left">
            <span className="text-primary text-[10px] sm:text-xs tracking-widest uppercase block font-medium">
              OFFICIAL CURRICULUM VITAE
            </span>
            <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight flex items-center gap-3">
              <FileText className="w-6 h-6 text-primary" />
              Rakshit Raj — Resume &amp; Qualifications
            </h3>
            <p className="text-sm text-gray-300 font-light leading-relaxed">
              B.Tech student at <strong className="text-white font-semibold">IIT (ISM) Dhanbad</strong>. Product Management Intern at Sherlock Studio, 3rd Place Inter-IIT Product Competition, and Top 4 ProdBlitz-3 finalist.
            </p>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="w-full md:w-auto bg-primary text-black hover:bg-primary/90 font-medium text-sm uppercase py-4 px-8 rounded-full flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:scale-105"
            >
              <Download className="w-4 h-4" />
              <span>Download Official Resume (PDF)</span>
            </a>
          </div>
        </div>

        {/* Interactive Resume View Container */}
        <div className="bg-[#101010] rounded-2xl md:rounded-[2rem] border border-white/5 p-6 sm:p-10 shadow-2xl space-y-8">
          {/* Tab Navigation Controls */}
          <div className="flex flex-wrap items-center gap-2 border-b border-white/5 pb-4">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                    isActive
                      ? "bg-primary text-black shadow-md"
                      : "bg-black/40 text-gray-400 hover:text-white border border-white/5"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          <div className="min-h-[380px]">
            {/* Tab 1: Experience & Projects */}
            {activeTab === "experience" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-8 text-left"
              >
                {/* Work Experience */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <div>
                      <h4 className="text-xl font-medium text-white">Sherlock Studio</h4>
                      <p className="text-xs text-primary font-medium">Product Management Intern (Remote)</p>
                    </div>
                    <span className="text-xs text-gray-500 font-mono">Jul 2025 – Sept 2025</span>
                  </div>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300 font-light list-disc pl-5 leading-relaxed">
                    <li>
                      Benchmarked <strong>10+ horror RPGs</strong> and analyzed player expectations to identify product gaps, strengthening game differentiation through <strong>3 roadmap feature recommendations</strong>.
                    </li>
                    <li>
                      Evaluated pricing across <strong>20+ comparable Steam titles</strong> to define an India-focused launch strategy, enabling data-backed pricing decisions for market entry.
                    </li>
                    <li>
                      Coordinated daily stand-ups across a <strong>10-member cross-functional team</strong> of designers, developers, and sound artists to improve sprint alignment and milestone execution.
                    </li>
                  </ul>
                </div>

                {/* Resume Highlights Projects */}
                <div className="space-y-6 pt-4">
                  <h4 className="text-lg font-medium text-white flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-primary" />
                    Key Featured Case Competitions
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Zepto */}
                    <div className="p-5 rounded-xl bg-black/40 border border-white/5 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-primary font-mono uppercase font-semibold">
                          Zepto | Inter IIT Product Competition
                        </span>
                        <span className="text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
                          3rd Place
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                        Diagnosed a 10% drop in Search-to-Add-to-Cart conversion (3.6–3.8 Cr/day leakage). Proposed <strong>ZeptoReserve</strong>, urgency cues, and fairness stock allocation to recover <strong>72–90 Cr monthly revenue</strong>.
                      </p>
                    </div>

                    {/* CareerPath AI */}
                    <div className="p-5 rounded-xl bg-black/40 border border-white/5 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-primary font-mono uppercase font-semibold">
                          CareerPath AI | ProdBlitz-3 Competition
                        </span>
                        <span className="text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20">
                          Top 4 Rank
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                        Validated an AI career guidance platform identifying a <strong>$548B+ market opportunity</strong>. Designed GTM roadmap and monetization model targeting 50,000 users and $500K MRR.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tab 2: Education & Achievements */}
            {activeTab === "education" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-8 text-left"
              >
                {/* Academic Degree */}
                <div className="p-6 rounded-xl bg-black/40 border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-xs text-primary uppercase tracking-widest font-mono font-medium">
                      INSTITUTION &amp; DEGREE
                    </span>
                    <h4 className="text-xl font-medium text-white">
                      Indian Institute of Technology (Indian School of Mines), Dhanbad
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-300 font-light">
                      Bachelor of Technology in Mineral and Metallurgical Engineering
                    </p>
                  </div>
                  <div className="text-left md:text-right shrink-0">
                    <span className="text-2xl font-bold text-primary block">GPA: 9.10 / 10</span>
                    <span className="text-xs text-gray-400 font-mono">Expected May 2028 | Dhanbad, Jharkhand</span>
                  </div>
                </div>

                {/* National Competitions & Honors */}
                <div className="space-y-4">
                  <h4 className="text-lg font-medium text-white flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    National Competitions &amp; Achievements
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 rounded-xl bg-black/40 border border-white/5 space-y-2">
                      <span className="text-xs text-primary font-mono block">NATIONAL AWARD — 3RD PLACE</span>
                      <h5 className="text-base font-semibold text-white">The Product Sprints Competition</h5>
                      <p className="text-xs text-gray-300 font-light leading-relaxed">
                        Secured 3rd position out of 60+ submissions across 5 IITs in a national product case study challenge.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-black/40 border border-white/5 space-y-2">
                      <span className="text-xs text-primary font-mono block">NATIONAL FINALIST — TOP 4 RANK</span>
                      <h5 className="text-base font-semibold text-white">ProdBlitz-3 Competition</h5>
                      <p className="text-xs text-gray-300 font-light leading-relaxed">
                        Ranked in Top 4 among 1,300+ participants in a flagship national product competition hosted by IIT (ISM) Dhanbad.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tab 3: Technical Skills & Tools */}
            {activeTab === "skills" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6 text-left"
              >
                {/* Languages */}
                <div className="space-y-3">
                  <span className="text-xs text-primary font-mono uppercase tracking-widest block font-medium">
                    PROGRAMMING LANGUAGES
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {["C", "SQL", "Python"].map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-black/60 border border-white/10 text-white text-xs sm:text-sm px-4 py-2 rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Software & Analytics Stack */}
                <div className="space-y-3">
                  <span className="text-xs text-primary font-mono uppercase tracking-widest block font-medium">
                    SOFTWARE &amp; ANALYTICS STACK
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Figma",
                      "Jira",
                      "Mixpanel",
                      "Notion",
                      "PowerBI",
                      "Tableau",
                      "Antigravity",
                      "Stitch",
                      "Excel",
                      "Slack",
                      "Whimsical",
                      "Canva",
                    ].map((tool, idx) => (
                      <span
                        key={idx}
                        className="bg-black/60 border border-white/10 text-gray-300 text-xs sm:text-sm px-3.5 py-1.5 rounded-full font-light"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Core PM Competencies */}
                <div className="space-y-3">
                  <span className="text-xs text-primary font-mono uppercase tracking-widest block font-medium">
                    CORE PRODUCT MANAGEMENT COMPETENCIES
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Product Discovery",
                      "Wireframing & Prototyping",
                      "Agile & Scrum Methodologies",
                      "Product Design",
                      "Data Analytics",
                      "Competitive Benchmarking",
                      "Market Research",
                      "Roadmap Development",
                      "PRD Writing",
                      "GTM Strategy",
                      "Product Lifecycle Management",
                    ].map((comp, idx) => (
                      <span
                        key={idx}
                        className="bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm px-3.5 py-1.5 rounded-full font-medium"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tab 4: Positions of Responsibility */}
            {activeTab === "leadership" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left"
              >
                <div className="p-5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                  <span className="text-xs text-primary font-mono block">DEPARTMENT LEADERSHIP</span>
                  <h5 className="text-base font-semibold text-white">Student Internship Representative</h5>
                  <p className="text-xs text-gray-400 font-light">
                    FMME Department for B.Tech 2024–2028 Batch at IIT (ISM) Dhanbad.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                  <span className="text-xs text-primary font-mono block">SOCIETY HEAD</span>
                  <h5 className="text-base font-semibold text-white">Outreach Division Head</h5>
                  <p className="text-xs text-gray-400 font-light">
                    METAFUMIN — Official Mineral and Metallurgical Society of IIT (ISM) Dhanbad.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                  <span className="text-xs text-primary font-mono block">CLUB EXECUTIVE</span>
                  <h5 className="text-base font-semibold text-white">Vice President Education</h5>
                  <p className="text-xs text-gray-400 font-light">
                    Mic. Drop — Official Public Speaking Club of IIT Dhanbad.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                  <span className="text-xs text-primary font-mono block">PRODUCT MANAGEMENT CLUB</span>
                  <h5 className="text-base font-semibold text-white">Senior Associate</h5>
                  <p className="text-xs text-gray-400 font-light">
                    Product Management Club of IIT (ISM) Dhanbad.
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
