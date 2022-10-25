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
        'quaternary': '#3399FF',
        'quinary': '#FEF805',
        'senary': '#E69005',
        'septenary': '#7B90FB',
        'text-mini': '#AFADB5',
      },
      fontFamily:{
        'sans': ['Open Sans', 'sans-serif'],
      },
      maxWidth: {
        250: '70rem',
      },
      width: {
        'img': '600px',
        'card-img': '300px',
      },
    },
  },
  plugins: [],
}