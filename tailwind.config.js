module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myBlue: "#3e4959",
        myOrange: "#ef7474",
      },
      maxWidth: {},
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
