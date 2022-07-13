import { ElementType } from 'react';

import { FlexProps } from '../@types';
import { StyledFlex } from './styles';

const Flex = <E extends ElementType = 'div'>(props: FlexProps<E>) => {
  return <StyledFlex {...props} />;
};

export default Flex;
