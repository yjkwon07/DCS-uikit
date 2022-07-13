import { ElementType } from 'react';

import { BoxProps } from '../@types';
import { StyledBox } from './styles';

const Box = <E extends ElementType = 'div'>(props: BoxProps<E>) => {
  return <StyledBox {...props} />;
};

export default Box;
