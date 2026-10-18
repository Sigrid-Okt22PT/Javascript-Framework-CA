/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#103F45",
        secondary: "#467C78",
        accent: "#D99A32",
        light: "#E9F0E9",
        background: "#FFFAF2",
      },
    },
  },
  plugins: [],
};
