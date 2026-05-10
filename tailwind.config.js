/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#f8f2e8',
        latte: '#e8ddcc',
        mocha: '#6a4a31',
        espresso: '#2f1e13',
        caramel: '#b88b5c',
      },
      boxShadow: {
        soft: '0 12px 35px rgba(47, 30, 19, 0.14)',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

