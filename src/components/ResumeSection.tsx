"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

export default function ResumeSection() {
  return (
    <section id="resume" className="bg-black py-20 px-4 md:px-6 relative">
      <div className="max-w-6xl mx-auto bg-[#101010] rounded-2xl md:rounded-[2.5rem] p-8 sm:p-12 md:p-14 border border-white/5 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 max-w-2xl">
          <span className="text-primary text-[10px] sm:text-xs tracking-widest uppercase block font-medium">
            CURRICULUM VITAE
          </span>
          <h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight flex items-center gap-3">
            <FileText className="w-6 h-6 text-[#E55943]" />
            Academic & Professional Profile
          </h3>
          <p className="text-sm text-gray-400 font-light leading-relaxed">
            Highlights academic background at <strong className="text-white">IIT (ISM) Dhanbad (9.1 GPA)</strong>, Inter-IIT product case awards (3rd place), ProdBlitz-3 top 4, Sherlock Studio internship, and structured PM capabilities.
          </p>
        </div>

        <div className="shrink-0 w-full md:w-auto">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="w-full md:w-auto bg-[#E55943] text-black hover:bg-[#CB4934] font-semibold text-sm uppercase py-4 px-8 rounded-full flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-red-950/30"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}
