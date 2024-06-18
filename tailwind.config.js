const animate = require("tailwindcss-animate")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx,vue}',
    './components/**/*.{ts,tsx,vue}',
    './app/**/*.{ts,tsx,vue}',
    './src/**/*.{ts,tsx,vue}',
	],
  prefix: "",
  theme: {
    screens: {
      'sm': '320px',
      'md': '640px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: "2rem",
      size:'200px',
      screens: {
        "2xl": "1400px",
      },
      screens: {
        sm: '100%',
        md: '100%',
        lg: '960px',
        xl: '1280px',
      },
  
  },
  colors: {
    mainDark: '#09090b',
    mainBg: '#fff',
    darkWhite: '#fafafa',
    darkGray: '#a1a1aa',
    darkGrayDarken: '#27272a',
    greenJuice: '#22c55e',
    redJuice: '#e11d48',
    darkNightBlue: '#030712',
    lightGray: '#d1d1d1',
    darkenGray: '#121212',
    nightPurple: '#030712'
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