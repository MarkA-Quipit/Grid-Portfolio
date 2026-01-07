/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'system': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
      },
      backdropBlur: {
        '10': '10px',
      },
      spacing: {
        '7.5': '30px',
      },
      width: {
        '7.5': '30px',
      },
      zIndex: {
        '1000': '1000',
      },
      animation: {
        'slide-up': 'slideUp 0.3s ease',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(2px)' },
          '100%': { transform: 'translateY(-2px)' },
        }
      }
    },
  },
  plugins: [],
}