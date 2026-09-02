"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export interface MultiStyleSegment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: MultiStyleSegment[];
  containerClassName?: string;
  delayOffset?: number;
}

export default function WordsPullUpMultiStyle({
  segments,
  containerClassName = "",
  delayOffset = 0,
}: WordsPullUpMultiStyleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  const allWords: { word: string; className: string; globalIndex: number }[] = [];
  let counter = 0;

  segments.forEach((segment) => {
    const words = segment.text.trim().split(/\s+/);
    words.forEach((w) => {
      if (w) {
        allWords.push({
          word: w,
          className: segment.className || "",
          globalIndex: counter++,
        });
      }
    });
  });

  return (
    <div
      ref={containerRef}
      className={`inline-flex flex-wrap justify-center items-center gap-x-[0.25em] gap-y-[0.1em] ${containerClassName}`}
    >
      {allWords.map(({ word, className, globalIndex }) => (
        <motion.span
          key={globalIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.6,
            delay: delayOffset + globalIndex * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          className={`inline-block ${className}`}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}
