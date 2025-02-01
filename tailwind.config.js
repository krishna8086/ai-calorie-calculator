/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        brown: {
          500: '#8B4513',
        },
        // Nature theme colors
        nature: {
          primary: '#2D5A27',
          secondary: '#8FBC8F',
          accent: '#98FB98',
          background: '#F0FFF0',
          text: '#1B4D3E',
        },
        // Ocean theme colors
        ocean: {
          primary: '#1E3F66',
          secondary: '#2E5984',
          accent: '#7CB9E8',
          background: '#F0F8FF',
          text: '#00308F',
        },
        // Sunset theme colors
        sunset: {
          primary: '#FF7F50',
          secondary: '#FFA07A',
          accent: '#FFD700',
          background: '#FFF5E1',
          text: '#8B4513',
        },
      },
    },
  },
  plugins: [],
};