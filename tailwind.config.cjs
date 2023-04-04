/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '375px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'background-search': 'rgba(255, 255, 255, 0.4)',
        'background-categories': 'rgba(18,18,20,0.8)',
      },
      backgroundImage: {
        topbackground: 'url(/assets/back-PabloDominguez.png)',
      },
      fontFamily: {
        'Ring': ['Ringbearer', 'Open sans'],
        'gilroy-medium': ['Gilroy-Medium', 'sans-serif'],
        'gilroy-bold': ['Gilroy-Bold', 'sans-serif'],
      },
    },
    plugins: [],
  }
}