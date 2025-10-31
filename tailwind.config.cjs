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
        background: '#0C0C0C',
        primary: '#E53935',
        gold: '#FFD166',
        foreground: '#FFFFFF',
        muted: '#9CA3AF'
      },
      fontFamily: {
        heading: ['var(--font-poppins)'],
        body: ['var(--font-inter)']
      },
      boxShadow: {
        glow: '0 0 0 2px rgba(229,57,53,0.25), 0 10px 25px rgba(229,57,53,0.25)'
      },
      backgroundImage: {
        'red-gradient': 'linear-gradient(135deg, #FF6B6B 0%, #E53935 50%, #B71C1C 100%)',
        'gold-gradient': 'linear-gradient(135deg, #FFE29A 0%, #FFD166 60%, #FFB703 100%)'
      }
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]
};

