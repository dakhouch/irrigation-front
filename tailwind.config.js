/** @type {import('tailwindcss').Config} */
export  default  {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#A3C68C',
        bet:'#2E7D32',
        secondary: '#F5E1A4',
        thirdly:'#7E735F',
        fortly:'#547C4D'
      },
    },
    screens: {
      sm: '576px', // => @media (min-width: 576px) { ... }
      md: '1000px', // => @media (min-width: 960px) { ... }
      lg: '1440px', // => @media (min-width: 1440px) { ... }
      xl: '1920px', // => @media (min-width: 1920px) { ... }
    },
  },
  plugins: [],
};