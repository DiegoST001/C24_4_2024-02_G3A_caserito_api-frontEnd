/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        header: ['Montserrat', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
        secondary: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: "#f4f4f4",
        secondary: "#a5cfbb",
        textoPincipal: "#333333",
        greenPasteOne: "#C9D991",  //botn seleccionado 
        greenPasteTwo: "#97BF95",   //hover
        greenPasteThree: "#C5D9C7",
        greenPasteFour: "#B8D9BA",
        greenPasteFive: "#E9F2EA",
      },
      // Agregar animación de temblor
      animation: {
        shake: 'shake 0.5s ease-in-out',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '50%': { transform: 'translateX(5px)' },
          '75%': { transform: 'translateX(-5px)' },
        },
      },
    },
  },
  plugins: [],
}
