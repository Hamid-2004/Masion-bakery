/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f8f1e6',
        latte: '#eadbc8',
        mocha: '#6c4d36',
        espresso: '#2a1a10',
        caramel: '#b88b5c',
        champagne: '#d8b67f',
      },
      boxShadow: {
        soft: '0 12px 35px rgba(47, 30, 19, 0.14)',
        luxe: '0 20px 45px rgba(41, 24, 13, 0.22)',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

