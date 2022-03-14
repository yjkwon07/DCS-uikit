import { cloneElement, FC, isValidElement } from 'react';

import { InputGroupProps } from '../@types';
import { InputIcon, StyledInputGroup } from './style';

const InputGroup: FC<InputGroupProps> = ({ size, startIcon, endIcon, children, ...props }) => {
  return (
    <StyledInputGroup size={size} hasStartIcon={!!startIcon} hasEndIcon={!!endIcon} {...props}>
      {startIcon && <InputIcon size={size}>{startIcon}</InputIcon>}
      {isValidElement(children) && cloneElement(children, { size })}
      {endIcon && (
        <InputIcon size={size} isEndIcon>
          {endIcon}
        </InputIcon>
      )}
    </StyledInputGroup>
  );
};

export default InputGroup;
