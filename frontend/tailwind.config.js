/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        prussianblue: '#0c1529',
        lapislazuli: '#070f22',
        skyblue: '#5b68e0',
        secondarysky: '#3b8fbd',
      },
    },
  },
  plugins: [],
}
