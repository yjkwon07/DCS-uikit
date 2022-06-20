import { space, variant } from 'styled-system';
import { styled, theme } from 'twin.macro';

import { CheckboxProps, SCALE } from '../@types';

export const scaleVariant = {
  [SCALE.MD]: {
    height: '32px',
    width: '32px',
  },
  [SCALE.SM]: {
    height: '24px',
    width: '24px',
  },
};

export const StyledCheckbox = styled.input<CheckboxProps>`
  background-color: ${theme`colors.checkbox.secondary`};
  border: 0;
  border-radius: 8px;
  box-shadow: ${theme`shadow.inset`};
  display: inline-block;
  overflow: hidden;
  appearance: none;

  position: relative;
  vertical-align: middle;

  ${variant({
    prop: 'scale',
    variants: scaleVariant,
  })}

  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:after {
    content: '';
    border-bottom: 2px solid;
    border-left: 2px solid;
    border-color: transparent;
    position: absolute;
    top: 30%;
    left: 0;
    right: 0;
    width: 50%;
    height: 25%;
    margin: auto;
    transform: rotate(-50deg);
    transition: border-color 0.2s ease-in-out;
  }

  &:hover:not(:disabled):not(:checked) {
    box-shadow: ${theme`shadow.focus`};
  }

  &:focus {
    outline: none;
    box-shadow: ${theme`shadow.focus`};
  }

  &:checked {
    background-color: ${theme`colors.checkbox.primary`};
    &:after {
      border-color: white;
    }
  }

  &:disabled {
    background-color: ${theme`colors.checkbox.disabled`};
    border-color: ${theme`colors.checkbox.disabled`};
    box-shadow: none;
    cursor: not-allowed;
  }

  ${space}
`;
