/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["var(--font-raleway)"],
        sans: ["var(--font-pt-sans)"],
      },
      backgroundImage: {},
      colors: {
        // Accent color
        "gold-900": "#5e4a29",
        "gold-800": "#93774c",
        "gold-700": "#d9b072",
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
      },
    },
  },
  plugins: [],
};
