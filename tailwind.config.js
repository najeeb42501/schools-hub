/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#141b41",
        lightBlue: "#1597BB",
        yellow: "#07393C",
        lightRed: "#f87060",
        darkBlue: "#102542",
        nightGreen: "#07393C",
        cariGreen: "#2F6D75",
        skyBlue: "#6FD3EB",
      },
    },
  },
  plugins: [require("daisyui")],
};
