/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        scaleUp: "scaleUp 500ms ease-in-out 1",
      },
      keyframes: {
        scaleUp: {
          "0%": { scale: "0" },
          "50%": { scale: "1.1" },
          "100%": { scale: "1" },
        },
      },
    },
  },
  plugins: [],
};
