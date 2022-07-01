import { get } from 'lodash-es';
import { css } from 'twin.macro';

import { textColor } from '../theme';
import { TextColorKey } from '../theme/color/@types';

const colorStyle = ({ color }: { color?: TextColorKey | `#${string}` | `rgb${string}` }) => {
  return css`
    ${color &&
    css`
      color: ${color.includes('#') ? color : get(textColor, color)};
    `}
  `;
};

export default colorStyle;
