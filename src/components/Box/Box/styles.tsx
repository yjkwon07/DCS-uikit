import { background, border, flexbox, layout, position, space } from 'styled-system';
import { styled } from 'twin.macro';

import colorStyle from '../../../utils/colorStyle';
import { BaseBoxProps } from '../@types';

export const StyledBox = styled.div<BaseBoxProps>`
  ${colorStyle}

  ${background}
  ${border}
  ${layout}
  ${position}
  ${space}
  ${flexbox}
`;
