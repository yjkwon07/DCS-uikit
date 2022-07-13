import { theme } from '../../../tailwind.config';
import { colors as baseColors, textColor as baseTextColor } from './baseColor';

export * from './customColor';

export const colors = {
  ...baseColors,
  ...theme.extend.colors,
} as const;

export const textColor = {
  ...baseTextColor,
  ...theme.extend.textColor,
} as const;

export const shadow = {
  ...theme.extend.shadow,
} as const;
