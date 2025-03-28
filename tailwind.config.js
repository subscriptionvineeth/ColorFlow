/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 10px -3px rgba(0, 0, 0, 0.1), 0 1px 3px -2px rgba(0, 0, 0, 0.05)',
        'soft-md': '0 4px 20px -5px rgba(0, 0, 0, 0.12), 0 2px 6px -2px rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 10px 30px -5px rgba(0, 0, 0, 0.15), 0 4px 10px -3px rgba(0, 0, 0, 0.05)',
        'soft-xl': '0 15px 50px -10px rgba(0, 0, 0, 0.2), 0 5px 15px -5px rgba(0, 0, 0, 0.05)',
      },
      borderRadius: {
        'xl': '0.9rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.5rem',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      blur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
};
