import { css } from 'twin.macro';

import { GapProps } from '../components/Grid';

const gapStyle = ({ gap, rowGap, columnGap }: GapProps) => {
  return css`
    ${gap &&
    css`
      gap: ${typeof gap === 'string' ? gap : `${gap}px`};
    `}
    ${rowGap &&
    css`
      row-gap: ${typeof rowGap === 'string' ? rowGap : `${rowGap}px`};
    `}
    ${columnGap &&
    css`
      column-gap: ${typeof columnGap === 'string' ? columnGap : `${columnGap}px`};
    `}
  `;
};

export default gapStyle;
