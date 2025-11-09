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
        // Football club colors
        manUtdRed: {
          DEFAULT: "#DA020E",
          dark: "#A0000A",
          light: "#FF1A2A",
        },
        realMadridGold: {
          DEFAULT: "#FFD700",
          dark: "#DAA520",
          light: "#FFE44D",
        },
        black: "#000000",
        white: "#FFFFFF",
        offWhite: "#F5F5F5",
        // Legacy support
        background: {
          primary: "#000000",
          secondary: "#0a0a0a",
          tertiary: "#141414",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#F5F5F5",
          muted: "#a0a0a0",
        },
        accent: {
          red: "#DA020E",
          gold: "#FFD700",
          primary: "#DA020E",
          secondary: "#FFD700",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-fira-code)", "monospace"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.75rem" }],
        lg: ["1.125rem", { lineHeight: "2rem" }],
        xl: ["1.25rem", { lineHeight: "2rem" }],
        "2xl": ["1.5rem", { lineHeight: "2.25rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.5rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.75rem" }],
        "5xl": ["3rem", { lineHeight: "3.5rem" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },
      fontWeight: {
        thin: "100",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        black: "900",
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

