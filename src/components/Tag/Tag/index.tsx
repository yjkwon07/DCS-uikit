import { cloneElement, isValidElement } from 'react';

import { TagProps } from '../@types';
import { StyledTag } from './styles';

const Tag: React.FC<TagProps> = ({ startIcon, endIcon, children, ...props }) => (
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
  outline: false,
};

export default Tag;
