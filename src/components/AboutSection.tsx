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
    { text: "I am Marcus Chen,", className: "font-normal text-white" },
    { text: "a self-taught director.", className: "italic font-serif text-primary" },
    {
      text: "I have skills in color grading, visual effects, and narrative design.",
      className: "font-normal text-white",
    },
  ];

  const bodyText =
    "Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals.";

  const characters = bodyText.split("");

  return (
    <section id="our-story" className="bg-black py-24 md:py-32 px-4 md:px-6 relative">
      <div className="bg-[#101010] rounded-2xl md:rounded-[2.5rem] p-8 sm:p-12 md:p-16 lg:p-20 max-w-6xl mx-auto text-center border border-white/5 relative overflow-hidden shadow-2xl">
        {/* Top small label */}
        <span className="text-primary text-[10px] sm:text-xs tracking-widest uppercase mb-8 block font-medium">
          Visual arts
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
          className="text-[#DEDBC8] text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-light"
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
      </div>
    </section>
  );
}
