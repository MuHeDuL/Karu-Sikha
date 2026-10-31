/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./js/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#060d19',
          800: '#0a1324',
          700: '#101d36',
          600: '#1b2a4a'
        },
        karu: {
          blue: '#0284c7',
          sky: '#38bdf8',
          orange: '#f97316',
          amber: '#f59e0b',
          crimson: '#f43f5e',
          emerald: '#10b981'
        }
      }
    }
  },
  plugins: []
};
