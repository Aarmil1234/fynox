/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        foreground: "#ffffff",
        amber: "#fbbf24",
        card: "#111111",
        muted: {
          foreground: "#a1a1aa",
        },
      },
    },
  },
  plugins: [],
}