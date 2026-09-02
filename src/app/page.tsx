"use client";

import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProjectsSection, { ProjectData } from "@/components/ProjectsSection";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";
import ProjectModal from "@/components/ProjectModal";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <main className="min-h-screen bg-black text-[#E1E0CC] selection:bg-[#DEDBC8] selection:text-black font-sans antialiased overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ProjectsSection onSelectProject={(p) => setSelectedProject(p)} />
      <ResumeSection />
      <ContactSection />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}
