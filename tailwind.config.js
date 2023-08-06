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
        secondary: "#1F1F1F",
        offWhite: "#CFCFCF",
      },
    },
  },
  plugins: [require("daisyui")],
};
