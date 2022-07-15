import { Box } from '../Box';
import Heading from './Heading';

export default {
  title: 'Typography/Heading',
  component: Heading,
  argTypes: {},
};

export const Default = () => {
  return (
    <Box>
      <Heading>Default</Heading>
      <Heading scale="9xl">(9xl) In Heading</Heading>
      <Heading scale="8xl">(8xl) In Heading</Heading>
      <Heading scale="7xl">(7xl) In Heading</Heading>
      <Heading scale="6xl">(6xl) In Heading</Heading>
      <Heading scale="5xl">(5xl) In Heading</Heading>
      <Heading scale="4xl">(4xl) In Heading</Heading>
      <Heading scale="3xl">(3xl) In Heading</Heading>
      <Heading scale="2xl">(2xl) In Heading</Heading>
      <Heading scale="xl">(xl) In Heading</Heading>
      <Heading scale="lg">(lg) In Heading</Heading>
      <Heading scale="xs">(xs) In Heading</Heading>
      <Heading scale="base">(base) In Heading</Heading>
    </Box>
  );
};

export const Tag = () => {
  return (
    <Box>
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
    <Box>
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
