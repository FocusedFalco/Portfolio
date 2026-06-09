"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { store, EventModel, ProfileModel } from "@/lib/store";

export default function RegisterPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  const [event, setEvent] = useState<EventModel | undefined>(undefined);
  const [profile, setProfile] = useState<ProfileModel | null>(null);

  // Form states
  const [warriorName, setWarriorName] = useState("");
  const [email, setEmail] = useState("");
  const [dojoName, setDojoName] = useState("");
  const [rank, setRank] = useState("");

  useEffect(() => {
    // Check if user is logged in
    const prof = store.getProfile();
    if (!prof) {
      router.replace("/auth/signin");
      return;
    }
    setProfile(prof);

    // Set defaults from profile
    setWarriorName(prof.warrior_name || "");
    setEmail(prof.email || "");
    setDojoName(prof.dojo_name || "");
    setRank(prof.current_rank || "");

    const ev = store.getEvent(id);
    setEvent(ev);

    // Parallax mouse tilt effect on lacquer container
    const handleMouseMove = (e: MouseEvent) => {
      const container = document.getElementById("lacquer-card");
      if (container) {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 60;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 60;
        container.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [id, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!event) return;

    // Update profile in store
    store.setAuth(warriorName, dojoName, email, rank, profile?.is_external || false);
    
    // Register for the event
    const success = store.registerEvent(event.id);
    if (success) {
      router.push(`/events/${event.id}/success`);
    } else {
      alert("This Dojo has reached its maximum capacity.");
    }
  };

  if (!profile || !event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fef9ed]">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent animate-spin mx-auto"></div>
          <p className="font-serif italic text-primary text-xl">Loading scroll details...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen flex-grow flex items-center justify-center pt-32 pb-20 px-margin-mobile relative overflow-hidden">
      <div className="enso-background"></div>
      
      <div className="max-w-2xl w-full perspective-[1000px] z-10">
        
        {/* Form Container */}
        <div
          id="lacquer-card"
          className="bg-surface-container-low lacquer-border p-8 md:p-12 relative overflow-hidden transition-all duration-300 ease-out"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Decorative Red Line */}
          <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
          
          <header className="mb-10 text-center">
            <span className="font-sans text-[10px] md:text-xs font-bold text-primary tracking-[0.25em] uppercase block mb-2">
              Event Registration
            </span>
            <h1 className="font-serif text-3xl md:text-4xl text-on-surface mb-2">
              {event.title}
            </h1>
            <p className="font-sans text-xs md:text-sm text-on-surface-variant italic">
              Enter the arena of tradition and skill.
            </p>
            <div className="w-16 h-[2px] bg-primary mx-auto mt-6"></div>
          </header>

          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Name Field */}
            <div className="relative group">
              <label 
                className="font-sans text-[10px] md:text-xs font-bold text-on-surface-variant block mb-1 uppercase tracking-widest transition-colors duration-300 group-focus-within:text-primary"
                htmlFor="full_name"
              >
                Warrior Name
              </label>
              <input
                id="full_name"
                type="text"
                required
                value={warriorName}
                onChange={(e) => setWarriorName(e.target.value)}
                placeholder="Miyamoto Musashi"
                className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 border-outline focus:border-primary focus:ring-0 px-0 py-2 font-sans text-sm md:text-base text-on-surface transition-colors placeholder:text-outline-variant outline-none"
              />
            </div>

            {/* Email Field */}
            <div className="relative group">
              <label 
                className="font-sans text-[10px] md:text-xs font-bold text-on-surface-variant block mb-1 uppercase tracking-widest transition-colors duration-300 group-focus-within:text-primary"
                htmlFor="email"
              >
                Digital Scroll (Email)
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="warrior@bushido.jp"
                className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 border-outline focus:border-primary focus:ring-0 px-0 py-2 font-sans text-sm md:text-base text-on-surface transition-colors placeholder:text-outline-variant outline-none"
              />
            </div>

            {/* Dojo/College Field */}
            <div className="relative group">
              <label 
                className="font-sans text-[10px] md:text-xs font-bold text-on-surface-variant block mb-1 uppercase tracking-widest transition-colors duration-300 group-focus-within:text-primary"
                htmlFor="dojo"
              >
                College / Dojo Name
              </label>
              <input
                id="dojo"
                type="text"
                required
                value={dojoName}
                onChange={(e) => setDojoName(e.target.value)}
                placeholder="The Tenshin Shoden Katori Shinto-ryu"
                className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 border-outline focus:border-primary focus:ring-0 px-0 py-2 font-sans text-sm md:text-base text-on-surface transition-colors placeholder:text-outline-variant outline-none"
              />
            </div>

            {/* Rank Dropdown */}
            <div className="relative group">
              <label 
                className="font-sans text-[10px] md:text-xs font-bold text-on-surface-variant block mb-1 uppercase tracking-widest transition-colors duration-300 group-focus-within:text-primary"
                htmlFor="rank"
              >
                Select Your Rank
              </label>
              <select
                id="rank"
                required
                value={rank}
                onChange={(e) => setRank(e.target.value)}
                className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b-2 border-outline focus:border-primary focus:ring-0 px-0 py-2 font-sans text-sm md:text-base text-on-surface transition-colors cursor-pointer outline-none"
              >
                <option value="" disabled>Choose your mastery...</option>
                <option value="Novice">Mudansha (Beginner)</option>
                <option value="Shodan (1st Degree)">Shodan (1st Degree)</option>
                <option value="Nidan (2nd Degree)">Nidan (2nd Degree)</option>
                <option value="Sandan (3rd Degree)">Sandan (3rd Degree)</option>
                <option value="Yondan+ (Mastery)">Yondan+ (Mastery)</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-primary text-on-primary py-4 font-sans text-sm font-bold tracking-[0.2em] uppercase hover:bg-primary-container transition-all duration-300 flex items-center justify-center gap-3 group border-none cursor-pointer active:scale-[0.98]"
              >
                Register for the Journey
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                  arrow_right_alt
                </span>
              </button>
            </div>
          </form>
          
          <div className="mt-8 text-center">
            <p className="font-sans text-[10px] md:text-xs text-on-surface-variant opacity-60">
              By registering, you commit to the Bushido code of conduct and ethics.
            </p>
          </div>
        </div>

        {/* Contextual Decorative Calligraphy Brush Element */}
        <div className="mt-12 flex justify-center opacity-20 pointer-events-none">
          <img
            alt="Japanese Calligraphy"
            className="w-32 h-auto"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBHhraao7Cu5UuYgl1VHXg1yEh5DOI_hTCdwz5pH8ZFwseQQyP0rB7NzZphb7SaCWpasO8g1-oJp2MiGE7SUv9eUhfMQKCvMxkcJdth3p2DR8f7mPb0J2eIaWdWpXpQEADdBrN4_6o4svaKWOtYVwR121wTPZyZxGBhX5a8hvkuVn_BMT9y24IK9wsPGODnzfv9bfFlqZj2EHZuZerFugaz4BS4WSQ-ziFZQmxjyPqZufZAuiWF7LaFVW1izzy5Q4nXzXzrilF-4w"
          />
        </div>
      </div>
    </main>
  );
}
