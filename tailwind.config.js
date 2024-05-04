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
        successlight: '#4ade80',
        primary: '#0284c7',
        primarylight: '#7dd3fc',
        secondary: '#57534e',
        secondarylight: '#a8a29e',
        danger: '#ef4444',
        dangerlight: '#f87171',
        warning: '#fcd34d',
        warninglight: '#fde68a'
      }
    },
  },
  plugins: [],
}

