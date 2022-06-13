import { styled } from 'twin.macro';

import { Text } from '../../Text';
import { HeadingProps } from '../@types';

export const StyledHeading = styled(Text)<HeadingProps>`
  font-weight: 600;
  line-height: 1.1;
`;
