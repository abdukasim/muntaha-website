module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "sky-blue": "#65A5E1",
        "purple-light": "#D065E1",
        "brand-gray": "#F7F4FA",
        "brand-light": "#FFFAFA",
        "brand-dark": "#191A1C",
      },
      borderWidth: {
        16: "16px",
      },
      outlineWidth: {
        16: "16px",
      },
      spacing: {
        "70px": "70px",
      },
    },
  },
  plugins: [],
};
