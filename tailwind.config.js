/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // custom fonts
        Display: ["Red Hat Display", "sans - serif"],
        Montserrat: ["Montserrat", "sans - serif"],
        Unica: ["Unica One", "cursive"],
      },
      height: {
        "calc-vh": "calc(100vh - 70px)",
      },
      colors: {
        // custom colors
        // secondary: "#2196F3",
        primary: "#FFF",
        white75: "rgba(255, 255, 255, 0.75)",
        normalPurple: "rgba(144, 58, 255, 1)",
        darkPurple: "rgba(21, 14, 40, 1)",
        lightPurple: "rgba(212, 52, 254, 1)",
        pink: "rgba(255, 38, 185, 1)",
        black50: "rgba(0,0,0,0.8)",
      },
      screens: {
        // custom screen sizes
        xs: "320px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        // xl: "1280px",
      },
    },
  },
  plugins: [],
};
