import { layout, space } from 'styled-system';
import tw, { css, styled, theme } from 'twin.macro';

import { SCALE, Scale } from '../@types';
import Input from '../Input';

export const iconScaleVariant = {
  [SCALE.MD]: {
    width: '32px',
  },
  [SCALE.SM]: {
    width: '24px',
  },
  [SCALE.XS]: {
    width: '18px',
  },
};

export const iconButtonScaleVariant = {
  [SCALE.MD]: {
    height: '32px',
  },
  [SCALE.SM]: {
    height: '24px',
  },
  [SCALE.XS]: {
    height: '18px',
  },
};

const inputPaddingStyle = (scale: Scale, hasIcon: boolean) => {
  if (!hasIcon) {
    return '16px';
  }

  switch (scale) {
    case SCALE.XS:
      return '32px';
    case SCALE.MD:
      return '56px';
    case SCALE.SM:
    default:
      return '48px';
  }
};

export const StyledInputGroup = styled.div<{ scale: Scale; hasStartIcon: boolean; hasEndIcon: boolean }>`
  ${tw`relative w-full`}
  ${Input} {
    padding-left: ${({ hasStartIcon, scale }) => inputPaddingStyle(scale, hasStartIcon)};
    padding-right: ${({ hasEndIcon, scale }) => inputPaddingStyle(scale, hasEndIcon)};
  }

  ${layout}
  ${space}
`;

export const InputIcon = styled.div<{ scale: Scale; isEndIcon?: boolean }>`
  ${[tw`absolute top-0`, tw`flex items-center`, tw`h-full`]}

  & > button {
    width: 100%;
    ${({ scale }) => iconButtonScaleVariant[scale]}

    background-color: ${theme`colors.input.primary`};

    &:disabled {
      background-color: ${theme`colors.input.disabled`};
      color: ${theme`textColor.input.disabled`};
      box-shadow: none;
      cursor: not-allowed;
    }

    &:focus:not(:disabled) {
      box-shadow: ${theme`shadow.focus`};
    }
  }

  & svg {
    ${({ scale }) => iconScaleVariant[scale]}
    fill: ${theme`colors.input.icon`};
  }

  ${({ isEndIcon, scale }) =>
    isEndIcon
      ? css`
          right: ${scale === SCALE.XS ? '8px' : '16px'};
        `
      : css`
          left: ${scale === SCALE.XS ? '8px' : '16px'};
        `}
`;
