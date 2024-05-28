/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Display', ...defaultTheme.fontFamily.sans],
        display: ['Readex Pro', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        ...defaultTheme.colors,
        primary: '#0050C7',
        secondary: '#F17300',
        whatsapp: '#2AA000',
        telegram: '#0093E3',
        skype: '#04B4FF',
        danger: '#C8102E',
        like: '#00890E',
        dislike: '#FF4A3F',
        body: '#4A4A4A',
        star: '#D89A00',
        purple: "#8749D4"
      }
    },
  },
  plugins: [],
}

