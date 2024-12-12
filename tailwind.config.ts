module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        gray100: "#EFEFEF",
        gray200: "#e4e6df",
        green500: "#9DFF08",
        green900: "#182700",
      },
      boxShadow: {
        "curved-underline": "0px 8px 0px -2px rgba(59, 130, 246, 0.6)",
      },
      animation: {},
    },
  },
  plugins: [require("tailwindcss-animate")],
};
