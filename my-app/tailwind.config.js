/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ← fixed missing slash too
  ],
  theme: {
    extend: {
      colors: {
        'warm-brown': {
          2:'#efdfc4e7',
          5: '#CD9782',
          15: '#cc9a86',
          25: '#a39170',
          50: '#faf8f5',
          100: '#f5f1eb',
          200: '#e8ddd0',
          300: '#dbc9b5',
          400: '#c1a280',
          500: '#a67b4b',
          600: '#8b6339',
          700: '#6e4e2d',
          800: '#513a21',
          900: '#9A6F4D',
        },
        'sage-green' : {
          50: '#f6f8f6',
          100: '#e8ede8',
          200: '#d1dbd1',
          300: '#b0c4b0',
          400: '#8aa88a',
          500: '#6b8e6b',
          600: '#547254',
          700: '#435b43',
          800: '#364836',
          900: '#2d3c2d',
        }
      }
    },
  },
  plugins: [],
}


