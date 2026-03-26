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
        ink: "#0b1020",
        muted: "#5f6b85",
        line: "#e7ebf3",
        surface: "#f7f9fc",
        soft: "#f2f5fb",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(11,16,32,0.06)",
        card: "0 8px 24px rgba(11,16,32,0.05)",
      },
      letterSpacing: {
        tighter2: "-0.03em",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
