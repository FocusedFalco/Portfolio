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
        primary: {
          DEFAULT: "#E55943",
          dark: "#CB4934",
          light: "#F07E6C",
        },
        sunset: {
          orange: "#E55943",
          red: "#EF4444",
          gold: "#F59E0B",
          pink: "#EC4899",
          dark: "#050505",
          glass: "rgba(10, 10, 10, 0.7)",
          border: "rgba(229, 89, 67, 0.15)",
        },
      },
      fontFamily: {
        serif: ['"Instrument Serif"', "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
