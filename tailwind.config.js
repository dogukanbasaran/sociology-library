/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      screens: {
        lg: '1140px',
        xl: '1440px',
        '2xl': '1140px'
      },
    },
    extend: {
      spacing: {
        '128': '32rem',
      },
      fontFamily: {
        sociology1: ['Gemunu Libre', 'sans-serif'],
        sociology2: ['Prompt', 'sans-serif']
      }
    },
  },
  plugins: [],
}

