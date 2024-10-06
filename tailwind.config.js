/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./Component/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#161622",
        secondary: {
          DEFAULT: "#FF9C01",
          100: "#FF9001",
          200: "#FF8E01",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        Maingray: "#505960",
        gray:"#333333",
        gray2:"#DBDBDB",
        lightGray:"#F3F2F2",
        textBrown:"#3A2303",
        OffersPink:"#DE035F"

      },
      fontFamily: {
        pop: ["Poppins-Thin", "sans-serif"],
        CroissantOne: ["CroissantOne", "sans-serif"],
        CeraProLight: ["CeraPro-Light", "sans-serif"],
        CeraPro: ["CeraPro-Regular", "sans-serif"],
        CeraProMedium: ["CeraPro-Medium", "sans-serif"],
        CeraProBold: ["CeraPro-Bold", "sans-serif"],
        // CeraProMedium: ["CeraPro-Medium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
