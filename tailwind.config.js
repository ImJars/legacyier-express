/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        'primary': '#0C0D11',
        'secondary': '#17181D',
        'tertiary': '#F21E4E',
      },
      fontFamily:{
        'sans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}