/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Cambon", "serif"],
        body: ["Inter", "sans-serif"],
        musical: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
