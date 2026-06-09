"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-16 px-margin-mobile md:px-margin-desktop flex flex-col items-center gap-8 border-t border-primary/10 bg-[#fef9ed]/95 relative z-10">
      <div className="font-display-lg text-3xl text-primary italic select-none">
        Bushido Events
      </div>
      <div className="flex gap-8 md:gap-10 text-center flex-wrap justify-center">
        <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors tracking-widest uppercase text-xs" href="#">
          Honor Code
        </a>
        <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors tracking-widest uppercase text-xs" href="#">
          Scrolls
        </a>
        <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors tracking-widest uppercase text-xs" href="#">
          Temple Locations
        </a>
      </div>
      <div className="h-10 vertical-divider"></div>
      <p className="font-body-md text-xs text-on-surface/40 tracking-wide text-center">
        © 1603–2024 Bushido Events. The Way of the Warrior. All Rights Reserved.
      </p>
      <div className="flex gap-8">
        <a className="text-secondary hover:text-primary transition-colors" href="#">
          <span className="material-symbols-outlined text-lg">share</span>
        </a>
        <a className="text-secondary hover:text-primary transition-colors" href="#">
          <span className="material-symbols-outlined text-lg">mail</span>
        </a>
      </div>
    </footer>
  );
}
