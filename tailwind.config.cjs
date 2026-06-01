/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        zinc: {
          950: "#09090a",
        },
        warm: {
          500: "#ff7a2c",
          400: "#ff8f4a",
        },
      },
      boxShadow: {
        premium: "0 20px 60px rgba(255,122,44,.25)",
      },
    },
  },
  plugins: [],
};

