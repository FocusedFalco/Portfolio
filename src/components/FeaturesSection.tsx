"use client";

import { motion, Variants } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import WordsPullUpMultiStyle, { MultiStyleSegment } from "./WordsPullUpMultiStyle";

export default function FeaturesSection() {
  const headerSegments: MultiStyleSegment[] = [
    {
      text: "Data-driven workflows for high-impact product growth.",
      className: "text-[#E1E0CC]",
    },
    {
      text: "Built on analytical rigor. Driven by user empathy.",
      className: "text-gray-500 block w-full mt-1 sm:mt-2",
    },
  ];

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: i * 0.15,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <section id="skills" className="min-h-screen bg-black py-24 md:py-32 px-4 md:px-6 relative overflow-hidden">
      {/* Background Noise Texture */}
      <div className="bg-noise opacity-[0.15] absolute inset-0 pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Text */}
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <WordsPullUpMultiStyle
            segments={headerSegments}
            containerClassName="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight"
          />
        </div>

        {/* 4-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-3 md:gap-2 lg:h-[480px]">
          {/* Card 1: Video Card */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            className="relative rounded-2xl md:rounded-[1.5rem] overflow-hidden p-6 sm:p-8 flex flex-col justify-end h-[420px] lg:h-full border border-white/10 group shadow-2xl"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105 opacity-60"
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
            />
            <div className="bg-gradient-to-t from-black/90 via-black/40 to-transparent absolute inset-0 z-10 pointer-events-none" />
            <h3 className="text-xl sm:text-2xl font-medium text-[#E1E0CC] z-20 relative tracking-tight">
              First-principles product canvas.
            </h3>
          </motion.div>

          {/* Card 2: Product Strategy */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            className="bg-[#212121] rounded-2xl md:rounded-[1.5rem] p-6 sm:p-7 flex flex-col justify-between h-[420px] lg:h-full border border-white/5 relative group hover:border-white/20 transition-all duration-300 shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                  PM
                </div>
                <span className="text-xs font-mono text-gray-500">01</span>
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-[#E1E0CC] mb-5 tracking-tight">
                Product Strategy.
              </h3>

              <ul className="space-y-3">
                {[
                  "User Research & Journey Mapping",
                  "Wireframing & Roadmapping",
                  "Prioritization & RICE Model",
                  "A/B Testing & Churn Analytics",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-400">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-primary font-medium mt-6 group-hover:gap-2.5 transition-all duration-300"
            >
              <span>See case studies</span>
              <ArrowRight className="w-4 h-4 transform -rotate-45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          {/* Card 3: Languages & Analytics */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            className="bg-[#212121] rounded-2xl md:rounded-[1.5rem] p-6 sm:p-7 flex flex-col justify-between h-[420px] lg:h-full border border-white/5 relative group hover:border-white/20 transition-all duration-300 shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                  SQL
                </div>
                <span className="text-xs font-mono text-gray-500">02</span>
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-[#E1E0CC] mb-5 tracking-tight">
                Languages & Analytics.
              </h3>

              <ul className="space-y-3">
                {[
                  "SQL Data Extraction & Queries",
                  "Python Data Analytics",
                  "C Programming & Logic",
                  "API Integration & Spreadsheets",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-400">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-primary font-medium mt-6 group-hover:gap-2.5 transition-all duration-300"
            >
              <span>See case studies</span>
              <ArrowRight className="w-4 h-4 transform -rotate-45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          {/* Card 4: Tooling & Systems */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            className="bg-[#212121] rounded-2xl md:rounded-[1.5rem] p-6 sm:p-7 flex flex-col justify-between h-[420px] lg:h-full border border-white/5 relative group hover:border-white/20 transition-all duration-300 shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-lg">
                  UI
                </div>
                <span className="text-xs font-mono text-gray-500">03</span>
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-[#E1E0CC] mb-5 tracking-tight">
                Tooling & Systems.
              </h3>

              <ul className="space-y-3">
                {[
                  "Figma UI & Prototyping",
                  "Jira & Notion Workflows",
                  "Tableau & PowerBI Dashboards",
                  "Google Analytics & Vercel",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-400">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#projects"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-primary font-medium mt-6 group-hover:gap-2.5 transition-all duration-300"
            >
              <span>See case studies</span>
              <ArrowRight className="w-4 h-4 transform -rotate-45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
