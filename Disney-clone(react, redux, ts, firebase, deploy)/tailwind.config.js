/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-back': '#040714',
        'f9': "#f9f9ff9",
        'blue-btn': '#0063E5',
        'bd': 'rgba(249, 249, 249, 0.1)',
        'recom' : 'rgba(128, 111, 111, 0.5)',
        'btn-hov' : 'rgb(198, 198, 198)',
        'trailer' : 'rgba(0, 0, 0, 0.2)'
      },
      boxShadow: {
        'my': '0px 26px 20px hsla(0, 0%, 100%, 0.1)',
      },
    },
  },
  plugins: [],
}