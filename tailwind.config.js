/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        tick: 'tick 1s linear infinite',
      },
      keyframes: {
        tick: {
          '0%': {
            background: '#F80817',
          },
          '100%': {
            background: '#1b1b1b',
          },
        },
      },
    },
  },
  plugins: [],
}
