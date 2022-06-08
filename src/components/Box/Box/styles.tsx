import { background, border, layout, position, space } from 'styled-system';
import { styled } from 'twin.macro';

import { BoxProps } from '../@types';

export const StyledBox = styled.div<BoxProps>`
  ${background}
  ${border}
  ${layout}
  ${position}
  ${space}
`;
