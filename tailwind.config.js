module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myBlue: "#49566A",
        myMagento: "#fc9026",
        myOrange: "#FF914D",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
