"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function SunsetCanvas() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Colors for the sunset strips from bottom-left (reds) to top-right (golds)
  const strips = [
    { from: "#DC2626", to: "#EF4444", delay: 0.1, height: "h-[300px] md:h-[400px]" }, // Red
    { from: "#DC2626", via: "#EA580C", to: "#F97316", delay: 0.15, height: "h-[350px] md:h-[480px]" }, // Red-Orange
    { from: "#EA580C", via: "#F97316", to: "#FB923C", delay: 0.2, height: "h-[400px] md:h-[550px]" }, // Orange
    { from: "#F97316", via: "#FDBA74", to: "#F59E0B", delay: 0.25, height: "h-[450px] md:h-[620px]" }, // Orange-Gold
    { from: "#F59E0B", via: "#FBBF24", to: "#FDE047", delay: 0.3, height: "h-[480px] md:h-[680px]" }, // Gold-Yellow
    { from: "#FBBF24", via: "#FDE047", to: "#FEF08A", delay: 0.35, height: "h-[420px] md:h-[600px]" }, // Yellow
    { from: "#F59E0B", via: "#F97316", to: "#EA580C", delay: 0.4, height: "h-[320px] md:h-[450px]" }, // Orange
  ];

  return (
    <div className="relative w-full h-[500px] md:h-[700px] overflow-hidden rounded-2xl bg-black border border-neutral-900 flex items-center justify-center select-none group cursor-pointer">
      {/* Dynamic Grid Background overlay */}
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none z-10"></div>
      
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-950/25 via-red-950/10 to-transparent pointer-events-none"></div>

      {/* Main Canvas Interactive Title (bottom-left) */}
      <div className="absolute bottom-12 left-10 md:left-16 z-30 text-left">
        <h3 className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-none mb-2">
          Sunsets
        </h3>
        <p className="text-sm md:text-base text-neutral-400 font-light">
          but there&apos;s a glowing horizon inside...
        </p>
      </div>

      {/* Interact instruction pill */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 bg-black/80 backdrop-blur-md border border-neutral-800 text-[10px] md:text-xs text-neutral-400 py-1.5 px-4 rounded-full pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity">
        Hover on the canvas to focus and interact
      </div>

      {/* Diagonal strips wrapper */}
      <div className="absolute right-0 top-[-100px] md:top-[-150px] w-full max-w-[800px] h-[130%] flex justify-center items-center gap-2 md:gap-4 pointer-events-auto z-20">
        {strips.map((strip, idx) => (
          <motion.div
            key={idx}
            className={`w-10 md:w-16 ${strip.height} rounded-full diagonal-strip relative shadow-2xl overflow-hidden`}
            style={{
              background: strip.via 
                ? `linear-gradient(to bottom, ${strip.from}, ${strip.via}, ${strip.to})`
                : `linear-gradient(to bottom, ${strip.from}, ${strip.to})`,
              boxShadow: hoveredIndex === idx
                ? `0 0 50px 10px ${strip.from}50, 0 10px 30px rgba(0,0,0,0.8)`
                : `0 0 20px 2px ${strip.from}20, 0 5px 15px rgba(0,0,0,0.5)`,
            }}
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 45,
              damping: 15,
              delay: strip.delay
            }}
            whileHover={{
              scale: 1.05,
              filter: "brightness(1.25)",
              y: -20,
            }}
            onHoverStart={() => setHoveredIndex(idx)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            {/* Glossy radial overlay inside strip */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/10 pointer-events-none"></div>
            {/* Ambient inner shimmer */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/10 to-white/0"
              animate={{
                y: ["-100%", "100%"]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
                delay: idx * 0.5
              }}
            />
          </motion.div>
        ))}
      </div>

    </div>
  );
}
