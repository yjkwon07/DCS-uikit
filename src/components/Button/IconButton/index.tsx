import { cloneElement, ElementType, isValidElement } from 'react';

import { ButtonProps, SCALE, VARIANT } from '../@types';
import StyledIconButton from './styles';

const IconButton = <E extends ElementType = 'button'>({ children, ...props }: ButtonProps<E>) => {
  return (
    <StyledIconButton aria-label="icon-button" {...props}>
      {isValidElement(children) && cloneElement(children)}
    </StyledIconButton>
  );
};

IconButton.defaultProps = {
  variant: VARIANT.PRIMARY,
  scale: SCALE.MD,
};

export default IconButton;
