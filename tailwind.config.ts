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
        display: ['Playfair Display', 'serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
      colors: {
        bg: {
          base: '#0a0c0f',
          surface: '#111418',
          card: '#161b22',
        },
        text: {
          primary: '#f8f9fa',
          secondary: '#8b949e',
        },
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'whatsapp-pulse': 'whatsapp-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        'whatsapp-pulse': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.4)' },
          '50%': { boxShadow: '0 0 30px 10px rgba(37, 211, 102, 0.2)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
