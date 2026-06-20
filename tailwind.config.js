export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#040817',
        aurora: '#1f3b8d',
        electric: '#4fb7ff',
        gold: '#f4c34a',
        frost: '#e7edf9',
      },
      boxShadow: {
        glow: '0 20px 80px rgba(79, 183, 255, 0.18)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top left, rgba(79,183,255,0.16), transparent 35%), radial-gradient(circle at bottom right, rgba(244,195,74,0.14), transparent 20%)',
      },
    },
  },
  plugins: [],
}
