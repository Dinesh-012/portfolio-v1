import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
          950: "#1e1b4b",
        },
        accent: {
          DEFAULT: "#06b6d4",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "Segoe UI",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        mono: ["JetBrains Mono", "Consolas", "monospace"],
      },
      backgroundImage: {
        "gradient-text":
          "linear-gradient(90deg, #818cf8, #22d3ee, #6366f1)",
        "gradient-hero":
          "radial-gradient(ellipse at 20% 20%, rgba(99, 102, 241, 0.15), transparent 50%), radial-gradient(ellipse at 80% 60%, rgba(34, 211, 238, 0.12), transparent 45%)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0, 0, 0, 0.2)",
        "glow-indigo": "0 0 40px rgba(99, 102, 241, 0.35)",
      },
      animation: {
        "orb-drift-1": "orbDrift1 18s ease-in-out infinite",
        "orb-drift-2": "orbDrift2 22s ease-in-out infinite",
        "orb-drift-3": "orbDrift3 26s ease-in-out infinite",
        bounceSoft: "bounceSoft 2s ease-in-out infinite",
      },
      keyframes: {
        orbDrift1: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(30px, -20px) scale(1.05)" },
        },
        orbDrift2: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-25px, 25px) scale(1.08)" },
        },
        orbDrift3: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(20px, 15px) scale(0.95)" },
        },
        bounceSoft: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(6px)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
