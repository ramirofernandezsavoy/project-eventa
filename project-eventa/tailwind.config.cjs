/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {    
    extend: {
      colors: {
        'primary': '#0091AD',
        'primary-hover': '#005667',
        'secondary': '#FF57BB',
        'secondary-hover': '#a13374',       
        'plain': '#EFE9F4',
        'details': '#95C623',
        'details-hover': '#48610f',
      },
      fontFamily: {
        rob: ['Roboto', 'sans-serif'],
        robSerif: ['Roboto Serif', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}