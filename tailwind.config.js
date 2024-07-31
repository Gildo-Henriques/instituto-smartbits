/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        azul: {
          100:" #eaf8ff",
          200: "#cfefff",
          300: "#b4dbee",
          400: "#8abdd6",
          500: "#6bb3d7",
          600: "#42A6D3",
          700: "#3a9dcf",
        },
        azul_escuro: {
          100: "#c5e1fa",
          200:  "#9ccdf7",
          300: "#7cc1fe",
          400: "#5cb3ff",
          500: "#4494d9",
          600: "#1c6bb0",
          700: "#07569E",
        }
      }
    },
  },
  plugins: [],
}