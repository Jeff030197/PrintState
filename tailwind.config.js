/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      backgroundImage:{
        'bg1': "url('/src/Components/img/Banner/banner1.png')",
        'bg2': "url('/src/Components/img/Banner/carousel1.png')",
      }
    },
  },
  plugins: [],
}

