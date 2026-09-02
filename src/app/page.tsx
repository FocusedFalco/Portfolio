import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-[#E1E0CC] selection:bg-[#DEDBC8] selection:text-black font-sans antialiased overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
    </main>
  );
}
