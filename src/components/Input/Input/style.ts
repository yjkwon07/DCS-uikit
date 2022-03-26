import { styled, theme } from 'twin.macro';

import { InputProps, optionSize } from '../@types';

export const optionSizeVariant = {
  [optionSize.MD]: {
    height: '48px',
  },
  [optionSize.SM]: {
    height: '40px',
  },
  [optionSize.XS]: {
    height: '32px',
  },
};

export const boxShadow = ({ isSuccess = false, isWarning = false }: InputProps) => {
  if (isWarning) {
    return theme`shadow.warning`;
  }

  if (isSuccess) {
    return theme`shadow.success`;
  }

  return theme`shadow.inset`;
};

export const StyledInput = styled.input<InputProps>`
  background-color: ${theme`colors.tertiary`};
  border: 0;
  border-radius: 10px;
  box-shadow: ${boxShadow};
  color: ${theme`textColor.secondary`};
  display: block;
  font-size: 16px;
  outline: 0;
  padding: 0 16px;
  width: 100%;

  ${({ size }) => size && sizeVariant[size]}

  &:disabled {
    background-color: ${theme`colors.disabled`};
    box-shadow: none;
    color: ${theme`textColor.disabled`};
    cursor: not-allowed;
  }

  &:focus:not(:disabled) {
    box-shadow: ${theme`shadow.focus`};
  }
`;
