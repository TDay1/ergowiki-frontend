/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ergo-background': '#fffffe',
        'ergo-heading': '#272343',
        'ergo-text': '#2d334a',
        'ergo-highlight': '#ffd803',
        'ergo-secondary': '#e3f6f5',
        'ergo-tertiary': '#bae8e8',
        'ergo-border': '#000000',
        // Darkmode colour scheme
        'ergo-background-dark': '#232946',
        'ergo-heading-dark': '#fffffe',
        'ergo-text-dark': '#b8c1ec',
        'ergo-highlight-dark': '#eebbc3',
        'ergo-secondary-dark': '#fffffe',
        'ergo-tertiary-dark': '#eebbc3',
        'ergo-border-dark': '#121629',
      },
    },
  },
  plugins: [],
}
