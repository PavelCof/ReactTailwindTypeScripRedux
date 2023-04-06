/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1680px',
    },      

    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    opacity: {
      '0': '0',
      '20': '0.2',
      '40': '0.4',
      '60': '0.6',
      '80': '0.8',
      '100': '1',
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },   
      colors: {
            'bluesite': '#1fb6ff',
            'bluesite': '#1fbfff',
            'purplesite': '#7e5bef',
            'pinksite': '#ff49db',
            'orangesite': '#ff7849',
            'greensite': '#13ce66',
            'yellowsite': '#ffc82c',
            'gray-darksite-site': '#273444',
            'graysite': '#8492a6',
            'graysitelight': '#d3dce6',
            'whitesite': '#fff',
          },    
          borderRadius: {
            '4xl': '2rem',
          }
    },
  },
  plugins: [],
}
