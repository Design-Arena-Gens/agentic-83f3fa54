/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cyber-blue': '#00d4ff',
        'cyber-purple': '#b300ff',
        'cyber-pink': '#ff006e',
        'cyber-dark': '#0a0a0f',
        'cyber-darker': '#05050a',
      },
      backgroundImage: {
        'gradient-cyber': 'linear-gradient(135deg, #00d4ff 0%, #b300ff 50%, #ff006e 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0a0a0f 0%, #05050a 100%)',
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(0, 212, 255, 0.5)',
        'neon-purple': '0 0 20px rgba(179, 0, 255, 0.5)',
        'neon-pink': '0 0 20px rgba(255, 0, 110, 0.5)',
      },
    },
  },
  plugins: [],
}
