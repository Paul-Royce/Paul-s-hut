/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        cartbtn: "rgb(130, 179, 0)"
      }
    },
  },
  plugins: [],
}