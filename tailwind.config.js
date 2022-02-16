const { color } = require("@mui/system");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      blue: colors.blue,
      slate: colors.slate,
      red: colors.red,
      pink: colors.pink,
      rose: colors.rose,
      orange: colors.orange,
      lime: colors.lime,
      green: colors.green,
      violet: colors.violet,
      "blue-dark": "#303654",
      "blue-dark-2": "#232842",
      overlay: "rgba(0, 0, 0,0.8)",
    },
  },
  plugins: [],
};
