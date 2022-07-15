import { Box } from '../Box';
import Text from './Text';

export default {
  title: 'Typography/Text',
  component: Text,
  argTypes: {},
};

export const Default = () => {
  return (
    <Box>
      <Text>Default</Text>
      <Text scale="9xl">(9xl) In Text</Text>
      <Text scale="8xl">(8xl) In Text</Text>
      <Text scale="7xl">(7xl) In Text</Text>
      <Text scale="6xl">(6xl) In Text</Text>
      <Text scale="5xl">(5xl) In Text</Text>
      <Text scale="4xl">(4xl) In Text</Text>
      <Text scale="3xl">(3xl) In Text</Text>
      <Text scale="2xl">(2xl) In Text</Text>
      <Text scale="xl">(xl) In Text</Text>
      <Text scale="lg">(lg) In Text</Text>
      <Text scale="sm">(sm) In Text</Text>
      <Text scale="xs">(xs) In Text</Text>
      <Text scale="base">(base) In Text</Text>
    </Box>
  );
};

export const Ellipsis = () => {
  return (
    <Box>
      <Text color="sky.50" bold ellipsis>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing
        layouts and visual mockups.
      </Text>
      <Text color="sky.100" bold ellipsis>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing
        layouts and visual mockups.
      </Text>
      <Text color="sky.200" bold ellipsis>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing
        layouts and visual mockups.
      </Text>
      <Text color="sky.300" bold ellipsis>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing
        layouts and visual mockups.
      </Text>
      <Text color="sky.400" bold ellipsis>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing
        layouts and visual mockups.
      </Text>
      <Text color="sky.500" bold ellipsis>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing
        layouts and visual mockups.
      </Text>
      <Text color="sky.600" bold ellipsis>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing
        layouts and visual mockups.
      </Text>
      <Text color="sky.700" bold ellipsis>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing
        layouts and visual mockups.
      </Text>
      <Text color="sky.800" bold ellipsis>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing
        layouts and visual mockups.
      </Text>
      <Text color="sky.900" bold ellipsis>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing
        layouts and visual mockups.
      </Text>
    </Box>
  );
};

export const Transform = () => {
  return (
    <Box background="primary">
      <Text color="violet.500" textTransform="uppercase">
        (uppercase) In Text
      </Text>
      <Text textTransform="lowercase">(lowercase) In Text</Text>
      <Text textTransform="capitalize">(capitalize) In Text</Text>
    </Box>
  );
};
