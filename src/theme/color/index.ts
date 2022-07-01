import { theme } from '../../../tailwind.config';
import { colors as baseColors, textColor as baseTextColor } from './baseColor';

export * from './customColor';

export const colors = {
  ...baseColors,
  ...theme.extend.colors,
};

export const textColor = {
  ...baseTextColor,
  ...theme.extend.textColor,
};

export const shadow = {
  ...theme.extend.shadow,
};
