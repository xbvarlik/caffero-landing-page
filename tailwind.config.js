/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brown: {
          400: '#a87b63',
          600: '#795548',
          700: '#5d4037',
          800: '#4e342e',
          900: '#3e2723',
        },
      },
    },
  },
  plugins: [],
};