"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import WordsPullUpMultiStyle, { MultiStyleSegment } from "./WordsPullUpMultiStyle";
import { AnimatedLetter } from "./AnimatedLetter";

export default function AboutSection() {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const headingSegments: MultiStyleSegment[] = [
    { text: "I am Rakshit Raj,", className: "font-normal text-white" },
    { text: "an aspiring Product Manager", className: "italic font-serif text-primary" },
    {
      text: "pursuing B.Tech at IIT (ISM) Dhanbad.",
      className: "font-normal text-white",
    },
  ];

  const bodyText =
    "My interest lies at the core of product management — identifying structural user friction, mapping customer journeys, and applying first-principles reasoning to design scalable features. Over the last few years, I have earned 3rd Place at the Inter-IIT Product Competition and a Top 4 Rank in ProdBlitz-3 out of 1,300+ entries.";

  const characters = bodyText.split("");

  return (
    <section id="about" className="bg-black py-24 md:py-32 px-4 md:px-6 relative">
      <div className="bg-[#101010] rounded-2xl md:rounded-[2.5rem] p-8 sm:p-12 md:p-16 lg:p-20 max-w-6xl mx-auto text-center border border-white/5 relative overflow-hidden shadow-2xl">
        {/* Top small label */}
        <span className="text-primary text-[10px] sm:text-xs tracking-widest uppercase mb-8 block font-medium">
          PROFILE SUMMARY
        </span>

        {/* Main Heading with Multi-Style Pull-Up Animation */}
        <div className="mb-12 sm:mb-16 max-w-3xl mx-auto">
          <WordsPullUpMultiStyle
            segments={headingSegments}
            containerClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9] font-normal"
          />
        </div>

        {/* Scroll-Linked Body Paragraph Character Reveal */}
        <p
          ref={paragraphRef}
          className="text-[#DEDBC8] text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light mb-16"
        >
          {characters.map((char, index) => (
            <AnimatedLetter
              key={index}
              char={char}
              index={index}
              totalChars={characters.length}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </p>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-12 border-t border-white/5 text-left">
          <div className="p-6 rounded-xl bg-black/40 border border-white/5 space-y-1">
            <span className="text-3xl sm:text-4xl font-bold text-white block">IIT (ISM)</span>
            <span className="text-sm font-medium text-primary block">Dhanbad B.Tech</span>
            <span className="text-xs text-gray-400 block">Pre-final year student</span>
          </div>

          <div className="p-6 rounded-xl bg-black/40 border border-white/5 space-y-1">
            <span className="text-3xl sm:text-4xl font-bold text-white block">Top 4</span>
            <span className="text-sm font-medium text-primary block">ProdBlitz-3 Rank</span>
            <span className="text-xs text-gray-400 block">Out of 1,300+ entries</span>
          </div>

          <div className="p-6 rounded-xl bg-black/40 border border-white/5 space-y-1">
            <span className="text-3xl sm:text-4xl font-bold text-primary block">3rd Place</span>
            <span className="text-sm font-medium text-primary block">Inter-IIT Product Competition</span>
            <span className="text-xs text-gray-400 block">Zepto / Nykaa Optimization</span>
          </div>
        </div>
      </div>
    </section>
  );
}
