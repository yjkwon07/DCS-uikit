import { cloneElement, ElementType, isValidElement } from 'react';

import { TagProps } from '../@types';
import { StyledTag } from './styles';

const Tag = <E extends ElementType = 'div'>({ startIcon, endIcon, children, ...props }: TagProps<E>) => (
  <StyledTag {...props}>
    {isValidElement(startIcon) &&
      cloneElement(startIcon, {
        mr: '0.5rem',
      })}
    {children}
    {isValidElement(endIcon) &&
      cloneElement(endIcon, {
        ml: '0.5rem',
      })}
  </StyledTag>
);

Tag.defaultProps = {
  variant: 'primary',
  scale: 'md',
};

export default Tag;
