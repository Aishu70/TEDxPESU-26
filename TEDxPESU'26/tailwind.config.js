/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tedx: {
          red: '#eb0028',
          'red-bright': '#ff1a3d',
          'red-hover': '#c70022',
          'red-dark': '#4a080f',
          'red-glow': 'rgba(235, 0, 40, 0.4)',
          black: '#070709',
          card: '#101015',
          'card-hover': '#161620',
          border: '#23232e',
          text: '#f4f4f6',
          muted: '#9a9aa5'
        }
      },
      fontFamily: {
        heading: ['"Syne"', '"Montserrat"', 'sans-serif'],
        condensed: ['"Bebas Neue"', '"Anton"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif']
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(235, 0, 40, 0.25)',
        'glow-md': '0 0 30px rgba(235, 0, 40, 0.35)',
        'glow-lg': '0 0 60px rgba(235, 0, 40, 0.45)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
