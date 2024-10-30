/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        customBtnColor: '#128F82',   
        customBackgroundColor: '#F8F8F8', 
        customWhite: '#FFFFFF',
        customGray: '#404F4F',
        customLightBlue:'#F3F9F8',
        customIconBgColor:'#E9F4F4',
        customReviewBackground: '#497774',
        customFooterColor:'#F3F9F8',
      },
    },
  },
  plugins: [],
}

