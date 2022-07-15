import { flexbox } from 'styled-system';
import { styled } from 'twin.macro';

import gapStyle from '../../../utils/gapStyle';
import { StyledBox } from '../../Box/Box/styles';
import { BaseFlexProps } from '../@types';

export const StyledFlex = styled(StyledBox)<BaseFlexProps>`
  display: flex;

  ${gapStyle}
  ${flexbox}
`;
