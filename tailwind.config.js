/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: "#101010",
      white: "#f6f6f6",
      gray: "#191919",
      correct: "#008000",
      wrong: "#FF0000",
      idle: "#191919",
    },
    extend: {},
  },
  plugins: [],
}

