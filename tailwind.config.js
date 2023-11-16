/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        mainColor: '#E65B03',
        hpColor: '#EA5362',
        processColor: '#8CC640',
      },
      screens: {
        'portrait-sm': {
          raw: '(orientation: portrait) and (max-width: 400px)',
        },
        'landscape-sm': {
          raw: '(orientation: landscape) and (max-width: 400px)',
        },
      },
    },
  },
  plugins: [],
};
