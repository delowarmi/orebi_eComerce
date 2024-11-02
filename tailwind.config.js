/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navColor': '#767676',
        'navHColor': '#262626',
        'subnavColor': '#F5F5F3',
      },
      fontFamily: {
          'dm': ['DM Sans'], 
        },  
        backgroundImage: {
          'bannerImg': "url('../src/assets/Intro (1).png')",
          
        },
    },
  },
  plugins: [],
}

