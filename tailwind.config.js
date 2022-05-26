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
