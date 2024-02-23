/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        separator: 'hsla(0, 0%, 50%, .24)',
        foreground: {
          primary: 'hsl(0, 0%, 100%)',
          secondary: 'hsl(240, 1%, 55%)',
          tertiary: 'hsl(0, 0%, 33%)',
        },
        background: {
          primary: 'hsl(0, 0%, 0%)',
          secondary: 'hsl(0, 0%, 9%)',
          tertiary: 'hsl(0, 0%, 13%)',
        },
      },
    },
  },
  plugins: [],
};
