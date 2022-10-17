/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pay: ["Paytone One"],
      },
      colors: {
        p1: "#2e345c",
        p2: "#57447d",
        p3: "#9b60aa",
        p4: "#f587de",
        p5: "#ffb9f4",
        p6: "#d97c00",
        p7: "#ffd345",
      },
      backgroundSize: {
        "size-200": "400% 100%",
        "size-400": "100% 200%",
        "size-500": "100% 400%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 0%",
      },
      animation:{
        'move-bg':'move-bg 8s linear infinite normal',
        'rote-bg':'rote-bg 4s linear infinite normal',
        'tt-bg':'tt-bg 100s linear infinite normal',
      },
      keyframes:{
        'move-bg':{
          '0%': { 'background-position': '0% 0%' },
          '50%': { 'background-position': '200% 0%' },
          '100%': { 'background-position': '400% 0%' },
        },
        'rote-bg':{
          '0%': { 'background-position': '0% 0%' },
          '50%': { 'background-position': '0 100%' },
          '100%': { 'background-position': '0 200%' },
        },
        'tt-bg':{
          '0%': { 'background-position': '0% 0%' },
          '50%': { 'background-position': '0% 200%' },
          '100%': { 'background-position': '0% 400%' },
        }
      },
      screens: {
        'mm': '475px',
      },
      
    },
  },
  plugins: [],
};
