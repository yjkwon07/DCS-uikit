import { theme } from 'twin.macro';

export const color = {
  primary: '#485861',
  secondary: '#394952',
  tertiary: '#EFF4F5',
  disabled: '#E9EAEB',
  success: '#96b0ff',
  warning: '#ff97cc',
  focus: '#b08ef5',
};

export const text = {
  primary: theme`colors.sky.100`,
  secondary: '#485861',
  disabled: '#BDC2C4',
  subtle: '#7A6EAA',
};

export const shadow = {
  success: `0px 0px 0px 1px ${color.success}, 0px 0px 0px 4px rgba(118, 166, 225, 0.2)`,
  warning: `0px 0px 0px 1px ${color.warning}, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)`,
  inset: 'inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)',
  focus: `0px 0px 0px 1px ${color.focus}, 0px 0px 0px 4px rgba(183, 148, 255, 0.6)`,
};

export const button = {
  primary: '#485861',
  tertiary: '#EFF4F5',
  disabled: '#E9EAEB',
  icon: {
    primary: '#ffff',
    secondary: '#485861',
    tertiary: '#ffff',
    text: '#ffff',
  },
  text: {
    primary: theme`colors.sky.100`,
    secondary: '#485861',
    tertiary: '#485861',
    disabled: '#BDC2C4',
  },
};

export const checkbox = {
  primary: '#485861', // select background
  secondary: '#EFF4F5', // none-select background
  disabled: '#E9EAEB',
};

export const input = {
  primary: '#485861', // background
  disabled: '#E9EAEB',
  icon: '#ffff',
  text: {
    primary: theme`colors.sky.100`, // text color
    disabled: '#BDC2C4',
  },
};

export const menu = {
  primary: '#485861',
  secondary: '#ffff',
  divide: theme`colors.gray.100`,
  text: {
    primary: theme`colors.sky.100`, // select color
    secondary: '#485861', // none-select color
  },
};

export const overlay = {
  primary: '#485861',
};

export const radio = {
  primary: '#485861', // select background
  secondary: '#EFF4F5', // none-select background
  disabled: '#E9EAEB',
  handle: '#ffff',
};

export const radioGroup = {
  primary: '#485861', // select background
  secondary: '#EFF4F5', // none-select background
  text: {
    label: {
      primary: theme`colors.sky.100`, // select color
      secondary: '#485861', // none-select color
    },
    description: {
      primary: '#ffff', // select color
      secondary: '#485861', // none-select color
    },
  },
};

export const select = {
  primary: '#485861', // button
  secondary: '#EFF4F5', // option background
  icon: '#ffff', // select button icon
  active: '#485861', // hover
  selected: '#485861',
  text: {
    primary: theme`colors.sky.100`, // select color
    secondary: '#485861', // none-select color
    active: theme`colors.sky.100`,
    selected: theme`colors.sky.100`,
  },
};

export const svg = {
  primary: '#485861',
};

export const toggle = {
  primary: '#485861', // select background
  secondary: '#EFF4F5', // none-select background
  disabled: '#E9EAEB',
  handle: '#ffff',
  icon: {
    // select icon fill
    primary: {
      start: '#ffff',
      end: '#485861',
    },
    // none-select icon fill
    secondary: {
      start: '#485861',
      end: '#485861',
    },
  },
};

export const tab = {
  primary: '#485861', // select background
  secondary: '#EFF4F5', // none-select background
  text: {
    primary: theme`colors.sky.100`,
    secondary: '#485861',
  },
};

export const tag = {
  primary: '#485861',
  secondary: '#394952',
  success: '#96b0ff',
  warning: '#ff97cc',
};

export const base = {
  '--primary': color.primary,
  '--secondary': color.secondary,
  '--tertiary': color.tertiary,
  '--disabled': color.disabled,
  '--success': color.success,
  '--warning': color.warning,
  '--focus': color.focus,

  '--text-primary': text.primary,
  '--text-secondary': text.secondary,
  '--text-disabled': text.disabled,
  '--text-subtle': text.subtle,

  '--shadow-success': shadow.success,
  '--shadow-warning': shadow.warning,
  '--shadow-inset': shadow.inset,
  '--shadow-focus': shadow.focus,

  '--colors-button-primary': button.primary,
  '--colors-button-tertiary': button.tertiary,
  '--colors-button-disabled': button.disabled,
  '--colors-button-icon-primary': button.icon.primary,
  '--colors-button-icon-secondary': button.icon.secondary,
  '--colors-button-icon-tertiary': button.icon.tertiary,
  '--colors-button-icon-text': button.icon.text,
  '--text-colors-button-primary': button.text.primary,
  '--text-colors-button-secondary': button.text.secondary,
  '--text-colors-button-tertiary': button.text.tertiary,
  '--text-colors-button-disabled': button.text.disabled,

  '--colors-checkbox-primary': checkbox.primary,
  '--colors-checkbox-secondary': checkbox.secondary,
  '--colors-checkbox-disabled': checkbox.disabled,

  '--colors-input-primary': input.primary,
  '--colors-input-disabled': input.disabled,
  '--colors-input-icon': input.icon,
  '--text-colors-input-primary': input.text.primary,
  '--text-colors-input-disabled': input.text.disabled,

  '--colors-menu-primary': menu.primary,
  '--colors-menu-secondary': menu.secondary,
  '--colors-menu-divide': menu.divide,
  '--text-colors-menu-primary': menu.text.primary,
  '--text-colors-menu-secondary': menu.text.secondary,

  '--colors-overlay-primary': overlay.primary,

  '--colors-radio-primary': radio.primary,
  '--colors-radio-secondary': radio.secondary,
  '--colors-radio-disabled': radio.disabled,
  '--colors-radio-handle': radio.handle,

  '--colors-radioGroup-primary': radioGroup.primary,
  '--colors-radioGroup-secondary': radioGroup.secondary,
  '--text-colors-radioGroup-label-primary': radioGroup.text.label.primary,
  '--text-colors-radioGroup-label-secondary': radioGroup.text.label.secondary,
  '--text-colors-radioGroup-description-primary': radioGroup.text.description.primary,
  '--text-colors-radioGroup-description-secondary': radioGroup.text.description.secondary,

  '--colors-select-primary': select.primary,
  '--colors-select-secondary': select.secondary,
  '--colors-select-icon': select.icon,
  '--colors-select-active': select.active,
  '--colors-select-selected': select.selected,
  '--text-colors-select-primary': select.text.primary,
  '--text-colors-select-secondary': select.text.secondary,
  '--text-colors-select-active': select.text.active,
  '--text-colors-select-selected': select.text.selected,

  '--colors-svg-primary': svg.primary,

  '--colors-toggle-primary': toggle.primary,
  '--colors-toggle-secondary': toggle.secondary,
  '--colors-toggle-disabled': toggle.disabled,
  '--colors-toggle-handle': toggle.handle,
  '--colors-toggle-icon-primary-start': toggle.icon.primary.start,
  '--colors-toggle-icon-primary-end': toggle.icon.primary.end,
  '--colors-toggle-icon-secondary-start': toggle.icon.secondary.start,
  '--colors-toggle-icon-secondary-end': toggle.icon.secondary.end,

  '--colors-tab-primary': tab.primary,
  '--colors-tab-secondary': tab.secondary,
  '--text-colors-tab-primary': tab.text.primary,
  '--text-colors-tab-secondary': tab.text.secondary,

  '--colors-tag-primary': tag.primary,
  '--colors-tag-secondary': tag.secondary,
  '--colors-tag-success': tag.success,
  '--colors-tag-warning': tag.warning,
};

export const light = {};

export const dark = {};

export const colorClassName = {
  base: ':root',
  light: 'theme-light',
  dark: 'theme-dark',
};

export const colorStyle = {
  [colorClassName.base]: base,
  [`.${colorClassName.light}`]: light,
  [`.${colorClassName.dark}`]: dark,
};
