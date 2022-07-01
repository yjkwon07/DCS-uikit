import { cloneElement, isValidElement } from 'react';

import { colors } from '../../../theme';
import { ButtonProps } from '../@types';
import StyledIconButton from './styles';

const IconButton = ({ children, ...props }: ButtonProps<'button'>) => {
  return (
    <StyledIconButton aria-label="icon-button" {...props}>
      {isValidElement(children) &&
        cloneElement(children, {
          fill: props.variant && colors.button.icon[props.variant],
        })}
    </StyledIconButton>
  );
};

export default IconButton;
