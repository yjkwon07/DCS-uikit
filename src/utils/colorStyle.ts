import { css } from 'twin.macro';

import getThemeValue from './getThemeValue';

const colorStyle =
  (themeColorName: string) =>
  ({ color }: { color?: string }) => {
    return css`
      ${color &&
      css`
        color: ${typeof color === 'string' && color.includes('#') ? color : getThemeValue(themeColorName, color)};
      `}
    `;
  };

export default colorStyle;
