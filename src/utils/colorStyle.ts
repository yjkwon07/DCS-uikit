import { css } from 'twin.macro';

import getThemeValue from './getThemeValue';

const colorStyle = ({ color }: { color?: string }) => {
  return css`
    ${color &&
    css`
      color: ${typeof color === 'string' && color.includes('#') ? color : getThemeValue('textColor', color)};
    `}
  `;
};

export default colorStyle;
