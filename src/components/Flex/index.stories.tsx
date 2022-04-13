import { theme } from 'twin.macro';

import Flex from './Flex';

export default {
  title: 'Layout/Flex',
  component: Flex,
  argTypes: {},
};

export const Default = () => {
  return (
    <div>
      <Flex justifyContent="space-between" mt="40px" background={theme`colors.disabled`}>
        <span>Left</span>
        <span>right</span>
      </Flex>
      <Flex justifyContent="center" mt="8px" background={theme`colors.disabled`}>
        <span>center</span>
      </Flex>
    </div>
  );
};
