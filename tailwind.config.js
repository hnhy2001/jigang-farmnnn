/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#544870",
        danger: "#FF4444",
        warning: "#FFC87D",
      },
      backgroundColor: {
        primary: "#544870",
        danger: "#FF4444",
        warning: "#FFC87D",
      },
      borderColor: {
        primary: "#544870",
        danger: "#FF4444",
        warning: "#FFC87D",
      },
      fontWeight: {
        200: 200,
        300: 300,
        400: 400,
        500: 500,
        600: 600,
        700: 700,
      },
      width: {
        30: "30%",
        70: "70%",
        75: "75%",
      },
      minWidth: {
        30: "30%",
        70: "70%",
        75: "75%",
      },
      fontFamily: {
        "helvetica-neue": "Helvetica Neue",
      },
    },
  },
  plugins: [],
};

