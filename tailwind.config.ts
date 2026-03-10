import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:    ['var(--font-inter)',    'Inter',             'sans-serif'],
        display: ['var(--font-playfair)', 'Playfair Display',  'serif'],
        jakarta: ['var(--font-jakarta)',  'Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        gold: '#d4a853',
      },
      animation: {
        'whatsapp-pulse': 'whatsapp-pulse 2.2s ease-in-out infinite',
      },
      keyframes: {
        'whatsapp-pulse': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.45)' },
          '50%':       { boxShadow: '0 0 28px 10px rgba(37, 211, 102, 0.18)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
