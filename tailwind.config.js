/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'jost': 'Jost'
    },
    
    extend: {
      colors: {
        "primary":"#FFE6AD",
        secondary:"#6C63FF",
        heading: "#383838",
        body: "#545454",
        'orange': {
          100:"#FFF9F1",
          300: "#FFEAD0",
          500: "#FED29C",

        },
        'rose':{
          100: "#FFF1F2",
          300: "#FFC3C6",
          500: '#EE8388',

        }
      }
    },
  },
  plugins: [],
}