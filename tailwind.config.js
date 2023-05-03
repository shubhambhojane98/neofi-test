/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        blue: "#3387D5",
        purple: "#7A06C9",
        // black: "#0B0819",
        textinput: "#1C1731",
        cardBackgroundColor: "#181627",
      },
    },
  },
  plugins: [],
};
