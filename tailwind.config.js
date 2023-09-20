/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
     screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1200px',
    },
      fontFamily: {
      inter: ['inter', 'sans-serif'],
      ibm: ['IBM Plex Serif', 'sans-serif'],
     
    },
    extend: {
      colors: {
        "primary-100":" #252D57",
        "secondary-100": "#EFF2F5",
        "tertiary-100": "#222",
        "tertiary-200": "#555",
        "tertiary-300": "#999",
        "pink-100": "#7332CC",
        "pink-200": " #7332CC",
        "Outlet-1":"#0f5891",
        "Outlet-1.1":"#126fb6",
        "Omnifood-1":"#eea362",
        "Omnifood-1.1":"#fa9b47",
        "Omnifood-1.2": "#222222",
        "Ayat-1":"#ecd09e",
        "Ayat-1.1":"#d7b389",
        "Ayat-1.2": " #18202F",
        "Literti-100": " #7332CC",
        "Literti-200": "#5917AD",
      },
    
     
    },
  },
  plugins: [],
}