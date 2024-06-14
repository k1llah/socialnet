/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'sm': '320px',
        'md': '640px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors:{
        mainDark: '#09090b',
				mainBg: '#fff',
        darkWhite: '#fafafa',
        darkGray: '#a1a1aa',
        darkGrayDarken: '#27272a',
        greenJuice: '#22c55e',
        redJuice: '#e11d48',
        darkNightBlue: '#030712',
        lightGray: '#d1d1d1'
      }
    }
  },
  plugins: []
  
}
