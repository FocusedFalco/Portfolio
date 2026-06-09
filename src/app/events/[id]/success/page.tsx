"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { store, EventModel, ProfileModel } from "@/lib/store";

export default function SuccessPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  const [event, setEvent] = useState<EventModel | undefined>(undefined);
  const [profile, setProfile] = useState<ProfileModel | null>(null);

  useEffect(() => {
    // Check if user is logged in
    const prof = store.getProfile();
    if (!prof) {
      router.replace("/auth/signin");
      return;
    }
    setProfile(prof);

    const ev = store.getEvent(id);
    setEvent(ev);

    // Parallax effect for the Fuji background image
    const handleMouseMove = (e: MouseEvent) => {
      const fuji = document.getElementById("bg-fuji-img");
      if (fuji) {
        const moveX = (e.clientX - window.innerWidth / 2) / 50;
        const moveY = (e.clientY - window.innerHeight / 2) / 50;
        fuji.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [id, router]);

  const handleReturn = () => {
    router.push("/dashboard");
  };

  if (!profile || !event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fef9ed]">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent animate-spin mx-auto"></div>
          <p className="font-serif italic text-primary text-xl">Confirming your rank...</p>
        </div>
      </div>
    );
  }

  // Recommendations data matching the spec and success.html
  const recommendations = [
    {
      id: "traditional-archery",
      title: "Traditional Archery",
      category: "Skill Mastery",
      description: "Master the art of Kyudo, where the focus is not the target, but the purity of the action.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNWXpzrguk_q8DJfWMqDTPK-wm8UweR9Isa00kWoGeJ4SdcLq1et6ngMGPpOX6aHmOlTrtZzzDaM2mnK0OyBa441eD_4rfuKNaXHwpSfvm1vjuNweat7zdjh8ygGC1l56MoPpkIuhH584UwlPieFr0OoPI_7WykcUS26_RNnq7toM46af-EODP5tP6DGJykAndQNr_j95Mv1FD6df6R5CHrG8E-f9XC0lQ2piK2nDd-erd6NfflqeowqRU2R2UaLsTjywByEOaszw",
      tag: "NEW"
    },
    {
      id: "bushido-philosophy-seminar",
      title: "Bushido Philosophy Seminar",
      category: "Wisdom",
      description: "An evening of discourse on the seven virtues of the warrior code and their modern application.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5SqP35oIHlKq29sVu4P9ZShtKrmXBZ_zNhuMbdpGSavfcRHgokmEYzbiqpnJFufziUSYHoCgogom3xUrozEGmbNBFqgrWQH4MRuhGDC7wPzout9ApIekwxMZYsqCgx0Y1srUOYDNnrbqFtUc0pNtYmTxJz98ZVnS9FSpUuS-ht-0VdBta7c6J0XCRBUOSZMm3UbfY6BMHjQKsOoeA-eQIkyiKWG_vKTLAK1mlSbjj8RIklDk649x0KnX9vXnK9QW2K_fH5S_dE5Q",
      tag: ""
    },
    {
      id: "tea-ceremony-mastery",
      title: "Tea Ceremony Mastery",
      category: "Meditation",
      description: "Learn the intricate ritual of tea preparation, a cornerstone of mindfulness and hospitality.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwT8H-_ChLfUiml3Qp27DTyEvGvgv8erKg6o_ZHNyIDD2i21DRGcw1rr6nz2O73zt1x4wOM9z0hnke8KclEcIVJFrpZsuiWuqe6rOrXkVY0YtEEe9vtD96kiXTun6-7KTSX0DNs6E43yKALuEoPbgyJ7pZXNhSo2wSkO6lDymmZGUP9QrfDisDKBYgTy16xpxdeeO0aJ2GK3tm4TqGm2Q9Zuq-xnkhES8Qyum5O5CG-OM2TTo6pBpptrj12ivI7ulnOvRASyOLPiY",
      tag: ""
    }
  ];

  return (
    <main className="pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative min-h-screen">
      
      {/* Background Illustration */}
      <div className="absolute inset-0 -z-10 flex items-end justify-center opacity-10 pointer-events-none">
        <img
          id="bg-fuji-img"
          alt="Mount Fuji"
          className="w-full max-w-4xl bg-fuji transition-transform duration-300 ease-out"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz-EzcFeluV7ClP7r1bLr_QDC9pOYH_kdx3FJhd7eE_vcrDwRhRhPUdIbQC0Q4EmtivCeyfS4hD0FogojoIrsS7EyNHeM0XdSulnfL_3mcDO2C8bwUvtj1nl8isB5d3KXrJxzv-rFQs0h70-I-2JoA4WcaD0ED4lMCv--swQJU7xVGnBo74dNU56n2GFjasQCMhumfSTOzR3UbroMcI07JYxDAxJKioaHgV-5pci_9IsNYvJlniHFbpBF8496ppLsQALfmwnMKqkE"
        />
      </div>

      {/* Success Message Section */}
      <section className="flex flex-col items-center text-center py-12 md:py-20">
        <div className="hanko-stamp mb-8">
          <span className="material-symbols-outlined text-primary text-6xl select-none" style={{ fontVariationSettings: "'FILL' 1" }}>
            verified
          </span>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl text-on-surface mb-4">
          Registration Confirmed
        </h1>
        <p className="font-sans text-sm md:text-base text-on-surface-variant max-w-2xl mb-10 leading-relaxed">
          Your path is set, Warrior. Your spirit has been acknowledged by the temple. Prepare your mind and body for the upcoming trial of <span className="text-primary font-bold">{event.title}</span>. Details have been dispatched via messenger.
        </p>
        <button
          onClick={handleReturn}
          className="group relative inline-flex items-center gap-3 px-8 py-4 border-2 border-primary bg-transparent text-primary font-sans text-sm font-bold hover:bg-primary hover:text-on-primary transition-all duration-300 cursor-pointer active:scale-95"
        >
          <span className="material-symbols-outlined">temple_hindu</span>
          Return to Village
        </button>
      </section>

      {/* Your Next Path Section (Recommendations) */}
      <section className="mt-24">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-[2px] w-12 bg-primary"></div>
          <h2 className="font-serif text-2xl md:text-3xl text-on-surface">
            Your Next Path
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recommendations.map((rec) => (
            <div
              key={rec.id}
              onClick={() => router.push("/dashboard")} // Explore Path goes to dashboard in this simulation
              className="group relative bg-surface border border-outline/10 p-1 flex flex-col overflow-hidden cursor-pointer hover:border-primary/20 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  alt={rec.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={rec.image}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="font-sans text-[10px] font-bold text-tertiary uppercase tracking-widest mb-2">
                  {rec.category}
                </span>
                <h3 className="font-serif text-xl md:text-2xl text-on-surface mb-3 group-hover:text-primary transition-colors">
                  {rec.title}
                </h3>
                <p className="font-sans text-xs md:text-sm text-on-surface-variant mb-6 leading-relaxed line-clamp-2">
                  {rec.description}
                </p>
                <div className="mt-auto flex justify-between items-center pt-4 border-t border-outline/10">
                  <span className="font-sans text-xs font-bold text-primary">
                    Explore Path
                  </span>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
              {rec.tag && (
                <div className="absolute top-4 right-4 bg-primary text-on-primary px-3 py-1 font-sans text-[10px] font-bold tracking-wider uppercase">
                  {rec.tag}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
