/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.{html,js}' 
  ],
  theme: {
    extend: {
      colors: {
        'main-green': '#3BB77E',
        'main-font': '#253D4E',
        'search-gray': '#7E7E7E',
        'search-green': '#BCE3C9',
      },
      spacing: {
        '31': '7.75rem',
      }
    },
  },
  plugins: [],
}

