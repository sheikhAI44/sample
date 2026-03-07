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
        // Dark luxury backgrounds
        charcoal: {
          950: '#06070A',  // Primary background
          900: '#0E1015',  // Secondary background
          800: '#181B22',  // Elevated surfaces
        },
        // Steel blue accent (cold, masculine)
        steel: {
          DEFAULT: '#4DB8D4',
          bright: '#6DCDE6',
          glow: 'rgba(77, 184, 212, 0.3)',
        },
        // Muted violet accent
        violet: {
          DEFAULT: '#8B7EC8',
          glow: 'rgba(139, 126, 200, 0.2)',
        },
        // Text hierarchy — WCAG AA on dark bg
        text: {
          primary: '#F0F0F0',
          secondary: '#C8D0D8',
          muted: '#8A939E',
        },
        // Border
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.07)',
          subtle: 'rgba(255, 255, 255, 0.04)',
        },
        // Semantic
        primary: '#4DB8D4',
        secondary: '#8B7EC8',
        background: '#06070A',
        foreground: '#F0F0F0',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        heading: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      animation: {
        'float-orb': 'floatOrb 24s ease-in-out infinite',
        'float-orb-delay': 'floatOrb 30s ease-in-out infinite -10s',
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'fade-in': 'fadeIn 0.7s ease-out forwards',
        'bounce-slow': 'bounceSlow 2.5s ease-in-out infinite',
      },
      keyframes: {
        floatOrb: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(22px, -22px) scale(1.04)' },
          '66%': { transform: 'translate(-16px, 16px) scale(0.96)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      boxShadow: {
        'luxury': '0 4px 28px rgba(0, 0, 0, 0.45)',
        'luxury-hover': '0 8px 36px rgba(0, 0, 0, 0.55)',
        'steel-glow': '0 0 22px rgba(91, 164, 184, 0.22)',
        'steel-glow-sm': '0 0 12px rgba(91, 164, 184, 0.16)',
        'violet-glow': '0 0 22px rgba(125, 111, 163, 0.15)',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    }
  },
  plugins: []
};
