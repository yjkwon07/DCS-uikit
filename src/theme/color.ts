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
  icon: '#EFF4F5',
  disabled: '#E9EAEB',
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

export const shadow = {
  success: `0px 0px 0px 1px ${color.success}, 0px 0px 0px 4px rgba(118, 166, 225, 0.2)`,
  warning: `0px 0px 0px 1px ${color.warning}, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)`,
  inset: 'inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)',
  focus: `0px 0px 0px 1px ${color.focus}, 0px 0px 0px 4px rgba(183, 148, 255, 0.6)`,
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

  '--colors-select-primary': select.primary,
  '--colors-select-secondary': select.secondary,
  '--text-colors-select-primary': select.text.primary,
  '--text-colors-select-secondary': select.text.secondary,
  '--colors-select-icon': select.text.icon,

  '--colors-svg-primary': svg.primary,

  '--colors-toggle-primary': toggle.primary,
  '--colors-toggle-secondary': toggle.secondary,
  '--colors-toggle-icon': toggle.icon,
  '--colors-toggle-disabled': toggle.disabled,

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
