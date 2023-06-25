/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      display: ["Inter", "sans-serif"],
      body: ["Montserrat", "sans-serif"],
      mono: ["Mononoki", "monospace"],
    },
    extend: {},
  },
  plugins: [],
};
