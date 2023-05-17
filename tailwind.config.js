/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "white": "#ffffff",
      "primary1": "#0096FF",
      "red": "#FF0000",
      "green": " #47BA68",
      "light_green": "#47ba68",
      "light_red": "#faded3",
      "bg_gray": "#BEBEBE"
    },

    extend: {
      backgroundImage: {
        'hero-pattern': "url('./Resource/hero_section_bg.png')",
      }
    },
  },
  plugins: [],
}

