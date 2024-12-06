/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Sora: ["Sora"]
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        neutral: "var(--neutral)",
        medium: "var(--medium)",
        "zinc-700": "var(--zinc-700)",
        "zinc-500": "var(--zinc-500)",
      }
    },
  },
  plugins: [],
}

