/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        mainColor: '#E65B03',
        hpColor : '#EA5362',
        processColor: '#8CC640',
      },
    },
  },
  plugins: [],
};
