/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./src/**/*.{js,jsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#9c27b0",
        secondary: "#3f51b5",
        tertiary: "#bd2fd6",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3"
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35"
      },
      screens: {
        xs: "450px"
      },
      backgroundImage: {
        "hero-bg-1": "url('../src/assets/images/blog_hero_bg_1.webp')",
        "hero-bg-2": "url('../src/assets/images/blog_hero_bg_2.webp')",
      }
    }
  },
plugins: ["tailwindcss ,autoprefixer"],
});
