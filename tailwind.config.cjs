/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'dark':{
          50: '#edecec',
          100: '#d1d1d1',
          200: '#b2b2b2',
          300: '#9c9c9c',
          400: '#7b7b7b',
          500: '#5c5c5c',
          600: '#3b3b3b',
          700: '#313131',
          800: '#1f1f1f',
          900: '#0d0d0d',
        }
      }
    },
  },
  plugins: [],
}