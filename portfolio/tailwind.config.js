module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    scrollSnapType: ['responsive'],
  },
  plugins: [require('tailwindcss-scroll-snap')],
}