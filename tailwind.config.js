/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        bg: '#0a0a1a',
        'bg-2': '#0f0f2d',
        'bg-variant': 'rgba(255, 255, 255, 0.04)',
        primary: '#5b8dee',
        'primary-2': '#7c5cbf',
        'primary-variant': 'rgba(91, 141, 238, 0.25)',
        'primary-glow': 'rgba(91, 141, 238, 0.15)',
        accent: '#a78bfa',
        light: 'rgba(255, 255, 255, 0.55)',
        lighter: 'rgba(255, 255, 255, 0.75)',
      },
      fontFamily: {
        primary: ['"Space Grotesk"', 'sans-serif'],
        secondary: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #5b8dee, #a78bfa)',
        'gradient-glow': 'linear-gradient(135deg, rgba(91,141,238,0.3), rgba(167,139,250,0.3))',
        'gradient-dark': 'linear-gradient(180deg, #0a0a1a 0%, #0f0f2d 100%)',
      },
      boxShadow: {
        'primary': '0 8px 30px rgba(91, 141, 238, 0.25)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
      },
      transitionDuration: {
        '400': '400ms',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease infinite',
        'spin-slow': 'spin-slow 12s linear infinite',
        'spin-slow-reverse': 'spin-slow 8s linear infinite reverse',
        'blink': 'blink 1s step-end infinite',
        'count-up': 'count-up 0.5s ease',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(91, 141, 238, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(91, 141, 238, 0.6)' },
        },
        'spin-slow': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'count-up': {
          'from': { opacity: '0', transform: 'translateY(10px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
