/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        'pod-black': 'rgb(var(--pod-black) / <alpha-value>)',
        'pod-card':  'rgb(var(--pod-card) / <alpha-value>)',
        'pod-orange': '#ff6b00',
        'pod-gray':  'rgb(var(--pod-gray) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    }
  },
  plugins: [],
}