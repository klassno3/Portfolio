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
       keyframes: {
        circle: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
        animation: {
        'circle': 'circle 3s linear infinite',
      },
      colors: {
        "primary-100":" #252D57",
        "secondary-100": "#EFF2F5",
        "secondary-200": "#F9F9F9",
        "tertiary-100": "#222",
        "tertiary-200": "#555",
        "tertiary-300": "#999",
        "pink-100": "#F72D93",
        "pink-200": " #F72D93",
        "Outlet-1":"#0f5891",
        "Outlet-1.1":"#126fb6",
        "BluLabs-1":"#4Ab2c2",
        "Omnifood-1":"#E95620",
        "Omnifood-1.1":"#fa9b47",
        "Omnifood-1.2": "#222222",
        "Ayat-1":"#192231",
        "Ayat-1.1":"#d7b389",
        "Ayat-1.2": " #18202F",
        "Literti-100": " #7332CC",
        "Literti-200": "#5917AD",
      },
    
     
    },
  },
  plugins: [],
}