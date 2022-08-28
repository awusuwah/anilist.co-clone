/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#0b1622",
        foreground: "#151f2e",
      },
    },
  },
  plugins: [],
};
