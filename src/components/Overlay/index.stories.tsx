import { Box } from '../Box';
import { Text } from '../Text';
import Overlay from './Overlay';

export default {
  title: 'Components/Overlay',
  component: Overlay,
  argTypes: {},
};

export const Default = () => {
  return (
    <>
      <Overlay />
      <Box height={100000}>
        <Text scale="6xl" color="black" bold>
          height 100000px <br />
          no scroll
        </Text>
      </Box>
    </>
  );
};
