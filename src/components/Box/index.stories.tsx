import { theme } from 'twin.macro';

import Box from './Box';

export default {
  title: 'Layout/Box',
  component: Box,
  argTypes: {},
};

export const Default = () => {
  return (
    <div>
      <Box as="p" background={theme`colors.disabled`}>
        Contains background, border, layout, position, and space from{' '}
      </Box>
    </div>
  );
};
