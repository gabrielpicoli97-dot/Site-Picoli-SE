export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#0B132B',
        gold: {
          light: '#F4C34A',
          DEFAULT: '#D4AF37',
          dark: '#AA7C11',
        },
      },
      boxShadow: {
        glow: '0 20px 80px rgba(212, 175, 55, 0.08)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top left, rgba(79,183,255,0.16), transparent 35%), radial-gradient(circle at bottom right, rgba(244,195,74,0.14), transparent 20%)',
      },
    },
  },
  plugins: [],
}
