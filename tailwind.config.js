/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-desktop': "url('../src/assets/home/background-home-desktop.jpg')",
        'home-tablet': "url('../src/assets/home/background-home-tablet.jpg')",
        'home-mobile': "url('../src/assets/home/background-home-mobile.jpg')",
      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        barlowCondensed: ['Barlow Condensed', 'sans-serif'],
        belleFair: ['Bellefair', 'serif'],
      },
    },
  },
  plugins: [],
}