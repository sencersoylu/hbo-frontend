import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    fontFamily: {
      display: "var(--display-font)",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        raleway: "Raleway",
      },
      borderRadius: {
        "6xs-7": "6.7px",
        "9xs": "4px",
        "8xs-2": "4.2px",
      },
      colors: {
        midnightblue: {
          "100": "#111b52",
          "200": "#020738",
        },
        white: "#fff",
        gainsboro: "#ddd",
        steelblue: "#445b94",
        "light-blue": "#20fbfd",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    fontSize: {
      "7xl-7": "26.7px",
      "2xl": "21px",
      "2xl-3": "21.3px",
      mid: "17px",
      "3xl": "22px",
      "8xl": "27px",
      "base-2": "16.2px",
      "mid-8": "17.8px",
      "xs-8": "11.8px",
      "12xl-8": "31.8px",
      "base-9": "15.9px",
      inherit: "inherit",
    },
  },

  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
