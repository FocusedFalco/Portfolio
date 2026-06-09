"use client";

import { usePathname } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isPortfolio = pathname === "/";

  if (isPortfolio) {
    return (
      <body className="bg-background text-on-background font-sans antialiased">
        <div className="grain-overlay"></div>
        {children}
      </body>
    );
  }

  return (
    <body className="bg-[#fef9ed] text-[#1d1c15] selection:bg-[#8f0020] selection:text-white font-sans antialiased">
      <div className="grain-overlay"></div>
      <Navigation />
      {children}
      <Footer />
      
      {/* Global Calligraphy Decoration (Bottom Corner) */}
      <div className="fixed bottom-8 right-8 opacity-10 pointer-events-none hidden md:block z-0">
        <span className="text-[120px] font-serif italic select-none text-[#8f0020] leading-none">武士道</span>
      </div>
    </body>
  );
}
