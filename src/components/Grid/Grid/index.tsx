import { ElementType } from 'react';

import { GridProps } from '../@types';
import { StyledGrid } from './styles';

const Grid = <E extends ElementType = 'div'>(props: GridProps<E>) => {
  return <StyledGrid {...props} />;
};

export default Grid;
