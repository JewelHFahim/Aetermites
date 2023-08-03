/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      dancingScript: ["Dancing Script", "cursive"],
      inter: ["Inter", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },

    extend: {
      colors: {
        primary: "#E39A59",
        bgSecondary: "#191919",
        bgOffWhite: "#EFEFEF",
      },
    },
  },
  plugins: [require("daisyui")],
};
