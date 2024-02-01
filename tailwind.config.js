/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#1E40AF",
        lightBlue: "#1597BB",
        yellow: "#F6C90E",
        red: "#d00000",
      },
    },
  },
  plugins: [require("daisyui")],
};
