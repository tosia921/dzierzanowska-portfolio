const defaultTheme = require('tailwindcss/defaultTheme');
const deliciousHamburgers = require('tailwindcss-delicious-hamburgers');

module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                playlist: ['Playlist Script', ...defaultTheme.fontFamily.sans],
                mali: ['Mali', ...defaultTheme.fontFamily.mono],
            },
            colors: {
                lightpink: {
                    DEFAULT: '#E9BCB9',
                },
                lightbg: {
                    DEFAULT: '#FEF9F5',
                },
                darkbrown: {
                    DEFAULT: '#AB8A84',
                },
                darkpink: {
                    DEFAULT: '#FCB8B6',
                },
            },
            deliciousHamburgers: {
                size: '40px', // must be in px.
                color: '#000000',
                colorLight: '#fff8f4',
                padding: '5px', // must be in px.
                animationSpeed: 1,
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [deliciousHamburgers],
};
