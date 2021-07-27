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
      },
      colors: {
        lightpink: {
          DEFAULT: '#E9BCB9'
        },
        lightbg: {
          DEFAULT: '#FEF9F5'
        },
        darkbrown: {
          DEFAULT: '#AB8A84'
        },
        darkpink: {
          DEFAULT: '#FCB8B6'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
