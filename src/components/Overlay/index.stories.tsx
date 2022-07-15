import { Box } from '../Box';
import { Text } from '../Text';
import Overlay from './Overlay';

export default {
  title: 'Utils/Overlay',
  component: Overlay,
  argTypes: {},
};

export const Default = () => {
  return (
    <>
      <Overlay />
      <Box height={10000}>
        <Text scale="6xl" color="black" bold>
          height 10000px <br />
          no scroll
        </Text>
      </Box>
    </>
  );
};
