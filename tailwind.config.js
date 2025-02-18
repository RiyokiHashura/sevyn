/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-black': '#080F1C',
        'midnight-blue': '#0C162D',
        'neon-green': '#00FF9F',
        'alien-cyan': '#30D5C8',
        'alien-lime': '#B4F400',
        'alien-silver': '#A0A0A0',
        'gunmetal': '#2E2E2E',
      },
    },
  },
  plugins: [],
} 