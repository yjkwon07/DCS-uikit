/* eslint-disable react/default-props-match-prop-types */
import { cloneElement, FC, isValidElement } from 'react';

import tw from 'twin.macro';

import { TagProps } from '../@types/types';
import { StyledTag } from './styles';

const Tag: FC<TagProps> = ({ startIcon, endIcon, children, ...reset }) => (
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
