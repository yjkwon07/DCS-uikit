import { grid } from 'styled-system';
import { styled } from 'twin.macro';

import { StyledBox } from '../../Box/Box/styles';
import { BaseGridProps } from '../@types';

export const StyledGrid = styled(StyledBox)<BaseGridProps>`
  display: grid;

  ${grid}
`;
