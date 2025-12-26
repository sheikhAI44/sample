/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Futuristic navy/indigo backgrounds
        navy: {
          900: '#0B1020',
          800: '#141A3A',
          700: '#1E2A4A',
          600: '#283454',
          500: '#323E5E',
        },
        // Electric blue
        electric: {
          DEFAULT: '#3A6FF7',
          light: '#5B8AF8',
          dark: '#2856E6',
        },
        // Violet/purple
        violet: {
          DEFAULT: '#7A4DFF',
          light: '#9B6FFF',
          dark: '#5A2EE5',
        },
        // Neon pink/magenta
        neon: {
          DEFAULT: '#E879F9',
          pink: '#F472D0',
          light: '#F0ABFC',
          dark: '#D946EF',
        },
        // Text colors
        text: {
          primary: '#EDE9FF',
          secondary: '#C4B5FD',
          muted: '#9CA3AF',
        },
        // Legacy colors for compatibility
        accent: {
          DEFAULT: '#E879F9',
          light: '#F0ABFC',
          dark: '#D946EF',
          glow: 'rgba(232, 121, 249, 0.4)',
        },
        background: '#0B1020',
        primary: '#E879F9',
        foreground: '#EDE9FF',
        muted: '#C4B5FD',
      },
      fontFamily: {
        heading: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'bounce-slow': 'bounceSlow 2s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5', filter: 'blur(40px)' },
          '50%': { opacity: '0.8', filter: 'blur(60px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(232, 121, 249, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(232, 121, 249, 0.6)' },
        },
        'glow-blue': {
          '0%': { boxShadow: '0 0 20px rgba(58, 111, 247, 0.4)' },
          '100%': { boxShadow: '0 0 40px rgba(58, 111, 247, 0.6)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0B1020 0%, #1E2A4A 50%, #0B1020 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(30, 42, 74, 0.5) 0%, rgba(11, 16, 32, 0.8) 100%)',
        'brand-gradient': 'linear-gradient(135deg, #3A6FF7, #7A4DFF, #E879F9)',
        'button-gradient': 'linear-gradient(135deg, #E879F9, #7A4DFF)',
        'text-gradient': 'linear-gradient(135deg, #EDE9FF 0%, #F0ABFC 50%, #E879F9 100%)',
        'accent-glow': 'radial-gradient(ellipse at center, rgba(122, 77, 255, 0.15) 0%, transparent 70%)',
        'neon-glow': 'radial-gradient(ellipse at center, rgba(232, 121, 249, 0.2) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(232, 121, 249, 0.3)',
        'glow-lg': '0 0 60px rgba(232, 121, 249, 0.4)',
        'glow-blue': '0 0 40px rgba(58, 111, 247, 0.3)',
        'glow-blue-lg': '0 0 60px rgba(58, 111, 247, 0.4)',
        'glow-violet': '0 0 40px rgba(122, 77, 255, 0.3)',
        'card': '0 4px 30px rgba(0, 0, 0, 0.3)',
        'neon': '0 0 20px rgba(232, 121, 249, 0.5), 0 0 40px rgba(232, 121, 249, 0.3)',
      },
    }
  },
  plugins: []
};
