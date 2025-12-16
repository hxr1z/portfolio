/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Overriding 'indigo' with a Sage Green aesthetic
        indigo: {
          50: '#F4F7F5',  // Very pale sage (backgrounds)
          100: '#E3EBE6',
          200: '#C5D6CD',
          300: '#A6C2B3',
          400: '#87AD9A',
          500: '#6B9982', // <--- Main Sage Green (Buttons/Highlights)
          600: '#557A68', // Darker sage (Hover)
          700: '#405C4E',
          800: '#2B3D34',
          900: '#151F1A',
        }
      },
    },
  },
  plugins: [],
}