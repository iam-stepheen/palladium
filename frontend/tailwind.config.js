/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f4f3fa",
        textGrey: "#8B95C2",
        lightBlue: "#2C46AD",
        darkBlue: "#131521",
        orangeBurnt: "#F36A23",
        darkGreen: "#009870",
        lightGrey: "#8B95C2",
        inputBorder: "rgba(35, 56, 138, 0.2)",
        highlighted: "rgba(35, 56, 138, 0.2)",
      },
      gridTemplateColumns: {
        sidebar: "300px auto", // 👈 for sidebar layout. adds grid-cols-sidebar class
      },
      gridTemplateRows: {
        header: "64px auto", // 👈 for the navbar layout. adds grid-rows-header class
      },
    },
  },
  plugins: [],
};
