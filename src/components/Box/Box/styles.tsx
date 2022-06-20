import { background, border, flexbox, layout, position, space } from 'styled-system';
import { styled } from 'twin.macro';

import colorStyle from '../../../utils/colorStyle';
import { BoxProps } from '../@types';

export const StyledBox = styled.div<BoxProps>`
  ${colorStyle('textColor')}

  ${background}
  ${border}
  ${layout}
  ${position}
  ${space}
  ${flexbox}
`;
