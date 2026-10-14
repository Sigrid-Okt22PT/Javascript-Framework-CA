/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#103F45",
        secondary: "#168A8A",
        accent: "#FF8068",
        light: "#E5F5F1",
        background: "#FFF9F3",
      },
    },
  },
  plugins: [],
};
