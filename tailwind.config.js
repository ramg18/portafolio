/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{html,ts}", // si es Angular
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A", // azul elegante
        secondary: "#9333EA", // violeta vibrante
        accent: "#FACC15", // amarillo
        dark: "#0F172A", // gris oscuro
        light: "#F8FAFC", // gris claro
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.1)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
