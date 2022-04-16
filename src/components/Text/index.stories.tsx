import { theme } from 'twin.macro';

import { Box } from '../Box';
import Text from './Text';

export default {
  title: 'Typography/Text',
  component: Text,
  argTypes: {
    bold: {
      name: 'bold',
      table: {
        type: { summary: 'boolean', detail: 'Bold the text' },
        defaultValue: { summary: false },
      },
      control: {
        type: null,
      },
    },
    fontSize: {
      name: 'fontSize',
      table: {
        type: { summary: 'string', detail: 'Fontsize in px or em' },
        defaultValue: { summary: 'base' },
      },
      control: {
        type: null,
      },
    },
    color: {
      name: 'color',
      table: {
        type: { summary: 'string', detail: 'textColor from the theme(twinConfig), or CSS color' },
        defaultValue: { summary: 'colors.black' },
      },
      control: {
        type: null,
      },
    },
  },
};

export const Default = () => {
  return (
    <Box background={theme`colors.primary`}>
      <Text fontSize="6xl">(6xl) In Text</Text>
      <Text fontSize="5xl">(5xl) In Text</Text>
      <Text fontSize="4xl">(4xl) In Text</Text>
      <Text fontSize="3xl">(3xl) In Text</Text>
      <Text fontSize="2xl">(2xl) In Text</Text>
      <Text fontSize="xl">(xl) In Text</Text>
      <Text fontSize="lg">(lg) In Text</Text>
      <Text fontSize="xs">(xs) In Text</Text>
      <Text fontSize="base">(base) In Text</Text>
    </Box>
  );
};

export const Ellipsis = () => {
  return (
    <Box background={theme`colors.primary`}>
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
    <Box background={theme`colors.primary`}>
      <Text color={theme`colors.violet.500`} textTransform="uppercase">
        (uppercase) In Text
      </Text>
      <Text textTransform="lowercase">(lowercase) In Text</Text>
      <Text textTransform="capitalize">(capitalize) In Text</Text>
    </Box>
  );
};
