/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "header": "url('/bg.jpg')"
      },
      animation: {
        blink: 'blink 1s ease-in-out infinite'
      },
      keyframes: {
        blink: {
          '0%, 100%': {
            opacity: '1'
          },
          '50%': {
            opacity: '0.5'
          }
        }
      }
    },
  },
  plugins: [],
}

