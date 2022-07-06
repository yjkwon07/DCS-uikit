import { get } from 'lodash-es';
import { css } from 'twin.macro';

import { textColor } from '../theme';
import { TextColorKey } from '../theme/color/@types';
import { ColorStyleProps } from '../typings';

const colorStyle = ({ color }: { color?: ColorStyleProps<TextColorKey> }) => {
  return css`
    ${color &&
    css`
      color: ${color.includes('#') ? color : get(textColor, color)};
    `}
  `;
};

export default colorStyle;
