const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'playlist': ["'Playlist Script'", ...defaultTheme.fontFamily.mono],
        'mali': ["'Mali'", ...defaultTheme.fontFamily.mono],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
