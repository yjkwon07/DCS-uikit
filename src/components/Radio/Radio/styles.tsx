import { space, variant } from 'styled-system';
import { styled, theme } from 'twin.macro';

import { RadioProps, SCALE } from '../@types';

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

export const checkedScaleVariant = {
  [SCALE.MD]: {
    height: '20px',
    width: '20px',
  },
  [SCALE.SM]: {
    height: '12px',
    width: '12px',
  },
};

export const StyledRadio = styled.input<RadioProps>`
  background-color: ${theme`colors.tertiary`};
  border: 0;
  border-radius: 50%;
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
    border-radius: 50%;
    position: absolute;
    left: 6px;
    top: 6px;

    ${variant({
      prop: 'scale',
      variants: checkedScaleVariant,
    })}
  }

  &:hover:not(:disabled):not(:checked) {
    box-shadow: ${theme`shadow.focus`};
  }

  &:focus {
    outline: none;
    box-shadow: ${theme`shadow.focus`};
  }

  &:checked {
    background-color: ${theme`colors.primary`};
    &:after {
      background-color: ${theme`colors.white`};
    }
  }

  &:disabled {
    background-color: ${theme`colors.disabled`};
    border-color: ${theme`colors.disabled`};
    box-shadow: none;
    color: ${theme`textColor.disabled`};
    cursor: not-allowed;
  }

  ${space}
`;
