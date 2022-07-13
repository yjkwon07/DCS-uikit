import { get } from 'lodash-es';
import { css } from 'twin.macro';

import { colors, textColor } from '../theme';

const colorStyle = ({ background, color }: StyledColorProps) => {
  return css`
    ${background &&
    css`
      background-color: ${get(colors, background) || background};
    `}
    ${color &&
    css`
      color: ${get(textColor, color) || color};
    `}
  `;
};

export default colorStyle;
