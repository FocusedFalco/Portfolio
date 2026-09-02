"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  delayOffset?: number;
}

export default function WordsPullUp({
  text,
  className = "",
  showAsterisk = false,
  delayOffset = 0,
}: WordsPullUpProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  const words = text.split(" ");

  return (
    <h1 ref={containerRef} className={`flex flex-wrap ${className}`}>
      {words.map((word, index) => {
        const isLastWord = index === words.length - 1;
        return (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.6,
              delay: delayOffset + index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block relative mr-[0.2em] last:mr-0 select-none"
          >
            {word}
            {isLastWord && showAsterisk && (
              <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em] select-none leading-none">
                *
              </span>
            )}
          </motion.span>
        );
      })}
    </h1>
  );
}
