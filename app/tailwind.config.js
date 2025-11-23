/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  extend: {
    fontFamily: {
      mono: ["var(--font-ibm-plex-mono)", "monospace"],
      body: ["var(--font-ibm-plex-mono)", "monospace"],
    },
  },
}

  plugins: [],
};
