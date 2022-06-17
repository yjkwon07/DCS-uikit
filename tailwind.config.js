/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        tertiary: 'var(--tertiary)',
        disabled: 'var(--disabled)',
        success: 'var(--success)',
        warning: 'var(--warning)',
        focus: 'var(--focus)',
        yellow: {
          200: '#ffe6cf',
          300: '#fedd15',
          400: '#ffc000',
        },
        select: {
          primary: 'var(--colors-select-primary)',
          secondary: 'var(--colors-select-secondary)',
        },
        svg: {
          primary: 'var(--colors-svg-primary)',
        },
        toggle: {
          primary: 'var(--colors-toggle-primary)',
          secondary: 'var(--colors-toggle-secondary)',
          icon: 'var(--colors-toggle-icon)',
          disabled: 'var(--colors-toggle-disabled)',
        },
        tab: {
          primary: 'var(--colors-tab-primary)',
          secondary: 'var(--colors-tab-secondary)',
        },
        tag: {
          primary: 'var(--colors-tag-primary)',
          secondary: 'var(--colors-tag-secondary)',
          success: 'var(--colors-tag-success)',
          warning: 'var(--colors-tag-warning)',
        },
      },
      shadow: {
        success: 'var(--shadow-success)',
        warning: 'var(--shadow-warning)',
        inset: 'var(--shadow-inset)',
        focus: 'var(--shadow-focus)',
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        disabled: 'var(--text-disabled)',
        subtle: 'var(--text-subtle)',
        select: {
          primary: 'var(--text-color-tab-primary)',
          secondary: 'var(--text-color-tab-secondary)',
          icon: 'var(--text-colors-select-icon)',
        },
        tab: {
          primary: 'var(--text-color-tab-primary)',
          secondary: 'var(--text-color-tab-secondary)',
        },
      },
      keyframes: {
        'slide-down': {
          from: {
            transform: 'translateY(-60px)',
            opacity: 0,
          },
          to: {
            transform: 'translateY(0px)',
            opacity: 1,
          },
        },
        'fade-in-up-aqua': {
          from: {
            opacity: 0,
            transform: 'translateY(20px)',
            color: 'aqua',
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
        'fade-in-left': {
          from: {
            opacity: 0,
            transform: 'translateX(30px) scaleX(1.1)',
          },
          to: {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        'slide-down': 'slide-down 0.5s both',
        'fade-in-up-aqua': 'fade-in-up-aqua 0.5s both',
        'fade-in-left': 'fade-in-left 1s cubic-bezier(0.19, 1, 0.22, 1) both',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(({ addBase, addComponents, addUtilities, theme }) => {
      addBase({});
      addComponents({
        '.example': {
          backgroundColor: theme('colors.white'),
          borderRadius: theme('borderRadius.lg'),
          padding: theme('spacing.6'),
          boxShadow: theme('boxShadow.xl'),
        },
      });
      addUtilities({
        '.z-overlay': {
          zIndex: 19,
        },
        '.z-modal': {
          zIndex: 20,
        },
      });
    }),
  ],
};
