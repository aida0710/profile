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
        bg: 'var(--color-bg)',
        bg2: 'var(--color-bg2)',
        ink: 'var(--color-ink)',
        sub: 'var(--color-sub)',
        faint: 'var(--color-faint)',
        line: 'var(--color-line)',
        line2: 'var(--color-line2)',
        plus: 'var(--color-plus)',
        ok: 'var(--color-ok)',
      },
      fontFamily: {
        // 欧文は Geist、和文は Noto Sans JP に落とす。
        sans: ['var(--font-sans)', 'var(--font-sans-jp)', 'sans-serif'],
        mono: ['var(--font-mono)', 'var(--font-sans-jp)', 'monospace'],
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
};
