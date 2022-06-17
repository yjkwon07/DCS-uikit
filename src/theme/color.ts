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

export const tag = {
  primary: '#485861',
  secondary: '#394952',
  success: '#96b0ff',
  warning: '#ff97cc',
};

export const text = {
  primary: theme`colors.sky.100`,
  secondary: '#485861',
  disabled: '#BDC2C4',
  subtle: '#7A6EAA',
};

export const svg = {
  fill: '#485861',
};

export const toggle = {
  checked: '#485861',
  noneChecked: '#EFF4F5',
  icon: '#EFF4F5',
  disabled: '#E9EAEB',
};

export const tab = {
  primary: '#485861',
  list: '#EFF4F5',
  text: {
    primary: theme`colors.sky.100`,
    secondary: '#485861',
  },
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

  '--tag-primary': tag.primary,
  '--tag-secondary': tag.secondary,
  '--tag-success': tag.success,
  '--tag-warning': tag.warning,

  '--text-primary': text.primary,
  '--text-secondary': text.secondary,
  '--text-disabled': text.disabled,
  '--text-subtle': text.subtle,

  '--shadow-success': shadow.success,
  '--shadow-warning': shadow.warning,
  '--shadow-inset': shadow.inset,
  '--shadow-focus': shadow.focus,

  '--svg-fill': svg.fill,

  '--colors-toggle-checked': toggle.checked,
  '--colors-toggle-noneChecked': toggle.noneChecked,
  '--colors-toggle-icon': toggle.icon,
  '--colors-toggle-disabled': toggle.disabled,

  '--colors-tab-primary': tab.primary,
  '--colors-tab-list': tab.list,
  '--text-color-tab-primary': tab.text.primary,
  '--text-color-tab-secondary': tab.text.secondary,
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
