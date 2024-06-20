/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    screens: {
      xs: "320px",
      sm: "375px",
      sms: "386px",
      smm: "410px",
      sml: "500px",
      md: "667px",
      mdl: "768px",
      lg: "960px",
      lgl: "1024px",
      xl: "1280px",
    },

    extend: {

      colors: {
        btn: "#FFD700",
        footer: "#27272B",
        textcol: "#000000",
        black: "#27272B",
        lightgray: "#CCD4DD",
        darkGray: "#D9D9D9",

      },

      fontFamily:{
        mon: [ "Montserrat", "sans-serif;"],
        inter: ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
}