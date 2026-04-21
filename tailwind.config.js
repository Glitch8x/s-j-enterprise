/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,営業}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A5C36', // Deep Green from flyer
          dark: '#074227',
        },
        accent: {
          DEFAULT: '#FFD700', // Golden Yellow
          orange: '#FF8C00',  // Orange stripe
        },
        secondary: '#F4F4F4',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
      }
    },
  },
  plugins: [],
}
