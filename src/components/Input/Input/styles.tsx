import { layout, space, variant } from 'styled-system';
import { styled, theme } from 'twin.macro';

import { InputProps, SCALE } from '../@types';

export const scaleVariant = {
  [SCALE.MD]: {
    height: '48px',
  },
  [SCALE.SM]: {
    height: '40px',
  },
  [SCALE.XS]: {
    height: '32px',
  },
};

export const boxShadowStyle = ({ isSuccess = false, isWarning = false }: InputProps) => {
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
  color: ${theme`textColor.secondary`};
  border: 0;
  border-radius: 10px;
  box-shadow: ${boxShadowStyle};
  display: block;
  font-size: 16px;
  outline: 0;
  padding: 0 16px;
  width: 100%;

  ${variant({
    prop: 'scale',
    variants: scaleVariant,
  })}

  &:disabled {
    background-color: ${theme`colors.disabled`};
    color: ${theme`textColor.disabled`};
    box-shadow: none;
    cursor: not-allowed;
  }

  &:focus:not(:disabled) {
    box-shadow: ${theme`shadow.focus`};
  }

  ${layout}
  ${space}
`;
