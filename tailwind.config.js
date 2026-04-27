/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bat-black': '#0a0a0f',
        'bat-dark': '#0d0d1a',
        'bat-gray': '#1a1a2e',
        'bat-gray-2': '#16213e',
        'bat-yellow': '#f5c518',
        'bat-gold': '#ffd700',
        'bat-amber': '#f59e0b',
        'bat-cyan': '#00f5ff',
        'bat-purple': '#6b21a8',
        'bat-red': '#dc2626',
        'bat-steel': '#374151',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'monospace'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        'mono-tech': ['Share Tech Mono', 'monospace'],
      },
      boxShadow: {
        'neon-yellow': '0 0 15px rgba(245, 197, 24, 0.6), 0 0 40px rgba(245, 197, 24, 0.3)',
        'neon-yellow-lg': '0 0 30px rgba(245, 197, 24, 0.8), 0 0 60px rgba(245, 197, 24, 0.5), 0 0 100px rgba(245, 197, 24, 0.2)',
        'neon-cyan': '0 0 15px rgba(0, 245, 255, 0.6), 0 0 40px rgba(0, 245, 255, 0.3)',
        'neon-cyan-lg': '0 0 30px rgba(0, 245, 255, 0.8), 0 0 60px rgba(0, 245, 255, 0.5)',
        'neon-red': '0 0 15px rgba(220, 38, 38, 0.6), 0 0 40px rgba(220, 38, 38, 0.3)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.6)',
        'card-hover': '0 20px 60px rgba(0, 0, 0, 0.8)',
        'inner-glow': 'inset 0 0 30px rgba(245, 197, 24, 0.05)',
      },
      backgroundImage: {
        'bat-gradient': 'linear-gradient(135deg, #0a0a0f 0%, #0d0d1a 50%, #1a1a2e 100%)',
        'yellow-gradient': 'linear-gradient(135deg, #f5c518, #ffd700)',
        'cyan-gradient': 'linear-gradient(135deg, #00f5ff, #0ea5e9)',
        'hero-gradient': 'radial-gradient(ellipse at 50% 0%, rgba(245, 197, 24, 0.15) 0%, transparent 70%), linear-gradient(180deg, #0a0a0f 0%, #0d0d1a 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(26, 26, 46, 0.8), rgba(10, 10, 15, 0.9))',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'spin-reverse': 'spin 12s linear infinite reverse',
        'flicker': 'flicker 5s infinite',
        'scanline': 'scanline 4s linear infinite',
        'fadeInUp': 'fadeInUp 0.8s ease-out forwards',
        'radar': 'radar-sweep 4s linear infinite',
        'matrix-fall': 'matrix-fall 3s linear infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'flicker': {
          '0%, 94%, 96%, 100%': { opacity: '1' },
          '95%': { opacity: '0.3' },
        },
        'fadeInUp': {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        'scanline': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'radar-sweep': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
