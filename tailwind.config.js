/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        main: '#FB5875',
        text: '#545454',
        lightBg: '#FFF',
        lightSecond: '#E9E9ED',
        lightThird: '#EDEDEE',
        darkBg: '#141414',
        darkSecond: '#1E1E1E',
        darkThird: '#2B2C2E',
      },
    },
  },
  plugins: [],
};
