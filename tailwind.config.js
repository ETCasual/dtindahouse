module.exports = {
    mode: 'jit',
    // important: true,
    purge: ['./src/**/*.tsx', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                script: ["'Dancing Script'", 'sans-serif'],
                passion: ['"Passion One"', 'sans-serif'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('@tailwindcss/aspect-ratio')],
}
