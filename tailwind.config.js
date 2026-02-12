/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rich-black': '#0a0a0a',
        'midnight': '#121212',
        'gold': '#D4AF37',
        'gold-light': '#F1E5AC',
        'gold-dark': '#B8950A',
        'emerald-accent': '#046c4e',
        'dim': '#888888',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        display: ['Cormorant Garamond', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      boxShadow: {
        'gold': '0 0 30px rgba(212, 175, 55, 0.3)',
        'gold-lg': '0 0 60px rgba(212, 175, 55, 0.4)',
        'premium': '0 20px 60px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}
