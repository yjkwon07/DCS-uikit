import { cloneElement, FC, isValidElement } from 'react';

import { InputGroupProps, SCALE } from '../@types';
import { InputIcon, StyledInputGroup } from './styles';

const InputGroup: FC<InputGroupProps> = ({ scale = SCALE.MD, startIcon, endIcon, children, ...props }) => {
  return (
    <StyledInputGroup scale={scale} hasStartIcon={!!startIcon} hasEndIcon={!!endIcon} {...props}>
      {startIcon && <InputIcon scale={scale}>{startIcon}</InputIcon>}
      {isValidElement(children) && cloneElement(children, { scale })}
      {endIcon && (
        <InputIcon scale={scale} isEndIcon>
          {endIcon}
        </InputIcon>
      )}
    </StyledInputGroup>
  );
};

export default InputGroup;
