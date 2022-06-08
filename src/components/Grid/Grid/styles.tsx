import { grid, flexbox } from 'styled-system';
import { styled } from 'twin.macro';

import { Box } from '../../Box';
import { GridProps } from '../@types';

export const StyledGrid = styled(Box)<GridProps>`
  display: grid;
  ${flexbox}
  ${grid}
`;
