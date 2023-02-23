/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      softOrange: "hsl(35, 77%, 62%)",
      softRed: "hsl(5, 85%, 63%)",
      offWhite: "hsl(36, 100%, 99%)",
      grayishBlue: "hsl(233, 8%, 79%)",
      darkGrayishBlue: "hsl(236, 13%, 42%)",
      veryDarkBlue: "hsl(240, 100%, 5%)",
    },
    extend: {
      fontWeight: {
        regular: "400",
        bold: "700",
        extraBold: "800",
      },
      screens: {
        smMax: { max: "640px" },
        md: "1000px",
        lg: "1400px",
      },
      gridTemplateRows: {
        minContent: "",
        mainArticle: "min-content",
      },
      gridTemplateColumns: {
        "2.5fr/1fr": "1fr 1fr 1fr",
        midScreen: "1fr 1fr 2fr",
        // "2.5fr/1fr": "2fr 1fr",
      },
    },
  },
  plugins: [],
};
