/** @type {import('tailwindcss').Config} */ 
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        opacity: 'opacity 0.5s ease-in-out',
      },
      keyframes: {
        opacity: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      }

    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
          '.scrollbar': {
              overflowY: 'auto',
              scrollbarColor: `${theme('colors.blue.600')} ${theme('colors.blue.200')}`,
              scrollbarWidth: 'thin',
          },
          '.scrollbar::-webkit-scrollbar': {
              height: '0px',
              width: '0px',
          },
          '.scrollbar::-webkit-scrollbar-thumb': {
              backgroundColor: theme('colors.blue.600'),
          },
          '.scrollbar::-webkit-scrollbar-track-piece': {
              backgroundColor: theme('colors.white'),
          },
      });
  }),
  ],
}