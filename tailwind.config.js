/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        raleway: ["var(--font-raleway)"],
        montserrat: ["var(--font-montserrat)"],
      },
      spacing: {
        17.5: "4.375rem",
      },
      width: {
        100: "25rem",
      },
      height: {
        120: "30rem",
      },
      backgroundImage: {
        "gradient-315": "linear-gradient(315deg, var(--tw-gradient-stops))",
      },
      borderWidth: {
        0.5: "0.5px",
      },
      fontSize: {
        xxs: "0.625rem",
        "base-sm": "0.8125rem",
        "base-base": "0.9375rem",
        "1.5xl": "1.375rem",
        "8.5xl": "7rem",
      },
      colors: {
        // Accent color
        "gold-900": "#5e4a29",
        "gold-800": "#b5935c",
        "gold-700": "#fdce80",
        // dark for background and accents
        "dark-900": "#242329", // For bold typography on white background
        "dark-800": "#2f3135",
        "dark-700": "#3f4146",
        // light for fonts
        "light-900": "#73757e",
        "light-800": "#919397",
        "light-700": "#adafb5",
        "light-600": "#c8cacf",
        "light-500": "#e1e3e6",
        // Main background
        "bg-gray-900": "#08080a",
        "bg-gray-800": "#151418",
      },
    },
  },
  plugins: [],
};
