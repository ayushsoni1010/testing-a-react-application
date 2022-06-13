/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    spacing: {
      1: "8px",
      2: "8px",
      3: "8px",
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1536px",
    },
    extend: {},
  },
  plugins: [],
};
