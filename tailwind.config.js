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
      colors: {
        'gray-750': '#374151',
        'neon-cyan': '#00ffff',
        'neon-purple': '#bf00ff',
        'neon-green': '#00ff41',
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
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(2px)' },
          '100%': { transform: 'translateY(-2px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(6, 182, 212, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(6, 182, 212, 0.8)' },
        }
      }
    },
  },
  plugins: [],
}