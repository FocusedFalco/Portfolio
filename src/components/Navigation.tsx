"use client";

import React, { useEffect, useState } from "react";
import { store, ProfileModel } from "@/lib/store";
import { useRouter } from "next/navigation";

export default function Navigation() {
  const router = useRouter();
  const [profile, setProfile] = useState<ProfileModel | null>(null);

  useEffect(() => {
    setProfile(store.getProfile());
    const unsubscribe = store.subscribe(() => {
      setProfile(store.getProfile());
    });
    return () => unsubscribe();
  }, []);

  const handleAuthAction = () => {
    if (profile) {
      store.signout();
      router.push("/auth/signin");
    } else {
      router.push("/auth/signin");
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 bg-surface/90 backdrop-blur-md border-b-2 border-primary">
        <div 
          className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary italic cursor-pointer select-none"
          onClick={() => router.push("/dashboard")}
        >
          Bushido Events
        </div>
        <div className="flex items-center gap-6 md:gap-10">
          <span 
            className="font-label-md text-label-md text-primary font-bold border-b-2 border-primary cursor-pointer"
            onClick={() => router.push("/dashboard")}
          >
            Events
          </span>
          <span className="font-label-md text-label-md text-secondary hover:text-primary transition-colors cursor-pointer hidden sm:inline">
            About
          </span>
          {profile && (
            <span className="font-label-md text-label-md text-secondary hover:text-primary transition-colors hidden sm:inline">
              Rank: <span className="text-primary font-bold">{profile.current_rank}</span>
            </span>
          )}
          <button 
            onClick={handleAuthAction}
            className="px-6 py-2 bg-primary text-on-primary font-label-md text-label-md hover:bg-tertiary transition-colors active:scale-95 transition-all duration-300"
          >
            {profile ? "Sign Out" : "Sign In"}
          </button>
        </div>
      </nav>
      {/* The Crimson Horizon Line indicator separating header from content */}
      <div className="fixed top-[74px] md:top-[86px] left-0 w-full h-[2px] bg-primary/20 z-40"></div>
    </>
  );
}
