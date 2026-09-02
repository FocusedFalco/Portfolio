"use client";

import { MapPin, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-black py-24 md:py-32 px-4 md:px-6 relative">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <span className="text-[#E55943] text-[10px] sm:text-xs tracking-widest uppercase block font-medium font-mono">
            GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-white tracking-tight">
            Let’s Build Something Exceptional.
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-light max-w-xl mx-auto leading-relaxed">
            Always open to discussing product strategy, roadmap iterations, case competitions, or internship opportunities.
          </p>
        </div>

        {/* Contact Information Card */}
        <div className="max-w-2xl mx-auto bg-[#070708] rounded-2xl border border-neutral-900 p-8 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* Left: Address & Email */}
            <div className="space-y-5">
              <div className="flex items-center gap-3 text-neutral-300 text-sm font-light">
                <MapPin className="w-5 h-5 text-[#E55943] shrink-0" />
                <span>Gurgaon, Haryana, India</span>
              </div>
              <div className="flex items-center gap-3 text-neutral-300 text-sm font-light">
                <Mail className="w-5 h-5 text-[#E55943] shrink-0" />
                <a
                  href="mailto:rakshitraj1107@gmail.com"
                  className="hover:text-[#E55943] transition-colors"
                >
                  rakshitraj1107@gmail.com
                </a>
              </div>
            </div>

            {/* Right: Social Profiles */}
            <div className="space-y-5">
              <div className="flex items-center gap-3 text-neutral-300 text-sm font-light">
                <svg className="w-5 h-5 text-[#E55943] fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <a
                  href="https://linkedin.com/in/rakshit-raj-4796a2320"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#E55943] transition-colors"
                >
                  linkedin.com/in/rakshit-raj
                </a>
              </div>

              <div className="flex items-center gap-3 text-neutral-300 text-sm font-light">
                <svg className="w-5 h-5 text-[#E55943] fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <a
                  href="https://github.com/FocusedFalco"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#E55943] transition-colors"
                >
                  github.com/FocusedFalco
                </a>
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs text-neutral-500 font-mono pt-12">
          © {new Date().getFullYear()} Rakshit Raj. Built with sunset coral red design aesthetics.
        </p>
      </div>
    </section>
  );
}
