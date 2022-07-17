import { css } from 'twin.macro';

import { colors, textColor } from '../theme';
import getThemeStyle from './getThemeStyle';

const colorStyle = ({ background, color }: StyledColorProps) => {
  return css`
    background: ${background && getThemeStyle(colors, background)};
    color: ${color && getThemeStyle(textColor, color)};
  `;
};

export default colorStyle;
