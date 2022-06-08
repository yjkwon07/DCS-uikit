import { cloneElement, isValidElement } from 'react';

import tw from 'twin.macro';

import { TagProps } from '../@types';
import { StyledTag } from './styles';

const Tag: React.FC<TagProps> = ({ startIcon, endIcon, children, ...reset }) => (
  <StyledTag {...reset}>
    {isValidElement(startIcon) &&
      cloneElement(startIcon, {
        css: tw`mr-2`,
      })}
    {children}
    {isValidElement(endIcon) &&
      cloneElement(endIcon, {
        css: tw`ml-2`,
      })}
  </StyledTag>
);

Tag.defaultProps = {
  variant: 'primary',
  scale: 'md',
  outline: false,
};

export default Tag;
