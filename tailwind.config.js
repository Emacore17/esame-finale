/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "primary-500": "#023047",
        "primary-400": "#219ebc",
        "primary-300": "#8ecae6",
        "secondary-500": "#ffb703",
        "secondary-600": "#fb8500",
      },
    },
  },
  plugins: [],
};
