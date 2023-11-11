/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        grey: {
          1: '#ECEEEF',
          2: '#DDDDDD',
          3: '#818A91',
          4: '#777777',
          5: '#55595C',
          6: '#373A3C',
        },
        blue: {
          1: '#1C7CD5',
          2: '#56C0E0',
        },
        red: {
          1: '#D9534F',
        },
        green: {
          1: '#5CB85C',
        },
        yellow: {
          1: '#F0AD4E',
        },
      },
    },
  },
  plugins: [],
}
