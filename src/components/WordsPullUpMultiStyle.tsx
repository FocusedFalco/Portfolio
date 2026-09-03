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

  let wordCounter = 0;

  return (
    <div
      ref={containerRef}
      className={`flex flex-col items-center justify-center text-center w-full ${containerClassName}`}
    >
      {segments.map((segment, segIdx) => {
        const words = segment.text.trim().split(/\s+/);
        return (
          <div
            key={segIdx}
            className={`inline-flex flex-wrap justify-center items-center gap-x-[0.25em] gap-y-[0.1em] ${
              segment.className || ""
            }`}
          >
            {words.map((word, wIdx) => {
              const currentGlobalIndex = wordCounter++;
              return (
                <motion.span
                  key={wIdx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.6,
                    delay: delayOffset + currentGlobalIndex * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
