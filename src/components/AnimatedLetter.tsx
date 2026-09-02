"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

interface AnimatedLetterProps {
  char: string;
  index: number;
  totalChars: number;
  scrollYProgress: MotionValue<number>;
}

export function AnimatedLetter({
  char,
  index,
  totalChars,
  scrollYProgress,
}: AnimatedLetterProps) {
  const charProgress = index / totalChars;
  const start = Math.max(0, charProgress - 0.1);
  const end = Math.min(1, charProgress + 0.05);

  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

  return <motion.span style={{ opacity }}>{char}</motion.span>;
}
