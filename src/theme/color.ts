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
  secondary: theme`colors.transparent`,
  tertiary: '#EFF4F5',
  disabled: '#BDC2C4',
  text: {
    primary: theme`colors.sky.100`,
    secondary: '#485861',
    disabled: '#BDC2C4',
  },
};

export const checkbox = {
  primary: '#485861',
  secondary: '#EFF4F5',
  disabled: '#E9EAEB',
  text: {
    disabled: '#E9EAEB',
  },
};

export const input = {
  secondary: '#EFF4F5',
  disabled: '#E9EAEB',
  text: {
    primary: theme`colors.sky.100`,
    disabled: '#E9EAEB',
  },
};

export const menu = {
  primary: '#485861',
  secondary: '#ffff',
  divide: theme`colors.gray.100`,
  text: {
    primary: theme`colors.sky.100`,
    secondary: '#485861',
  },
};

export const overlay = {
  primary: '#485861',
};

export const radio = {
  primary: '#485861',
  secondary: '#EFF4F5',
  disabled: '#E9EAEB',
  text: {
    disabled: '#E9EAEB',
  },
  icon: '#ffff',
};

export const radioGroup = {
  primary: '#485861',
  secondary: '#ffff',
  text: {
    label: {
      primary: theme`colors.sky.100`,
      secondary: '#485861',
    },
    description: {
      primary: '#ffff',
      secondary: '#485861',
    },
    icon: '#ffff',
  },
};

export const select = {
  primary: '#485861',
  secondary: '#ffff',
  text: {
    primary: theme`colors.sky.100`,
    secondary: '#485861',
    icon: theme`colors.gray.400`,
  },
};

export const svg = {
  primary: '#485861',
};

export const toggle = {
  primary: '#485861',
  secondary: '#EFF4F5',
  disabled: '#E9EAEB',
  handle: '#ffff',
  text: {
    disabled: '#E9EAEB',
  },
  icon: {
    primary: '#485861',
    secondary: '#EFF4F5',
  },
};

export const tab = {
  primary: '#485861',
  secondary: '#EFF4F5',
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
  '--colors-button-secondary': button.secondary,
  '--colors-button-tertiary': button.tertiary,
  '--colors-button-disabled': button.disabled,
  '--text-colors-button-primary': button.text.primary,
  '--text-colors-button-secondary': button.text.secondary,
  '--text-colors-button-disabled': button.text.disabled,

  '--colors-checkbox-primary': checkbox.primary,
  '--colors-checkbox-secondary': checkbox.secondary,
  '--colors-checkbox-disabled': checkbox.disabled,
  '--text-colors-checkbox-disabled': checkbox.text.disabled,

  '--colors-input-secondary': input.secondary,
  '--colors-input-disabled': input.disabled,
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
  '--colors-radio-icon': radio.icon,
  '--text-colors-radio-disabled': radio.text.disabled,

  '--colors-radioGroup-primary': radioGroup.primary,
  '--colors-radioGroup-secondary': radioGroup.secondary,
  '--text-colors-radioGroup-label-primary': radioGroup.text.label.primary,
  '--text-colors-radioGroup-label-secondary': radioGroup.text.label.secondary,
  '--text-colors-radioGroup-description-primary': radioGroup.text.description.primary,
  '--text-colors-radioGroup-description-secondary': radioGroup.text.description.secondary,
  '--text-colors-radioGroup-icon': radioGroup.text.icon,

  '--colors-select-primary': select.primary,
  '--colors-select-secondary': select.secondary,
  '--text-colors-select-primary': select.text.primary,
  '--text-colors-select-secondary': select.text.secondary,
  '--text-colors-select-icon': select.text.icon,

  '--colors-svg-primary': svg.primary,

  '--colors-toggle-primary': toggle.primary,
  '--colors-toggle-secondary': toggle.secondary,
  '--colors-toggle-disabled': toggle.disabled,
  '--colors-toggle-handle': toggle.handle,
  '--colors-toggle-icon-primary': toggle.icon.primary,
  '--colors-toggle-icon-secondary': toggle.icon.secondary,
  '--text-colors-toggle-disabled': toggle.text.disabled,

  '--colors-tab-primary': tab.primary,
  '--colors-tab-secondary': tab.secondary,
  '--text-color-tab-primary': tab.text.primary,
  '--text-color-tab-secondary': tab.text.secondary,

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
