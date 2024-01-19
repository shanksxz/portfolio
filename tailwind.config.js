/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading : ['Sedgwick Ave', 'cursive'],
      },
      fontSize : {
        
      },
      maxWidth: {
        "10xl": '1150px'
      },
    },
  },
  plugins: [],
}