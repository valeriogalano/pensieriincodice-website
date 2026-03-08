/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './themes/picnew/layouts/**/*.html',
    './layouts/**/*.html',
    './content/**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        'pod-black': '#0a0a0a',
        'pod-card':  '#141414',
        'pod-orange': '#ff6b00',
        'pod-gray':  '#a0a0a0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    }
  },
  plugins: [],
}