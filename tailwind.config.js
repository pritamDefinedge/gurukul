/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // Enable dark mode via class strategy
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Poppins', 'Open Sans', 'sans-serif'],
      },
     
      zIndex: {
        '999': 999,
      },
      container: {
        center: true,
        padding: '1rem',
      },
   
    },
  },
  plugins: [],
}
