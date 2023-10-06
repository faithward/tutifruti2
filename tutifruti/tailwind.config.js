/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'lightblue' : '#98d1d4',
      'darkblue' : '#6c989a',
      'lightred' : '#c65b51',
      'darkred' : '#85433c',
      'yellow' : '#f6c653',
      'brown' : '#876c28',
      'tan' : '#cfbf99',
      'white' : '#ffffff',
      'black' : '#0f0a0a',
    },
    extend: {
    },
  },
  plugins: [],
}
