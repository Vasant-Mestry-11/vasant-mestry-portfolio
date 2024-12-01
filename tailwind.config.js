/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "Inter", "system-ui"]
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        neutral: "var(--neutral)"
      }
    },
  },
  plugins: [],
}

