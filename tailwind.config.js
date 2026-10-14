/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#001D4A",
        yellow: "#ECA400",
        lime: "#EAF8BF",
        slate: "#27476E",
        teal: "#006992",
      },
    },
  },
  plugins: [],
};
