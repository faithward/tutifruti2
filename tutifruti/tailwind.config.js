/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/pages/**/*.{js,ts,jsx,tsx,mdx}',
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
      backgroundImage: {
        'skaterguy': "url('/skaterguy.png')",
        'blueSquare': "url('/gallery/blueshape.svg')",
        'sendbutton': "url('/sendbutton.svg')",
        'skatergirl' : "url('/gallery/skatergirl.jpg')",
        'wpb' : "url('/gallery/wpb_clinic.png')",
        'haulover' : "url('/gallery/haulovergroup.png')",
        'shop' : "url('/shop.png')",
        'smallshop' : "url('/gallery/smallshop.png')",
        'blue350' : "url('/gallery/blue350.png')",
        'blue350B' : "url('/gallery/blue350B.png')",
        'blue704' : "url('/gallery/blue704.png')",
        'longBlue' : "url('/gallery/longBlue.svg')",
        'lotStretch' : "url('/gallery/brighter.png')"
      },
      backgroundSize: {
        '3/4': '75%',
        '1/2': '50%',
      },
      fontFamily: {
        'tutifruti' : ["TUTIFRUTI", "cursive"],
        'default' : ["Nunito_Sans", "sans-serif"]
      },
      height: {
        '128': '32rem',
      },
      width: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
