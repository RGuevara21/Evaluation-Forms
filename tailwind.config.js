// tailwind.config.js
module.exports = {
  content: [
    "./public/**/*.html",
    "./public/**/*.js",
    // Add more file types if needed
  ],
  darkMode: "media", // or 'class'
  theme: {
    extend: {
      fontFamily: {
        Lato: ["Lato"],
        Roboto: ["Roboto"],
      },
      width: {
        15: "15%",
      },
      backgroundColor: {
        nextButton: "#1B6C8C",
      },
      textColor: {
        clearForm: "#1B6C8C",
        radioButton: "#1B6C8C",
      },
    },
  },
  variants: {},
  plugins: [],
};
