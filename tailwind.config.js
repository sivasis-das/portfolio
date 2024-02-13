/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        dropdown: {
          "0%": { transform: "translateY(100%)" },

          "100%": { transform: "translateY(0%)" },
        },
      },
      animation: {
        dropdown: "dropdown 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
