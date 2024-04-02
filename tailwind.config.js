/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#141b41",
        lightBlue: "#1597BB",
        yellow: "#3590f3",
        lightRed: "#f87060",
        darkBlue: "#102542",
      },
    },
  },
  plugins: [require("daisyui")],
};
