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
      }
    },
  },
  plugins: [],
}

