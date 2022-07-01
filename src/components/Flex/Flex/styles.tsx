import { styled } from 'twin.macro';

import colorStyle from '../../../utils/colorStyle';
import gapStyle from '../../../utils/gapStyle';
import { Box } from '../../Box';
import { FlexProps } from '../@types';

export const StyledFlex = styled(Box)<FlexProps>`
  display: flex;

  ${colorStyle}
  ${gapStyle}
`;
