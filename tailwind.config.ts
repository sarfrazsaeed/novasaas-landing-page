import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B1023',
          50: '#F4F5F9',
          100: '#E4E6F0',
          200: '#C7CADD',
          300: '#9CA1C0',
          400: '#6B7099',
          500: '#454A75',
          600: '#2E3358',
          700: '#1E2240',
          800: '#141833',
          900: '#0B1023',
          950: '#070A17',
        },
        brand: {
          50: '#EEF0FF',
          100: '#E0E3FF',
          200: '#C5CAFF',
          300: '#A3A9FF',
          400: '#7C81F5',
          500: '#4F46E5',
          600: '#4338CA',
          700: '#3730A3',
          800: '#312E81',
          900: '#251F5C',
        },
        violet: {
          500: '#7C3AED',
          600: '#6D28D9',
        },
        spark: {
          DEFAULT: '#F5B400',
          light: '#FFD666',
          dark: '#C98A00',
        },
        surface: {
          light: '#F8FAFC',
          dark: '#0F172A',
        },
      },
      fontFamily: {
        display: ['"Sora"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      backgroundImage: {
        'mesh-glow':
          'radial-gradient(60% 50% at 80% 0%, rgba(124,58,237,0.35) 0%, rgba(124,58,237,0) 60%), radial-gradient(50% 40% at 10% 10%, rgba(79,70,229,0.35) 0%, rgba(79,70,229,0) 60%), radial-gradient(40% 40% at 50% 100%, rgba(245,180,0,0.12) 0%, rgba(245,180,0,0) 60%)',
        'grid-pattern':
          'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '40px 40px',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(124,58,237,0.15), 0 8px 30px -8px rgba(79,70,229,0.45)',
        card: '0 1px 2px 0 rgba(15,23,42,0.04), 0 1px 3px 1px rgba(15,23,42,0.04)',
      },
      animation: {
        'spin-slow': 'spin 14s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
