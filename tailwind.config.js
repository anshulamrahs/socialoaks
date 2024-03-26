/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      backgroundImage: {
        'mask': "bg-[#ec4e39],url(../assets/masks.svg)"
      },
      fontFamily:{
       body: ["Montserrat"]
      }
    },
  },
  plugins: [],
}

