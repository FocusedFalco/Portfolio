import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030303",
        "on-background": "#FFFFFF",
        primary: {
          DEFAULT: "#F97316",
          dark: "#EA580C",
          light: "#FDBA74",
        },
        sunset: {
          orange: "#F97316",
          red: "#EF4444",
          gold: "#F59E0B",
          pink: "#EC4899",
          dark: "#050505",
          glass: "rgba(10, 10, 10, 0.7)",
          border: "rgba(249, 115, 22, 0.15)",
        },
      },
      fontFamily: {
        sans: ["Outfit", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-roboto-mono)", "monospace"],
      },
      borderRadius: {
        DEFAULT: "12px",
        lg: "16px",
        xl: "24px",
        full: "9999px",
      },
      animation: {
        "pulse-slow": "pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow": "glow 4s ease-in-out infinite alternate",
      },
      keyframes: {
        glow: {
          "0%": { boxShadow: "0 0 10px rgba(249, 115, 22, 0.1)" },
          "100%": { boxShadow: "0 0 30px rgba(249, 115, 22, 0.4)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
