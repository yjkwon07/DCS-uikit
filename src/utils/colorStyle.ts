import { get } from 'lodash-es';
import { css } from 'twin.macro';

import { colors, textColor } from '../theme';

const colorStyle = ({ background, color }: StyledColorProps) => {
  return css`
    background: ${(background && get(colors, background)) || background};
    color: ${(color && get(textColor, color)) || color};
  `;
};

export default colorStyle;
