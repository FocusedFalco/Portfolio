"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import WordsPullUp from "./WordsPullUp";

export default function HeroSection() {
  const navItems = [
    "Our story",
    "Collective",
    "Workshops",
    "Programs",
    "Inquiries",
  ];

  return (
    <section className="h-screen w-full p-4 md:p-6 bg-black relative">
      <div className="relative h-full w-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-black flex flex-col justify-between">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
        />

        {/* Noise Overlay */}
        <div className="noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none absolute inset-0 z-10" />

        {/* Gradient Overlay */}
        <div className="bg-gradient-to-b from-black/30 via-transparent to-black/60 absolute inset-0 pointer-events-none z-10" />

        {/* Navbar hanging pill */}
        <nav className="absolute top-0 left-1/2 -translate-x-1/2 z-30">
          <div className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14 shadow-2xl border-b border-x border-white/5">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-[10px] sm:text-xs md:text-sm transition-colors duration-200 font-medium tracking-wide whitespace-nowrap"
                style={{ color: "rgba(225, 224, 204, 0.8)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#E1E0CC")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(225, 224, 204, 0.8)")}
              >
                {item}
              </a>
            ))}
          </div>
        </nav>

        {/* Hero Content (Bottom Aligned) */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-12 z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            {/* Left 8 columns: Giant Prisma Heading */}
            <div className="lg:col-span-8 relative">
              <WordsPullUp
                text="Prisma"
                showAsterisk={true}
                className="text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw] font-medium leading-[0.85] tracking-[-0.07em]"
              />
            </div>

            {/* Right 4 columns: Paragraph + CTA button */}
            <div className="lg:col-span-4 flex flex-col gap-6 items-start justify-end mb-2 md:mb-4 lg:mb-6">
              {/* Description Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-primary/70 text-xs sm:text-sm md:text-base leading-[1.2] font-normal max-w-md"
              >
                Prisma is a worldwide network of visual artists, filmmakers and
                storytellers bound not by place, status or labels but by passion
                and hunger to unlock potential through our unique perspectives.
              </motion.p>

              {/* CTA Button */}
              <motion.a
                href="#collective"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-primary rounded-full px-5 py-2.5 sm:px-6 sm:py-3 flex items-center gap-2 hover:gap-3 group cursor-pointer transition-all duration-300 shadow-lg"
              >
                <span className="text-black font-medium text-sm sm:text-base tracking-tight">
                  Join the lab
                </span>
                <div className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <ArrowRight className="text-[#E1E0CC] w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
