import { theme } from 'twin.macro';

import { Box } from '../Box';
import Heading from './Heading';

export default {
  title: 'Typography/Heading',
  component: Heading,
  argTypes: {},
};

export const Size = () => {
  return (
    <Box background={theme`colors.primary`}>
      <Heading>Default</Heading>
      <Heading scale="md">Size md</Heading>
      <Heading scale="lg">Size lg</Heading>
      <Heading scale="xl">Size xl</Heading>
      <Heading scale="xxl">Size xxl</Heading>
    </Box>
  );
};

export const Tag = () => {
  return (
    <Box background={theme`colors.primary`}>
      <Heading>Default</Heading>
      <Heading as="h1">Tag h1</Heading>
      <Heading as="h2">Tag h2</Heading>
      <Heading as="h3">Tag h3</Heading>
      <Heading as="h4">Tag h4</Heading>
      <Heading as="h5">Tag h5</Heading>
      <Heading as="h6">Tag h6</Heading>
    </Box>
  );
};

export const Ellipsis = () => {
  return (
    <Box background={theme`colors.primary`}>
      <Heading color="sky.50" ellipsis>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing
        layouts and visual mockups.
      </Heading>
      <Heading color="sky.100" ellipsis>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing
        layouts and visual mockups.
      </Heading>
      <Heading color="sky.200" ellipsis>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing
        layouts and visual mockups.
      </Heading>
      <Heading color="sky.300" ellipsis>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing
        layouts and visual mockups.
      </Heading>
      <Heading color="sky.400" ellipsis>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing
        layouts and visual mockups.
      </Heading>
      <Heading color="sky.500" ellipsis>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing
        layouts and visual mockups.
      </Heading>
      <Heading color="sky.600" ellipsis>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing
        layouts and visual mockups.
      </Heading>
      <Heading color="sky.700" ellipsis>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing
        layouts and visual mockups.
      </Heading>
      <Heading color="sky.800" ellipsis>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing
        layouts and visual mockups.
      </Heading>
      <Heading color="sky.900" ellipsis>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing
        layouts and visual mockups.
      </Heading>
    </Box>
  );
};
