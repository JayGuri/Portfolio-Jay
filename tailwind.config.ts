import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "#0f0f0f",
          secondary: "#1a1a1a",
          tertiary: "#242424",
        },
        text: {
          primary: "#f5f5f5",
          secondary: "#a0a0a0",
          muted: "#6b6b6b",
        },
        accent: {
          primary: "#DA291C",
          secondary: "#FEBE10",
          spotify: "#1DB954",
        },
        border: "#2a2a2a",
        gray: {
          100: "#424242",
          200: "#555555",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-fira-code)", "monospace"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      borderRadius: {
        xl: "12px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;

