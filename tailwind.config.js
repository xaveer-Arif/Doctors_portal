/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        DoctorsPortal: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  // plugins: [require("@tailwindcss/typography"), require("daisyui")],
  plugins: [require("daisyui")],
}



