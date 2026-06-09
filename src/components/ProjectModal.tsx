"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Target, Award, ArrowUpRight, BarChart3, Users, Zap, FileText } from "lucide-react";

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
          className="relative w-full max-w-3xl h-full bg-[#080808] border-l border-neutral-900 shadow-2xl flex flex-col z-10 overflow-y-auto text-neutral-200"
        >
          {/* Top Sticky Header */}
          <div className="sticky top-0 z-20 bg-[#080808]/90 backdrop-blur-md border-b border-neutral-900 px-6 py-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {project.award && (
                <div className="flex items-center gap-1 bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs px-2.5 py-1 rounded-full font-medium">
                  <Award className="w-3.5 h-3.5" />
                  {project.award}
                </div>
              )}
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-neutral-900 text-neutral-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="px-6 py-8 flex-1 space-y-8 max-w-2xl mx-auto w-full">
            {/* Title & Tagline */}
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-3">
                {project.title}
              </h2>
              <p className="text-lg text-orange-400/90 font-light leading-relaxed">
                {project.tagline}
              </p>
            </div>

            <hr className="border-neutral-900" />

            {/* Objective & About */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-white flex items-center gap-2">
                <Target className="w-5 h-5 text-orange-500" />
                Project Objective & Overview
              </h3>
              <p className="text-neutral-400 leading-relaxed font-light">
                {project.about}
              </p>
            </div>

            {/* Market Sizing */}
            {project.marketSize && (
              <div className="space-y-4 bg-neutral-950/60 border border-neutral-900 p-5 rounded-xl">
                <h3 className="text-lg font-medium text-white flex items-center gap-2">
                  <Users className="w-5 h-5 text-orange-500" />
                  Market Opportunity & Sizing
                </h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-3 bg-neutral-900/40 rounded-lg border border-neutral-900/60">
                    <span className="block text-[10px] text-neutral-500 uppercase font-semibold">TAM</span>
                    <span className="text-lg md:text-xl font-bold text-white">{project.marketSize.tam}</span>
                  </div>
                  <div className="p-3 bg-neutral-900/40 rounded-lg border border-neutral-900/60">
                    <span className="block text-[10px] text-neutral-500 uppercase font-semibold">SAM</span>
                    <span className="text-lg md:text-xl font-bold text-orange-400">{project.marketSize.sam}</span>
                  </div>
                  <div className="p-3 bg-neutral-900/40 rounded-lg border border-neutral-900/60">
                    <span className="block text-[10px] text-neutral-500 uppercase font-semibold">SOM</span>
                    <span className="text-lg md:text-xl font-bold text-orange-500">{project.marketSize.som}</span>
                  </div>
                </div>
                <p className="text-[11px] text-neutral-500 text-right">
                  Source: {project.marketSize.source}
                </p>
              </div>
            )}

            {/* Problem Statement */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-white flex items-center gap-2">
                <X className="w-5 h-5 text-red-500" />
                Problem Statement & Impact
              </h3>
              <div className="bg-red-500/5 border border-red-500/10 p-5 rounded-xl space-y-3">
                <p className="font-medium text-red-300">
                  {project.problem.statement}
                </p>
                {project.problem.impact.length > 0 && (
                  <ul className="space-y-2 text-sm text-neutral-400 font-light list-disc list-inside">
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
                <Zap className="w-5 h-5 text-orange-500" />
                Proposed Product Solutions
              </h3>
              <div className="space-y-3">
                {project.solutions.map((sol, i) => (
                  <div key={i} className="p-4 bg-neutral-950/40 border border-neutral-900 rounded-xl space-y-1">
                    <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                      {sol.title}
                    </h4>
                    <p className="text-sm text-neutral-400 font-light pl-3.5 leading-relaxed">
                      {sol.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Success Metrics */}
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-white flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-orange-500" />
                Product Success Metrics
              </h3>
              <div className="bg-neutral-950/40 border border-neutral-900 p-5 rounded-xl space-y-4">
                <div>
                  <span className="block text-[10px] text-orange-400 uppercase font-bold mb-1">North Star Metric</span>
                  <p className="text-base font-semibold text-white">{project.metrics.nsm}</p>
                </div>
                <div className="space-y-2">
                  <span className="block text-[10px] text-neutral-500 uppercase font-bold">Secondary Metrics</span>
                  <div className="flex flex-wrap gap-2">
                    {project.metrics.secondary.map((met, i) => (
                      <span key={i} className="bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs px-3 py-1.5 rounded-full font-light">
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
                  <Calendar className="w-5 h-5 text-orange-500" />
                  Go-To-Market Strategy
                </h3>
                <div className="relative border-l border-neutral-900 pl-4 space-y-5 ml-2">
                  {project.gtm.map((phase, i) => (
                    <div key={i} className="relative">
                      {/* Dot */}
                      <span className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-orange-500 ring-4 ring-[#080808]"></span>
                      <p className="text-sm text-neutral-300 font-light leading-relaxed">
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
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-medium py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-orange-950/20"
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
