"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Target, Award, ArrowUpRight, BarChart3, Users, Zap, FileText, AlertCircle } from "lucide-react";

interface ProjectDetails {
  id: string;
  title: string;
  tagline: string;
  award?: string;
  objective: string;
  about: string;
  marketSize?: {
    tam: string;
    sam: string;
    som: string;
    source: string;
  };
  problem: {
    statement: string;
    impact: string[];
    causes: string[];
  };
  solutions: {
    title: string;
    desc: string;
  }[];
  metrics: {
    nsm: string;
    secondary: string[];
  };
  gtm: string[];
  deckUrl: string;
  deckName: string;
}

interface ProjectModalProps {
  project: ProjectDetails | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-end overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Drawer Panel */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="relative w-full max-w-3xl h-full bg-[#101010] border-l border-white/10 shadow-2xl flex flex-col z-10 overflow-y-auto text-[#E1E0CC]"
        >
          {/* Top Sticky Header */}
          <div className="sticky top-0 z-20 bg-[#101010]/95 backdrop-blur-md border-b border-white/10 py-5">
            <div className="max-w-2xl mx-auto w-full px-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                {project.award && (
                  <div className="flex items-center gap-1.5 bg-primary/10 border border-primary/30 text-primary text-xs px-3 py-1 rounded-full font-medium">
                    <Award className="w-3.5 h-3.5 text-primary" />
                    {project.award}
                  </div>
                )}
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors -mr-2"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Content */}
          <div className="px-6 py-8 flex-1 space-y-8 max-w-2xl mx-auto w-full">
            {/* Title & Tagline */}
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-3">
                {project.title}
              </h2>
              <p className="text-lg text-primary/90 font-light leading-relaxed">
                {project.tagline}
              </p>
            </div>

            <hr className="border-white/10" />

            {/* Objective & About */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-white flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Project Objective & Overview
              </h3>
              <p className="text-gray-300 leading-relaxed font-light">
                {project.about}
              </p>
            </div>

            {/* Market Sizing */}
            {project.marketSize && (
              <div className="space-y-4 bg-black/40 border border-white/10 p-5 rounded-xl">
                <h3 className="text-lg font-medium text-white flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Market Opportunity & Sizing
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 text-center">
                  <div className="p-3 bg-black/60 rounded-lg border border-white/5">
                    <span className="block text-[10px] text-gray-500 uppercase font-semibold">TAM</span>
                    <span className="text-lg md:text-xl font-bold text-white">{project.marketSize.tam}</span>
                  </div>
                  <div className="p-3 bg-black/60 rounded-lg border border-white/5">
                    <span className="block text-[10px] text-gray-500 uppercase font-semibold">SAM</span>
                    <span className="text-lg md:text-xl font-bold text-primary">{project.marketSize.sam}</span>
                  </div>
                  <div className="p-3 bg-black/60 rounded-lg border border-white/5">
                    <span className="block text-[10px] text-gray-500 uppercase font-semibold">SOM</span>
                    <span className="text-lg md:text-xl font-bold text-primary">{project.marketSize.som}</span>
                  </div>
                </div>
                <p className="text-[11px] text-gray-500 text-right">
                  Source: {project.marketSize.source}
                </p>
              </div>
            )}

            {/* Problem Statement */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-white flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-primary" />
                Problem Statement & Impact
              </h3>
              <div className="bg-primary/5 border border-primary/20 p-5 rounded-xl space-y-3">
                <p className="font-medium text-primary">
                  {project.problem.statement}
                </p>
                {project.problem.impact.length > 0 && (
                  <ul className="space-y-2 text-sm text-gray-300 font-light list-disc pl-5">
                    {project.problem.impact.map((imp, i) => (
                      <li key={i}>{imp}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Solutions & Core Features */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Proposed Product Solutions
              </h3>
              <div className="space-y-3">
                {project.solutions.map((sol, i) => (
                  <div key={i} className="p-4 bg-black/40 border border-white/10 rounded-xl space-y-1">
                    <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      {sol.title}
                    </h4>
                    <p className="text-sm text-gray-400 font-light pl-3.5 leading-relaxed">
                      {sol.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Success Metrics */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-white flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                Product Success Metrics
              </h3>
              <div className="bg-black/40 border border-white/10 p-5 rounded-xl space-y-4">
                <div>
                  <span className="block text-[10px] text-primary uppercase font-bold mb-1">North Star Metric</span>
                  <p className="text-base font-semibold text-white">{project.metrics.nsm}</p>
                </div>
                <div className="space-y-2">
                  <span className="block text-[10px] text-gray-500 uppercase font-bold">Secondary Metrics</span>
                  <div className="flex flex-wrap gap-2">
                    {project.metrics.secondary.map((met, i) => (
                      <span key={i} className="bg-black/60 border border-white/10 text-gray-300 text-xs px-3 py-1.5 rounded-full font-light">
                        {met}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Go-To-Market (GTM) Strategy */}
            {project.gtm.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-white flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Go-To-Market Strategy
                </h3>
                <div className="relative border-l border-white/10 pl-4 space-y-5 ml-2">
                  {project.gtm.map((phase, i) => (
                    <div key={i} className="relative">
                      {/* Dot */}
                      <span className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-[#101010]"></span>
                      <p className="text-sm text-gray-300 font-light leading-relaxed">
                        {phase}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Deck Download */}
            <div className="pt-4 pb-12">
              <a
                href={project.deckUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full bg-primary text-black hover:bg-primary/90 font-medium py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                <FileText className="w-5 h-5" />
                View Pitch Deck: {project.deckName}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
