import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      dropShadow: {
        green: '0 0 10rem #29c26f',
      },
    },
    colors: {
      primary: {
        200: '#b8b8d1', // light grayish purple
        400: '#5a189a', // deep purple
        500: '#22223b', // dark blue-black
        600: '#10002b', // almost black
      },
      grayscale: {
        25: '#232136', // very dark blue
        50: '#393552', // dark grayish blue
        100: '#2a2139', // dark purple-gray
        200: '#1a1625', // almost black
        950: '#0a0814', // true black
      },
      gold: {
        400: '#b593f4', // elegant gold accent
      },
    },
  },
  plugins: [tailwindcss, autoprefixer],
};
