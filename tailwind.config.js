const animate = require("tailwindcss-animate")

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        'sm': '320px',
        'md': '640px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
    colors: {
      'mainDark': '#09090b',
      'mainBg': '#fff',
      'darkWhite': '#fafafa',
      'darkGray': '#a1a1aa',
      'darkGrayDarken': '#27272a',
      'greenJuice': '#22c55e',
      'redJuice': '#e11d48',
      'darkNightBlue': '#030712',
      'lightGray': '#d1d1d1'
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animate],
}
