/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./pages/**/*.{html}",
  ],
  theme: {
    extend: {
      colors: {
        "darkBlack": "#12111f"
      },

      screens: {
        'ml': { 'max': '1000px' },
      },
    }
  },
  plugins: [],
}
