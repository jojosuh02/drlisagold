import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}', './src/content/**/*.mdx'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fbf5ec',
          100: '#f6ead5',
          200: '#eed5ac',
          300: '#e7c38a',
          400: '#e1b77e',
          500: '#d9a564',
          600: '#b8874c',
          700: '#94693a',
          800: '#6e4e2a',
          900: '#483419',
        },
        teal: {
          50: '#e6f7f9',
          100: '#c1ebef',
          200: '#82d6dd',
          300: '#4bc0ca',
          400: '#1eabb8',
          500: '#00a4b6',
          600: '#008594',
          700: '#006572',
          800: '#004951',
          900: '#002f34',
        },
        navy: {
          50: '#eaecf3',
          100: '#c7cbdb',
          200: '#8e96b6',
          300: '#556293',
          400: '#323e75',
          500: '#1c244b',
          600: '#171d3d',
          700: '#11172f',
          800: '#0c1021',
          900: '#070916',
        },
        cream: {
          50: '#fdfaf5',
          100: '#fcf4ee',
          200: '#f6e6d4',
          300: '#eed5b3',
        },
        ivory: {
          DEFAULT: '#fcfcf4',
          50: '#fdfdf7',
        },
        mist: '#f3f5f8',
        ink: {
          900: '#000000',
          800: '#1a1a1a',
          700: '#333333',
          600: '#555555',
          500: '#707070',
        },
      },
      fontFamily: {
        display: ['var(--font-poppins)', 'Poppins', 'Arial', 'sans-serif'],
        sans: ['var(--font-montserrat)', 'Montserrat', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'hero-wordmark-sm': ['2.25rem', { lineHeight: '1.1', letterSpacing: '0.08em' }],
        'hero-wordmark': ['4.5rem', { lineHeight: '1', letterSpacing: '0.1em' }],
      },
      maxWidth: {
        prose: '68ch',
      },
      backgroundImage: {
        'hero-lisa': "url('/img/hero-lisa-gold.png')",
        'book-bg': "url('/img/book-cover-ketamine-curious.webp')",
      },
    },
  },
  plugins: [],
};

export default config;
