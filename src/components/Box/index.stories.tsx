import { theme } from 'twin.macro';

import Box from './Box';

export default {
  title: 'Layout/Box',
  component: Box,
  argTypes: {},
};

export const Default = () => {
  return (
    <Box as="div">
      <Box as="p" background={theme`colors.tertiary`} color="sky.500">
        Contains background, border, layout, position, and space from
      </Box>
    </Box>
  );
};
