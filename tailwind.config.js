// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-light-gray': '#F7F7F7',
        'bg-purple': '#dee2ff',
        'bg-menu': 'rgba(80, 48, 229, 0.08)',
        'light-green': '#D1ECDD',
        'dark-green': '#3FAF6F',
        'text-purple': '#4A46FF',
        'white': '#ffffff',
        'gray-dark': '#273444',
        'gray-light': '#d3dce6',
        'gray': '#787486',
        'border-stroke': '#DBDBDB',
      },
      linearGradientColors: {
        'linear-gradient': ['to right', '#5bcfc5 25%', '#3197b7 100%'],
      },
    },
  },
  plugins: [
    require('tailwindcss-gradients'),
  ],
};
