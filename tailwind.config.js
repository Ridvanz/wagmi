/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode based on a class
  content: ['./src/**/*.{html,js,svelte,ts}', "./node_modules/flowbite/**/*.js"],
  theme: {
    colors: {
      'primary': {
        DEFAULT: '#EE7003',
        50: '#FED1AB',
        100: '#FEC697',
        200: '#FDB16E',
        300: '#FD9B46',
        400: '#FC851E',
        500: '#EE7003',
        600: '#B75602',
        700: '#7F3C02',
        800: '#482201',
        900: '#100800',
        950: '#000000',
      },
      'secondary': {
        DEFAULT: '#FFFFFF',
        50: '#F9F9F9',
        100: '#F2F2F2',
        200: '#E5E5E5',
        300: '#D9D9D9',
        400: '#BFBFBF',
        500: '#A6A6A6',
        600: '#8C8C8C',
        700: '#737373',
        800: '#595959',
        900: '#404040',
        950: '#333333',
      },
      'tertiary': {
        DEFAULT: '#333333',
        50: '#FFFFFF',
        100: '#F8F8F8',
        200: '#EAEAEA',
        300: '#DCDCDC',
        400: '#C0C0C0',
        500: '#A3A3A3',
        600: '#878787',
        700: '#6B6B6B',
        800: '#4F4F4F',
        900: '#333333',
        950: '#1A1A1A',
      },
      '': {
        DEFAULT: '#DBDBDB',
      },    
      'donkergrijs': {
        DEFAULT: '#DBDBDB',
      },           
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
