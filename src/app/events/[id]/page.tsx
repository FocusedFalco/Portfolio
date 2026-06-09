"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { store, EventModel, ProfileModel } from "@/lib/store";

export default function EventDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  const [event, setEvent] = useState<EventModel | undefined>(undefined);
  const [isRegistered, setIsRegistered] = useState<boolean>(false);
  const [profile, setProfile] = useState<ProfileModel | null>(null);

  useEffect(() => {
    // Check if user is logged in
    const prof = store.getProfile();
    if (!prof) {
      router.replace("/auth/signin");
      return;
    }
    setProfile(prof);

    // Get event details
    const ev = store.getEvent(id);
    setEvent(ev);
    setIsRegistered(store.isRegistered(id));

    // Subscribe to store updates
    const unsubscribe = store.subscribe(() => {
      setEvent(store.getEvent(id));
      setIsRegistered(store.isRegistered(id));
      setProfile(store.getProfile());
    });

    return () => unsubscribe();
  }, [id, router]);

  const handleBooking = () => {
    if (isRegistered) {
      router.push(`/events/${id}/success`);
    } else {
      router.push(`/events/${id}/register`);
    }
  };

  if (!profile || !event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fef9ed]">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent animate-spin mx-auto"></div>
          <p className="font-serif italic text-primary text-xl">Calling the scrolls...</p>
        </div>
      </div>
    );
  }

  // Calculate percentage for progress meter
  const occupancyPercentage = ((event.max_capacity - event.current_occupancy) / event.max_capacity) * 100;

  return (
    <main className="pt-28 pb-20 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop bg-[#fef9ed]/10 relative">
      
      {/* Hero Section */}
      <section className="relative w-full h-[360px] md:h-[500px] overflow-hidden mb-12 border border-primary/5">
        <img
          alt={event.title}
          className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
          src={event.image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fef9ed] via-black/20 to-transparent"></div>
        <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 text-on-surface">
          <span className="bg-primary text-on-primary px-4 py-1 font-sans text-[10px] md:text-xs font-bold mb-4 inline-block tracking-[0.2em] uppercase">
            {event.category}
          </span>
          <h1 className="font-serif text-3xl md:text-5xl leading-tight font-bold">
            {event.title}
          </h1>
          <p className="font-serif text-lg md:text-xl italic text-primary mt-1 md:mt-2">
            {event.sub_title}
          </p>
        </div>
      </section>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-gutter">
        
        {/* Left Column: Details */}
        <div className="col-span-1 md:col-span-8 space-y-16">
          
          {/* Editorial Narrative */}
          <article className="space-y-6">
            <h2 className="font-serif text-2xl md:text-3xl border-b border-primary/20 inline-block pr-12 pb-2">
              The Path of Steel
            </h2>
            <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed first-letter:text-6xl first-letter:font-serif first-letter:text-primary first-letter:mr-3 first-letter:float-left first-letter:leading-none">
              {event.description}
            </p>
            <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed">
              Whether you are a seasoned practitioner or a curious observer, this path offers a rare glimpse into the disciplined world of ancient combat, aesthetic precision, and modern mindfulness. Under the guidance of our Dojo leaders, choose your actions wisely.
            </p>
          </article>

          {/* Itinerary */}
          {event.itinerary && event.itinerary.length > 0 && (
            <section className="space-y-8">
              <h2 className="font-serif text-2xl md:text-3xl">
                Event Itinerary
              </h2>
              <div className="space-y-0 ml-4 border-l border-primary/10">
                {event.itinerary.map((item, idx) => (
                  <div key={idx} className="relative pl-8 md:pl-12 pb-10 md:pb-12 last:pb-0">
                    <div className="absolute -left-[4.5px] top-1.5 w-2 h-2 bg-primary rounded-full"></div>
                    <span className="font-sans text-[10px] md:text-xs font-bold text-primary mb-1 block uppercase tracking-wider">
                      {item.time}
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl mb-2 text-on-surface">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Requirements */}
          {event.requirements && event.requirements.length > 0 && (
            <section className="p-6 md:p-8 border border-primary/10 bg-surface-container-low lacquer-border relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-primary"></div>
              <h2 className="font-serif text-2xl text-on-surface mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">priority_high</span>
                Requirements
              </h2>
              <ul className="space-y-4">
                {event.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-4 font-sans text-xs md:text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-primary text-base mt-0.5">
                      check_circle
                    </span>
                    {req}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Right Column: Sticky Sidebar */}
        <aside className="col-span-1 md:col-span-4">
          <div className="sticky top-28 space-y-6">
            <div className="border border-primary/10 p-6 md:p-8 bg-surface-container-low lacquer-border relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-primary"></div>
              
              <div className="space-y-6">
                <div>
                  <label className="font-sans text-[10px] md:text-xs font-bold text-secondary uppercase tracking-widest block mb-1">
                    Date & Time
                  </label>
                  <div className="font-serif text-xl md:text-2xl text-on-surface">
                    {event.event_date}
                  </div>
                  <div className="font-sans text-xs text-on-surface-variant">
                    Starts at 09:00 AM
                  </div>
                </div>

                <hr className="border-primary/5" />

                <div>
                  <label className="font-sans text-[10px] md:text-xs font-bold text-secondary uppercase tracking-widest block mb-1">
                    Location
                  </label>
                  <div className="font-serif text-xl md:text-2xl text-on-surface flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-lg">
                      location_on
                    </span>
                    {event.location_name}
                  </div>
                  <div className="font-sans text-xs text-on-surface-variant underline cursor-pointer hover:text-primary transition-colors">
                    View on Map
                  </div>
                </div>

                <hr className="border-primary/5" />

                <div>
                  <label className="font-sans text-[10px] md:text-xs font-bold text-secondary uppercase tracking-widest block mb-1">
                    Capacity
                  </label>
                  <div className="flex items-center justify-between">
                    <div className="font-serif text-xl md:text-2xl text-on-surface">
                      {event.max_capacity - event.current_occupancy} / {event.max_capacity} Spots Left
                    </div>
                    <span className="text-on-surface-variant font-sans text-[10px] font-bold tracking-widest uppercase opacity-60">
                      {event.current_occupancy >= event.max_capacity ? "FULL" : "OPEN"}
                    </span>
                  </div>
                  <div className="w-full bg-surface-container-high h-1 mt-3 overflow-hidden">
                    <div
                      className="bg-primary h-full transition-all duration-500"
                      style={{ width: `${Math.min(100, Math.max(0, occupancyPercentage))}%` }}
                    ></div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={handleBooking}
                    disabled={event.current_occupancy >= event.max_capacity && !isRegistered}
                    className={`w-full text-center py-4 font-serif text-lg md:text-xl font-bold tracking-tighter uppercase transition-all duration-300 border-none outline-none select-none ${
                      isRegistered
                        ? "bg-secondary text-white hover:bg-on-surface cursor-pointer"
                        : event.current_occupancy >= event.max_capacity
                        ? "bg-outline/20 text-on-surface/40 cursor-not-allowed"
                        : "bg-primary text-on-primary hover:bg-primary-container cursor-pointer active:scale-[0.98]"
                    }`}
                  >
                    {isRegistered ? "VIEW REGISTRATION" : event.current_occupancy >= event.max_capacity ? "DOJO FULL" : "SECURE YOUR SPOT"}
                  </button>
                  <p className="text-center font-sans text-[10px] md:text-xs font-bold text-secondary/60 mt-4 uppercase tracking-[0.3em]">
                    The Way awaits.
                  </p>
                </div>
              </div>
            </div>

            {/* Host Info */}
            <div className="flex items-center gap-4 p-4 border border-primary/5 bg-surface-container-low relative overflow-hidden">
              <img
                alt="Grandmaster Saitō"
                className="w-12 h-12 grayscale rounded-full border border-primary/10 object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8HkVU9wFm7klKYSSlsOW-ZkZyu_8NxtlOSKwvYDay26KpzJbyWY9mIPSlg48wMNG_LJ_vup0xAJwbizGIn8OLq5Xvyc-56U6JlXTPpVHnZGjp8-iWiWmGfmOdUJOtYgVLHEjbr963yKmhaZv1TaJ0hAq60wMEnMcZxaGluzcEZWVS8YQ4y-lGvBjEriHiEMAu2pC5RSvg81toj48r5VV3s848P5GS-Tb-ZguI0I2pGHI70svF5-I7WvzWQBwkYEAQwPIleHIj09A"
              />
              <div>
                <p className="font-sans text-[10px] font-bold text-secondary uppercase tracking-wider">
                  Hosted by
                </p>
                <p className="font-serif text-lg font-bold">
                  Grandmaster Saitō
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
