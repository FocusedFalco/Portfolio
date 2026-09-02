"use client";

import { motion, Variants } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import WordsPullUpMultiStyle, { MultiStyleSegment } from "./WordsPullUpMultiStyle";

export default function FeaturesSection() {
  const headerSegments: MultiStyleSegment[] = [
    {
      text: "Studio-grade workflows for visionary creators.",
      className: "text-[#E1E0CC]",
    },
    {
      text: "Built for pure vision. Powered by art.",
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
    <section id="workshops" className="min-h-screen bg-black py-24 md:py-32 px-4 md:px-6 relative overflow-hidden">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px]">
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
              className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105"
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
            />
            <div className="bg-gradient-to-t from-black/90 via-black/40 to-transparent absolute inset-0 z-10 pointer-events-none" />
            <h3 className="text-xl sm:text-2xl font-medium text-[#E1E0CC] z-20 relative tracking-tight">
              Your creative canvas.
            </h3>
          </motion.div>

          {/* Card 2: Project Storyboard. (01) */}
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
                <img
                  src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85"
                  alt="Project Storyboard Icon"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover"
                />
                <span className="text-xs font-mono text-gray-500">01</span>
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-[#E1E0CC] mb-5 tracking-tight">
                Project Storyboard.
              </h3>

              <ul className="space-y-3">
                {[
                  "Visual shot sequencing & keyframes",
                  "Director notes & timeline sync",
                  "Automated frame breakdown",
                  "Multi-angle reference boards",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-400">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#programs"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-primary font-medium mt-6 group-hover:gap-2.5 transition-all duration-300"
            >
              <span>Learn more</span>
              <ArrowRight className="w-4 h-4 transform -rotate-45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          {/* Card 3: Smart Critiques. (02) */}
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
                <img
                  src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85"
                  alt="Smart Critiques Icon"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover"
                />
                <span className="text-xs font-mono text-gray-500">02</span>
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-[#E1E0CC] mb-5 tracking-tight">
                Smart Critiques.
              </h3>

              <ul className="space-y-3">
                {[
                  "AI color & composition analysis",
                  "Peer review & creative notes",
                  "Seamless NLE tool integrations",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-400">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#programs"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-primary font-medium mt-6 group-hover:gap-2.5 transition-all duration-300"
            >
              <span>Learn more</span>
              <ArrowRight className="w-4 h-4 transform -rotate-45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          {/* Card 4: Immersion Capsule. (03) */}
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
                <img
                  src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85"
                  alt="Immersion Capsule Icon"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded object-cover"
                />
                <span className="text-xs font-mono text-gray-500">03</span>
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-[#E1E0CC] mb-5 tracking-tight">
                Immersion Capsule.
              </h3>

              <ul className="space-y-3">
                {[
                  "Deep focus notification silencing",
                  "Generative ambient soundscapes",
                  "Production schedule syncing",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-400">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#programs"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-primary font-medium mt-6 group-hover:gap-2.5 transition-all duration-300"
            >
              <span>Learn more</span>
              <ArrowRight className="w-4 h-4 transform -rotate-45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
