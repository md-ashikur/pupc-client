/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#f1472d",
          DEFAULT: "#EB715D",
        },
        secondary: {
          DEFAULT: "#604CC3",
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
          700: "#1B1C57",
        },
        base: "#fff",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
