/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
    },
    colors: {
      white: '#f5f7fa',
      grey: '#c3cfe2',
      darkGrey: '#8395a7',
      black: '#57606f',
      softGrey: '#dfe6e9',
      green: '#26de81',
      red: '#ff5252',
    },
    fontFamily: {
      ubuntu: ['Ubuntu', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        main: 'rgba(0, 0, 0, 0.07) 0px 0px 10px 5px',
      },
    },
  },
  plugins: [],
};
