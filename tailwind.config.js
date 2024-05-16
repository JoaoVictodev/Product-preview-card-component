const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        "a-main": "28.125rem",
        "a-img-mobile": "15rem",
        "a-content-mobile": "23.125rem",
        "l-main": "37.5rem",
        "l-mobile": "21.563rem",
      },
      colors: {
        "Dark-cyan": "hsl(158, 36%, 37%)",
        "hover-main": "#1a4031",
        Cream: "#f2ebe3",
        "Very-dark-blue": "hsl(212, 21%, 14%)",
        "Dark-grayish-blue": "hsl(228, 12%, 48%)",
        "White-main": "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        montserrat: ["Montserrat, sans-serif"],
        fraunces: ["Fraunces, sans-serif"],
      },
      letterSpacing: {
        widest: "0.188rem",
        "tracking-tighter": "3px",
      },
      backgroundImage: ["after"],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".bg-img-after": {
            content: '""',
            position: "absolute",
            top: "17px",
            left: "45px",
            width: "15px",
            height: "16px",
            "background-image": "url('../images/icon-cart.svg')",
            "background-size": "cover",
            "background-position": "center",
          },
        },
        ["after"]
      );
    },
  ],
};
