/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#f1472d",
          100: "#F6B17A",
          DEFAULT: "#EB715D",
        },
        secondary: {
          DEFAULT: "#01294D",
          100: "#F0F8FC",
          500: "#626687",
          700: "#1B1C57",
        },
        neutral: {
          DEFAULT: "#888B97",
          500: "#626687",
          700: "#1B1C57",
        },
      
        third: {
          DEFAULT: "#1F2937",
          500: "#626687",
          700: "#F1F5F9",
        },
        white: {
          100: "#F8F6FD",
          200: "#F8F9FA",
          DEFAULT:"#fff"
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};

// #01294D
// #F0F8FC