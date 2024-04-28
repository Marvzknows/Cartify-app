/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark:'#030712',
        light: '#e2e8f0',
        lighter: '#f3f4f6',
        success: '#16a34a',
        primary: '#0284c7',
        secondary: '#57534e',
        danger: '#ef4444',
      }
    },
  },
  plugins: [],
}

