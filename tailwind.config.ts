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
        // Blue, black, and white theme
        accent: {
          primary: {
            DEFAULT: "#3B82F6", // Blue-500
            light: "#60A5FA", // Blue-400
            dark: "#2563EB", // Blue-600
            subtle: "rgba(59, 130, 246, 0.2)",
          },
          secondary: {
            DEFAULT: "#60A5FA", // Blue-400
            light: "#93C5FD", // Blue-300
            dark: "#3B82F6", // Blue-500
            subtle: "rgba(96, 165, 250, 0.2)",
          },
          tertiary: {
            DEFAULT: "#2563EB", // Blue-600
            light: "#3B82F6", // Blue-500
            dark: "#1D4ED8", // Blue-700
            subtle: "rgba(37, 99, 235, 0.2)",
          },
        },
        black: "#000000",
        white: "#FFFFFF",
        offWhite: "#E5E5E5",
        background: {
          primary: "#000000",
          secondary: "#0a0a0a",
          tertiary: "#141414",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#E5E5E5",
          muted: "#999999",
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

