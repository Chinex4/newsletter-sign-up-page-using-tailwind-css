/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'darkSlateGrey': 'hsl(234, 29%, 20%)',
        'charcoalGrey': 'hsl(235, 18%, 26%)',
        'mainGrey': 'hsl(231, 7%, 60%)',
        'tomato': 'hsl(4, 100%, 67%)'
      },
    },
  },
  plugins: [],
}

