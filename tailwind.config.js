/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0c366e',
        'secondary': '#d7a410',
        'tertiary': '#f9f9ff',
      },
      backgroundImage: {
        'gradient-from-to': 'linear-gradient(to bottom, #6375a8, #515be9)',
      },
    },
  },
  plugins: [],
}
