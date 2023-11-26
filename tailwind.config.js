/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray-light': '#d3dce6',
      'gray': '#787486',
      'border-stroke': '#DBDBDB',
      'linear-gradient':'(to right, #5bcfc5 25%, #3197b7 100%);',
      'bg-menu':'rgba(80, 48, 229, 0.08);'
    },
  plugins: [],
}
}