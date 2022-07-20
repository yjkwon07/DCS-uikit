import { css } from 'twin.macro';

import { GapProps } from '../typings';

const gapStyle = ({ gap, rowGap, columnGap }: GapProps) => {
  return css`
    gap: ${gap && (typeof gap === 'string' ? gap : `${gap}px`)};
    row-gap: ${rowGap && (typeof rowGap === 'string' ? rowGap : `${rowGap}px`)};
    column-gap: ${columnGap && (typeof columnGap === 'string' ? columnGap : `${columnGap}px`)};
  `;
};

export default gapStyle;
