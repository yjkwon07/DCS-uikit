import { cloneElement, FC, isValidElement } from 'react';

import { InputGroupProps, SCALE } from '../@types';
import { InputIcon, StyledInputGroup } from './styles';

const InputGroup: FC<InputGroupProps> = ({ scale = SCALE.MD, startIcon, endIcon, disabled, children, ...props }) => {
  return (
    <StyledInputGroup scale={scale} hasStartIcon={!!startIcon} hasEndIcon={!!endIcon} {...props}>
      {startIcon && (
        <InputIcon scale={scale}>{isValidElement(startIcon) && cloneElement(startIcon, { disabled })}</InputIcon>
      )}
      {isValidElement(children) && cloneElement(children, { scale })}
      {endIcon && (
        <InputIcon scale={scale} isEndIcon>
          {isValidElement(endIcon) && cloneElement(endIcon, { disabled })}
        </InputIcon>
      )}
    </StyledInputGroup>
  );
};

export default InputGroup;
