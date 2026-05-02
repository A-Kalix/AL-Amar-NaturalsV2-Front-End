/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          skin: '#f5d5bb',
          sun: '#e8a26a',
          olive: '#6b6b4c',
          earth: '#604f3f',
          gold: '#85754e',
          silver: '#898d8e',
          rose: '#ca9482',
          xanadu: '#6b7b6c',
        }
      },
      fontFamily: {
        primary: ['"Trajan Sans Pro"', 'Cinzel', 'serif'],
        secondary: ['"Museo Slab"', '"Zilla Slab"', 'serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
      }
    },
  },
  plugins: [],
}
