/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        'primary': '#5684AE',
        'secondary': '#0F4C81',
        'third': '#FFE4C8',
        'forth': '#F9BE81',
        'fifth': '#E4F6ED;'
      },
      backgroundColor: {
        'primary': '#5684AE',
        'secondary': '#0F4C81',
        'third': '#FFE4C8',
        'forth': '#F9BE81',
        'fifth': '#E4F6ED;'
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}