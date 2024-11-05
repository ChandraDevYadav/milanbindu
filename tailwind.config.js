/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        moveUpDown: {
          '0%, 100%': { transform: 'translateY(0)' }, // Start and end at the same position
          '50%': { transform: 'translateY(-20px)' }, // Move up by 20px at 50%
        },
      },
      animation: {
        moveUpDown: 'moveUpDown 2s ease-in-out infinite', // Create the animation with infinite looping
      },
      colors: {
        primary: '#213366', // Your desired primary color
    },
    },
  },
  plugins: [],
}
