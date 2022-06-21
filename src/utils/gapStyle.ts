import { css } from 'twin.macro';

const gapStyle = ({
  gap,
  rowGap,
  columnGap,
}: {
  gap?: string | number;
  rowGap?: string | number;
  columnGap?: string | number;
}) => {
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
