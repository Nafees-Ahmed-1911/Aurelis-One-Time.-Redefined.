/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#060607',
        graphite: '#17181b',
        slate: '#26282d',
        titanium: '#c3c6cb',
        champagne: '#c9a96a',
        ivory: '#f2efe8',
      },
      fontFamily: {
        sans: ['Manrope', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        luxe: '0.22em',
      },
    },
  },
  plugins: [],
}
