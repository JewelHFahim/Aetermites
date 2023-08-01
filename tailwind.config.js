/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      jaldi: ["Jaldi", "sans-serif"],
    },

    extend: {
      colors: {
        bgPrimary: "#131313",
        bgSecondary: "#191919",
        bgOffWhite: "#EFEFEF",
      },
    },
  },
  plugins: [],
};
