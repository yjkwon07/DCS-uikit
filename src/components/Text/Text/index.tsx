import { ElementType } from 'react';

import { TextProps } from '../@types';
import { StyledText } from './styles';

const Text = <E extends ElementType = 'div'>(props: TextProps<E>) => {
  return <StyledText {...props} />;
};

Text.defaultProps = {
  scale: 'base',
  background: 'primary',
  color: 'primary',
};

export default Text;
