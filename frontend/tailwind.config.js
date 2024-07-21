/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        prussianblue: '#13293d',
        lapislazuli: '#006494',
      },
    },
  },
  plugins: [],
}
