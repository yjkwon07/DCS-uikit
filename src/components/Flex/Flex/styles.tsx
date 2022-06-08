import { flexbox } from 'styled-system';
import { styled } from 'twin.macro';

import { Box } from '../../Box';
import { FlexProps } from '../@types';

export const StyledFlex = styled(Box)<FlexProps>`
  display: flex;
  ${flexbox}
`;
