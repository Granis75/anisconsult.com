import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        muted: "#60605c",
        line: "#e7e4dc",
        surface: "#f7f5ef",
        soft: "#f4f2ec",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(11,16,32,0.06)",
        card: "0 8px 24px rgba(11,16,32,0.05)",
      },
      letterSpacing: {
        tighter2: "-0.03em",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
