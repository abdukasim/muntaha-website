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
        "purple-dark": "#4A017D",
        "purple-text": " #2E005F",
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
        34: "135px",
        100: "400px",
        "70px": "70px",
        "78px": "78px",
        "84px": "84px",
        "88px": "88px",
        "90px": "90px",
        "113px": "113px",
        "120px": "120px",
        "140px": "140px",
        "202px": "202px",
        "282px": "282px",
        "544px": "544px",
        "621px": "621px",
        "834px": "834px",
        "938px": "938px",
      },
      fontSize: {
        tiny: "8px",
      },
      keyframes: {
        "fade-in-scale": {
          "0%": {
            opacity: "0",
            transform: "scale(0.9)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-in-scale": "fade-in-scale .5s ease-out",
        "fade-in-down": "fade-in-down .5s ease-out",
        "fade-in-up": "fade-in-up .5s ease-out",
      },
    },
  },
  plugins: [],
};
