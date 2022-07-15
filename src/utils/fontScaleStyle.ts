import { css } from 'twin.macro';

import { fontScale } from '../theme';

const fontScaleStyle = ({ scale }: { scale?: keyof typeof fontScale }) => {
  return css`
    font-size: ${scale && fontScale[scale]};
  `;
};

export default fontScaleStyle;
