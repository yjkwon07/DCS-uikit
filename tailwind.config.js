/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        tertiary: 'var(--tertiary)',
        disabled: 'var(--disabled)',
        success: 'var(--success)',
        warning: 'var(--warning)',
        focus: 'var(--focus)',
        button: {
          primary: 'var(--colors-button-primary)',
          tertiary: 'var(--colors-button-tertiary)',
          disabled: 'var(--colors-button-disabled)',
        },
        checkbox: {
          primary: 'var(--colors-checkbox-primary)',
          secondary: 'var(--colors-checkbox-secondary)',
          disabled: 'var(--colors-checkbox-disabled)',
        },
        input: {
          primary: 'var(--colors-input-primary)',
          disabled: 'var(--colors-input-disabled)',
          icon: 'var(--colors-input-icon)',
        },
        modal: {
          primary: 'var(--colors-modal-primary)',
        },
        menu: {
          primary: 'var(--colors-menu-primary)',
          secondary: 'var(--colors-menu-secondary)',
          divide: 'var(--colors-menu-divide)',
        },
        overlay: {
          primary: 'var(--colors-overlay-primary)',
        },
        radio: {
          primary: 'var(--colors-radio-primary)',
          secondary: 'var(--colors-radio-secondary)',
          disabled: 'var(--colors-radio-disabled)',
          handle: 'var(--colors-radio-handle)',
        },
        radioGroup: {
          primary: 'var(--colors-radioGroup-primary)',
          secondary: 'var(--colors-radioGroup-secondary)',
          disabled: 'var(--colors-radioGroup-disabled)',
          icon: {
            disabled: 'var(--colors-radioGroup-icon-disabled)',
          },
        },
        select: {
          primary: 'var(--colors-select-primary)',
          secondary: 'var(--colors-select-secondary)',
          disabled: 'var(--colors-select-disabled)',
          icon: 'var(--colors-select-icon)',
          active: 'var(--colors-select-active)',
          selected: 'var(--colors-select-selected)',
        },
        svg: {
          primary: 'var(--colors-svg-primary)',
        },
        toggle: {
          primary: 'var(--colors-toggle-primary)',
          secondary: 'var(--colors-toggle-secondary)',
          disabled: 'var(--colors-toggle-disabled)',
          handle: 'var(--colors-toggle-handle)',
          icon: {
            primary: {
              start: 'var(--colors-toggle-icon-primary-start)',
              end: 'var(--colors-toggle-icon-primary-end)',
            },
            secondary: {
              start: 'var(--colors-toggle-icon-secondary-start)',
              end: 'var(--colors-toggle-icon-secondary-end)',
            },
            disabled: 'var(--colors-toggle-icon-disabled)',
          },
        },
        tab: {
          primary: 'var(--colors-tab-primary)',
          secondary: 'var(--colors-tab-secondary)',
        },
        tag: {
          primary: 'var(--colors-tag-primary)',
          secondary: 'var(--colors-tag-secondary)',
          disabled: 'var(--colors-tag-disabled)',
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
        button: {
          primary: 'var(--text-colors-button-primary)',
          secondary: 'var(--text-colors-button-secondary)',
          tertiary: 'var(--text-colors-button-tertiary)',
          disabled: 'var(--text-colors-button-disabled)',
        },
        input: {
          primary: 'var(--text-colors-input-primary)',
          disabled: 'var(--text-colors-input-disabled)',
        },
        modal: {
          title: 'var(--text-colors-modal-title)',
          description: 'var(--text-colors-modal-description)',
        },
        menu: {
          primary: 'var(--text-colors-menu-primary)',
          secondary: 'var(--text-colors-menu-secondary)',
        },
        radioGroup: {
          label: {
            primary: 'var(--text-colors-radioGroup-label-primary)',
            secondary: 'var(--text-colors-radioGroup-label-secondary)',
          },
          description: {
            primary: 'var(--text-colors-radioGroup-description-primary)',
            secondary: 'var(--text-colors-radioGroup-description-secondary)',
          },
          disabled: 'var(--text-colors-radioGroup-disabled)',
        },
        select: {
          primary: 'var(--text-colors-select-primary)',
          secondary: 'var(--text-colors-select-secondary)',
          active: 'var(--text-colors-select-active)',
          selected: 'var(--text-colors-select-selected)',
          disabled: 'var(--text-colors-select-disabled)',
        },
        tab: {
          primary: 'var(--text-colors-tab-primary)',
          secondary: 'var(--text-colors-tab-secondary)',
        },
        tag: {
          disabled: 'var(--text-colors-tag-disabled)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(({ addBase, addComponents, addUtilities }) => {
      addBase({});
      addComponents({});
      addUtilities({
        '.z-overlay': {
          zIndex: 19,
        },
        '.z-select-options': {
          zIndex: 18,
        },
        '.z-modal': {
          zIndex: 20,
        },

        '.ring-shadow-success': {
          boxShadow: 'var(--shadow-success)',
        },
        '.ring-shadow-warning': {
          boxShadow: 'var(--shadow-warning)',
        },
        '.ring-shadow-inset': {
          boxShadow: 'var(--shadow-inset)',
        },
        '.ring-shadow-focus': {
          boxShadow: 'var(--shadow-focus)',
        },
      });
    }),
  ],
};
