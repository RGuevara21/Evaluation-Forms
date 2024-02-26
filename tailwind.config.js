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
      height: {
        100: "31.25rem",
      },
      backgroundColor: {
        nextButton: "#1B6C8C",
        backButton: "#000000",
        submitButton: "#FED403",
      },
      textColor: {
        clearForm: "#1B6C8C",
        clearForm2: "#FED403",
        radioButton: "#1B6C8C",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};
