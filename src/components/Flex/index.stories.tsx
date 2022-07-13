import { colors } from '../../theme';
import Flex from './Flex';

export default {
  title: 'Utils/Layout/Flex',
  component: Flex,
  argTypes: {},
};

export const Default = () => {
  return (
    <Flex gap={200} flexDirection="column">
      <Flex width="100%" justifyContent="space-between" mt="40px" background={colors.disabled}>
        <span>Left</span>
        <span>right</span>
      </Flex>
      <Flex width="100%" justifyContent="center" mt="8px" background={colors.disabled}>
        <span>center</span>
      </Flex>
    </Flex>
  );
};
