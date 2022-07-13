import { colors } from '../../theme';
import { Flex } from '../Flex';
import Box from './Box';

export default {
  title: 'Utils/Layout/Box',
  component: Box,
  argTypes: {},
};

export const Default = () => {
  return (
    <Flex flexDirection="column" rowGap={10}>
      <Box as="p" background={colors.gray[400]} color="sky.600">
        Contains background, border, layout, position, and space from
      </Box>
      <Box as="p" background="#33f3f3" color="rgba(137, 137, 137)">
        Contains background, border, layout, position, and space from
      </Box>
    </Flex>
  );
};
