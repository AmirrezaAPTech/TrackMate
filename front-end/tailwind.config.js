/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 1px 20px 0 rgba(125, 43, 196, 1)',
      },
    },
  },
  plugins: [],
}

