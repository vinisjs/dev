/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Univers-ligth-normal', 'Arial', 'sans-serif'],
      'black': ['UniversBlack', 'Arial', 'sans-serif'],
      'bold': ['UniversLTStd-Bold', 'Arial', 'sans-serif'],
      'normal': ['UniversLTStd', 'Arial', 'sans-serif'],
    },
    extend: {
    },
  },
  plugins: [],
}