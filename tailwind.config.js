/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",  // scan files under src/app
    "./src/pages/**/*.{js,ts,jsx,tsx}", // if you have pages folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
