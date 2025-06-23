/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f8ff",
          100: "#e0f2fe",
          500: "#006b5f",
          600: "#005a50",
          700: "#004a42",
        },
        gray: {
          50: "#f7f9fa",
          100: "#ebeff2",
          200: "#e3eae7",
          300: "#d9d9d9",
          400: "#9d9d9d",
          500: "#666666",
          600: "#3f4947",
          700: "#272727",
          800: "#1a1a1a",
          900: "#000000",
        },
        success: {
          50: "#f0fdf4",
          500: "#22c55e",
        },
        warning: {
          50: "rgba(255,105,97,0.06)",
          500: "#ffae00",
        },
        danger: {
          500: "#e94545",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
