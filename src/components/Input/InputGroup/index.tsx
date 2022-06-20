import { cloneElement, FC, isValidElement } from 'react';

import { theme } from 'twin.macro';

import { InputGroupProps, SCALE } from '../@types';
import { InputIcon, StyledInputGroup } from './styles';

const InputGroup: FC<InputGroupProps> = ({ scale = SCALE.MD, startIcon, endIcon, children, ...props }) => {
  return (
    <StyledInputGroup scale={scale} hasStartIcon={!!startIcon} hasEndIcon={!!endIcon} {...props}>
      {startIcon && (
        <InputIcon scale={scale}>
          {isValidElement(startIcon) && cloneElement(startIcon, { fill: theme`colors.input.icon` })}
        </InputIcon>
      )}
      {isValidElement(children) && cloneElement(children, { scale })}
      {endIcon && (
        <InputIcon scale={scale} isEndIcon>
          {isValidElement(endIcon) && cloneElement(endIcon, { fill: theme`colors.input.icon` })}
        </InputIcon>
      )}
    </StyledInputGroup>
  );
};

export default InputGroup;
