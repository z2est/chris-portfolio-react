const tailwindcss = require('tailwindcss');
module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    tailwindcss('./tailwind.js'),
    require('autoprefixer')
  ]
};