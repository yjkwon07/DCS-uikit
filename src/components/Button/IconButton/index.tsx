import { cloneElement, isValidElement } from 'react';

import getThemeValue from '../../../utils/getThemeValue';
import { ButtonProps } from '../@types';
import StyledIconButton from './styles';

const IconButton = ({ children, ...reset }: ButtonProps<'button'>) => {
  return (
    <StyledIconButton aria-label="icon-button" {...reset}>
      {isValidElement(children) &&
        cloneElement(children, {
          fill: reset.variant && getThemeValue('colors', `button.icon.[${reset.variant}]`),
        })}
    </StyledIconButton>
  );
};

export default IconButton;
