const { heroui } = require('@heroui/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          bg: 'var(--color-warm-bg)',
          surface: 'var(--color-warm-surface)',
          text: 'var(--color-warm-text)',
          subtext: 'var(--color-warm-subtext)',
          accent: 'var(--color-warm-accent)',
          'accent-hover': 'var(--color-warm-accent-hover)',
          border: 'var(--color-warm-border)',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        heading: ['var(--font-heading)'],
        mono: ['var(--font-mono)'],
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
};
