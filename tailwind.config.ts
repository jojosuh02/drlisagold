import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{ts,tsx,mdx}',
    './src/content/**/*.mdx',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#faf6ee',
          100: '#f4ecd8',
          200: '#e8d9b0',
          300: '#dcc589',
          400: '#d0b061',
          500: '#b89142',
          600: '#9a7834',
          700: '#7b5e28',
          800: '#5d461c',
          900: '#3e2f13',
        },
        cream: {
          50: '#fdfbf6',
          100: '#f8f1e0',
          200: '#f1e6c9',
        },
        turquoise: {
          500: '#3aafa9',
          600: '#2b8f8a',
          700: '#1f6e6a',
        },
        ink: {
          900: '#1a1a1a',
          800: '#2c2c2c',
          700: '#3f3f3f',
          600: '#555555',
          500: '#6b6b6b',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
};

export default config;
