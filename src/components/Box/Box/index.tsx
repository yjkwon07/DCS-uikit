import { background, border, layout, position, space } from 'styled-system';
import { styled } from 'twin.macro';

import { BoxProps } from '../@types';

const Box = styled.div<BoxProps>`
  ${background}
  ${border}
  ${layout}
  ${position}
  ${space}
`;

export default Box;
