import { get } from 'lodash-es';
import { css } from 'twin.macro';

import { colors, textColor } from '../theme';

const colorStyle = ({ background, color }: StyledColorProps) => {
  return css`
    background: ${
      background &&
      (get(colors, background.replace(' !important', ''))
        ? get(colors, background.replace(' !important', '')) + (background.includes('!important') ? ' !important' : '')
        : background)
    }};
    color: ${
      color &&
      (get(textColor, color.replace(' !important', ''))
        ? get(textColor, color.replace(' !important', '')) + (color.includes('!important') ? ' !important' : '')
        : color)
    }};
  `;
};

export default colorStyle;
