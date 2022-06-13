import { css } from 'twin.macro';

import { fontScale } from '../theme';

const fontScaleStyle = ({ scale }: { scale?: keyof typeof fontScale }) => {
  return css`
    ${scale &&
    css`
      font-size: ${fontScale[scale]};
    `}
  `;
};

export default fontScaleStyle;
