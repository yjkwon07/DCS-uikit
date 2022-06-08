import { flexbox } from 'styled-system';
import { styled } from 'twin.macro';

import { Box } from '../../Box';
import { FlexProps } from '../@types';

const Flex = styled(Box)<FlexProps>`
  display: flex;
  ${flexbox}
`;

export default Flex;
