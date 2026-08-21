import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "oklch(0.97 0.008 70)",
        surface: "oklch(0.995 0.003 70)",
        ink: "oklch(0.24 0.015 50)",
        "ink-soft": "oklch(0.32 0.015 50)",
        "ink-muted": "oklch(0.48 0.012 50)",
        line: "oklch(0.87 0.01 60)",
        accent: "oklch(0.4 0.13 22)",
        "accent-hover": "oklch(0.32 0.13 22)",
        "accent-soft": "oklch(0.93 0.03 22)",
        official: "oklch(0.5 0.1 70)",
        "official-bg": "oklch(0.95 0.04 80)",
        "official-border": "oklch(0.72 0.13 80)",
        approved: "oklch(0.4 0.1 145)",
        "approved-bg": "oklch(0.94 0.05 145)",
        pending: "oklch(0.48 0.012 50)",
        "pending-bg": "oklch(0.93 0.006 60)",
      },
      fontFamily: {
        serif: ["var(--font-source-serif)", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
