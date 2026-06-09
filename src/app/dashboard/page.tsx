"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { store, EventModel, ProfileModel } from "@/lib/store";

export default function DashboardPage() {
  const router = useRouter();
  const [events, setEvents] = useState<EventModel[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<EventModel[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isGridView, setIsGridView] = useState<boolean>(true);
  const [profile, setProfile] = useState<ProfileModel | null>(null);

  useEffect(() => {
    // Check if user is logged in, redirect if not
    const prof = store.getProfile();
    if (!prof) {
      router.replace("/auth/signin");
      return;
    }
    setProfile(prof);

    // Initial load
    setEvents(store.getEvents());
    setFilteredEvents(store.getEvents());

    // Subscribe to store updates
    const unsubscribe = store.subscribe(() => {
      const updated = store.getEvents();
      setEvents(updated);
      setProfile(store.getProfile());
    });

    return () => unsubscribe();
  }, [router]);

  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(
        events.filter((e) => selectedCategories.includes(e.category))
      );
    }
  }, [selectedCategories, events]);

  const handleCategoryToggle = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleReserve = (id: string) => {
    router.push(`/events/${id}`);
  };

  if (!profile) return null;

  return (
    <main className="pt-28 pb-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop bg-[#fef9ed]/10">
      
      {/* Hero Section */}
      <section className="relative w-full mb-16 overflow-hidden min-h-[460px] md:min-h-[500px] flex items-center bg-[#fef9ed] border border-primary/10">
        <div className="absolute inset-0 z-0">
          <img
            alt="A breathtaking landscape of a traditional Japanese temple surrounded by cherry blossoms and Mount Fuji in the background"
            className="w-full h-full object-cover grayscale-[30%] opacity-80"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKVkZWABHt1jL7BuwgIlGg2yDDWH_BGEZAHcbXcFyy9FgBtp6KklDEGrOugDLaSyQVKl3elr3izxkjGK2cpNbNwO55NZ7U58cfwQvM-fiDBdF2GX4cP8vvVQ4-lwzJIm6V-JEiAcT_mGSNZIRqG2E--QI1S2RLhmrVoReaVtmKus7bBPeJtivykTxH0ENKvb5u-miYmELGxnm__ai7ugcCYvZhCAuqQ3fBg8oMFXcIsxivsABsvZaQDuBBjmXnNBPK26Sar3tpsLQ"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#fef9ed] via-[#fef9ed]/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-xl pl-6 md:pl-12 py-8">
          <span className="inline-block font-sans text-xs font-bold text-primary tracking-widest mb-4">
            FEATURED EXPERIENCE
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-on-surface mb-6 leading-tight">
            The Season of <br />
            <span className="text-primary italic">Spirits</span>
          </h1>
          <p className="font-sans text-sm md:text-base text-on-surface-variant mb-8 leading-relaxed">
            An immersive night gallery exploring the folklore of the Edo period through digital calligraphy and live spirit-theatre.
          </p>
          <div className="flex gap-4">
            <button 
              onClick={() => handleReserve("kintsugi-workshop")}
              className="px-6 md:px-8 py-3 bg-primary text-on-primary font-sans text-sm font-bold hover:bg-tertiary transition-colors active:scale-95 duration-300"
            >
              Request Scroll
            </button>
            <button 
              onClick={() => handleReserve("kintsugi-workshop")}
              className="px-6 md:px-8 py-3 border border-on-surface text-on-surface font-sans text-sm font-bold hover:bg-on-surface hover:text-white transition-all active:scale-95 duration-300"
            >
              View Details
            </button>
          </div>
        </div>
      </section>

      {/* Main Grid Content */}
      <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
        
        {/* Sidebar Filters */}
        <aside className="w-full md:w-56 flex-shrink-0">
          <div className="sticky top-28 space-y-10">
            <div>
              <h3 className="font-serif text-2xl text-on-surface mb-6 border-b border-primary/20 pb-2">
                Filters
              </h3>
              <span className="font-sans text-xs font-bold text-on-surface-variant uppercase tracking-widest block mb-4">
                Categories
              </span>
              <ul className="space-y-4">
                {["Art & Calligraphy", "Martial Arts", "Cultural Rituals", "Zen Living"].map((category) => (
                  <li key={category}>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryToggle(category)}
                        className="form-checkbox w-4 h-4 text-primary border-outline focus:ring-0 rounded-none bg-transparent cursor-pointer"
                      />
                      <span className="font-sans text-sm text-on-surface group-hover:text-primary transition-colors select-none">
                        {category}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 border border-primary/10 bg-surface-container-low lacquer-border relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-primary"></div>
              <span className="font-serif text-2xl text-primary block mb-2 italic">
                {"Member's Dojo"}
              </span>
              <p className="font-sans text-xs text-on-surface-variant mb-6 leading-relaxed">
                Unlock exclusive access to Grandmaster scrolls and private views.
              </p>
              <button className="font-sans text-xs font-bold text-primary border-b border-primary uppercase hover:text-tertiary hover:border-tertiary transition-colors cursor-pointer bg-transparent border-t-0 border-l-0 border-r-0 pb-1">
                Join The Way
              </button>
            </div>
          </div>
        </aside>

        {/* Event List/Grid */}
        <section className="flex-grow">
          <div className="flex justify-between items-end mb-8">
            <h2 className="font-serif text-3xl md:text-4xl text-on-surface">
              Upcoming Gatherings
            </h2>
            <div className="flex gap-2">
              <button
                onClick={() => setIsGridView(true)}
                className={`p-2 transition-colors ${isGridView ? "text-primary" : "text-secondary hover:text-primary"}`}
                title="Grid view"
              >
                <span className="material-symbols-outlined">grid_view</span>
              </button>
              <button
                onClick={() => setIsGridView(false)}
                className={`p-2 transition-colors ${!isGridView ? "text-primary" : "text-secondary hover:text-primary"}`}
                title="List view"
              >
                <span className="material-symbols-outlined">list</span>
              </button>
            </div>
          </div>

          {filteredEvents.length === 0 ? (
            <div className="py-20 text-center border border-dashed border-outline-variant">
              <p className="font-serif italic text-xl text-secondary">
                No warrior paths found matching these filters.
              </p>
            </div>
          ) : (
            <div
              className={
                isGridView
                  ? "grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-12"
                  : "flex flex-col gap-8"
              }
            >
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className={`group relative bg-surface border border-outline/10 p-2 flex ${isGridView ? "flex-col" : "flex-col sm:flex-row gap-6"} overflow-hidden transition-all duration-300`}
                >
                  <div
                    className={`relative overflow-hidden bg-surface-container-high ${isGridView ? "aspect-[4/3] w-full" : "aspect-[4/3] w-full sm:w-60 flex-shrink-0"}`}
                  >
                    <img
                      alt={event.title}
                      className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      src={event.image}
                    />
                    {event.is_featured && (
                      <span className="absolute top-3 right-3 bg-primary text-white font-sans text-[10px] font-bold tracking-widest px-3 py-1 uppercase">
                        FEATURED
                      </span>
                    )}
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="font-sans text-[10px] font-bold text-tertiary uppercase tracking-widest">
                        {event.category}
                      </span>
                      <span className="font-sans text-xs text-secondary uppercase tracking-wider font-semibold">
                        {event.event_date.split(",")[0]}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl text-on-surface group-hover:text-primary transition-colors mb-3">
                      {event.title}
                    </h3>
                    <p className="font-sans text-xs md:text-sm text-on-surface-variant mb-6 leading-relaxed line-clamp-2">
                      {event.description}
                    </p>
                    
                    <div className="mt-auto pt-4 border-t border-outline/10 flex justify-between items-center">
                      <span className="font-sans text-base font-bold text-primary">
                        ¥{event.price_monetary.toLocaleString()}
                      </span>
                      <button
                        onClick={() => handleReserve(event.id)}
                        className="font-sans text-xs font-bold text-on-surface flex items-center gap-2 group-hover:translate-x-1 transition-transform cursor-pointer bg-transparent border-none"
                      >
                        Reserve{" "}
                        <span className="material-symbols-outlined text-sm">
                          arrow_forward
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
