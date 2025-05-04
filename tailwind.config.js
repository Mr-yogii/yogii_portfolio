/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'rgb(230, 241, 255)',
          100: 'rgb(204, 228, 255)',
          200: 'rgb(153, 201, 255)',
          300: 'rgb(102, 175, 255)',
          400: 'rgb(51, 148, 255)',
          500: 'rgb(10, 132, 255)',
          600: 'rgb(8, 106, 204)',
          700: 'rgb(6, 79, 153)',
          800: 'rgb(4, 53, 102)',
          900: 'rgb(2, 26, 51)',
        },
        secondary: {
          50: 'rgb(230, 249, 237)',
          100: 'rgb(204, 243, 219)',
          200: 'rgb(153, 232, 183)',
          300: 'rgb(102, 220, 146)',
          400: 'rgb(51, 209, 110)',
          500: 'rgb(48, 209, 88)',
          600: 'rgb(38, 167, 70)',
          700: 'rgb(29, 125, 53)',
          800: 'rgb(19, 84, 35)',
          900: 'rgb(10, 42, 18)',
        },
        accent: {
          50: 'rgb(245, 235, 250)',
          100: 'rgb(235, 214, 246)',
          200: 'rgb(214, 174, 237)',
          300: 'rgb(194, 133, 228)',
          400: 'rgb(173, 92, 219)',
          500: 'rgb(191, 90, 242)',
          600: 'rgb(153, 72, 194)',
          700: 'rgb(115, 54, 145)',
          800: 'rgb(76, 36, 97)',
          900: 'rgb(38, 18, 48)',
        },
        success: 'rgb(48, 209, 88)',
        warning: 'rgb(255, 159, 10)',
        error: 'rgb(255, 69, 58)',
        background: 'rgb(0, 0, 20)',
        foreground: 'rgb(230, 230, 250)',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'neon-blue': '0 0 5px rgba(10, 132, 255, 0.8), 0 0 10px rgba(10, 132, 255, 0.5)',
        'neon-green': '0 0 5px rgba(48, 209, 88, 0.8), 0 0 10px rgba(48, 209, 88, 0.5)',
        'neon-purple': '0 0 5px rgba(191, 90, 242, 0.8), 0 0 10px rgba(191, 90, 242, 0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
    },
  },
  plugins: [],
};