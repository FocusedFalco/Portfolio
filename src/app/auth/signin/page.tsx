"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { store } from "@/lib/store";

export default function SignInPage() {
  const router = useRouter();

  useEffect(() => {
    // Parallax mouse effect
    const handleMouseMove = (e: MouseEvent) => {
      const main = document.getElementById("auth-main");
      if (main) {
        const x = (e.clientX - window.innerWidth / 2) / 80;
        const y = (e.clientY - window.innerHeight / 2) / 80;
        main.style.backgroundPosition = `calc(50% + ${x}px) calc(50% + ${y}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleAuth = (isExternal: boolean) => {
    if (isExternal) {
      store.setAuth(
        "Miyamoto Musashi (Ally)",
        "The Tenshin Shoden Katori Shinto-ryu",
        "ally@shogun.jp",
        "Shodan (1st Degree)",
        true
      );
    } else {
      store.setAuth(
        "Minamoto no Yoshitsune",
        "Imperial College Dojo",
        "student@imperial.edu",
        "Mudansha (Beginner)",
        false
      );
    }
    router.replace("/dashboard");
  };

  return (
    <main
      id="auth-main"
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-margin-mobile md:px-margin-desktop py-24 transition-all duration-700 ease-out"
      style={{
        backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCPuf3aHMQv_Fi9CTSh8nByx1K1D_5uiEZUgYvxb1u9GHEyUYpAUQ1AipvPUkk2diXYeXp5Aj0XvrH42kEXfQGrx5ja9e98IsAiQiKJrlOrbQKO8KHO-EnoyIuzsqcES-S6TpiKzPStJej1n0AqSh7V2nbm1X18CVc_i_kcgpGvKzi5307CwgquCVlOndI7-yNmDHnNiGkDYH3hOTYX86IvRyyjKnCOyaekY8kB0uUw1N1ubLzV_Hn_r4789I6B97Tu3KtKVg5JDcE')`,
      }}
    >
      <div className="absolute inset-0 bg-black/10 z-0"></div>
      
      <div className="glass-card max-w-2xl w-full p-8 md:p-12 text-center space-y-10 relative z-10">
        <div className="space-y-4">
          <span className="font-sans text-[10px] md:text-xs font-bold text-primary tracking-[0.3em] uppercase block">
            Edo-Period Traditions x Modern Campus Life
          </span>
          <h1 className="font-serif text-4xl md:text-5xl leading-tight text-on-surface">
            Bushido Events
          </h1>
          <p className="font-sans text-sm md:text-base text-on-surface-variant max-w-md mx-auto">
            Welcome to the grand assembly of warriors. Choose your path to access the collegiate realm.
          </p>
        </div>

        <div className="flex flex-col gap-6 max-w-sm mx-auto">
          <button
            onClick={() => handleAuth(false)}
            className="group relative bg-primary hover:bg-primary-container transition-all duration-300 py-5 px-8 flex items-center justify-between border-none outline-none select-none text-left cursor-pointer"
          >
            <span className="font-serif text-xl md:text-2xl text-white">
              Sign In <span className="text-xs font-sans opacity-80 block md:inline md:ml-2 font-bold tracking-wider">(Imperial College)</span>
            </span>
            <span className="material-symbols-outlined text-white group-hover:translate-x-2 transition-transform duration-300">
              castle
            </span>
          </button>
          
          <button
            onClick={() => handleAuth(true)}
            className="group relative border-2 border-on-surface hover:bg-on-surface transition-all duration-300 py-5 px-8 flex items-center justify-between bg-transparent outline-none select-none text-left cursor-pointer"
          >
            <span className="font-serif text-xl md:text-2xl text-on-surface group-hover:text-white transition-colors duration-300">
              Pledge Allegiance <span className="text-xs font-sans opacity-80 block md:inline md:ml-2 font-bold tracking-wider">(External Allies)</span>
            </span>
            <span className="material-symbols-outlined text-on-surface group-hover:text-white group-hover:rotate-12 transition-all duration-300">
              workspace_premium
            </span>
          </button>
        </div>

        <div className="pt-8 border-t border-outline-variant/30 flex flex-col items-center gap-2">
          <span className="font-sans text-[10px] md:text-xs font-bold tracking-widest uppercase text-secondary">
            The Way of the Warrior
          </span>
          <p className="font-sans text-[10px] md:text-xs text-secondary/70">
            © 1603-2024 Bushido Events.
          </p>
        </div>
      </div>

      {/* Decorative vertical lines and scrolls indicators */}
      <div className="fixed bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 pointer-events-none">
        <div className="w-[2px] h-12 bg-gradient-to-b from-primary to-transparent animate-pulse"></div>
      </div>
    </main>
  );
}
