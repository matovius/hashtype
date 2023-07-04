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
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          primary: "#0ea5e9",
          secondary: "#6366f1",
          success: "#10b981",
          warning: "#eab308",
          error: "#f43f5e",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
