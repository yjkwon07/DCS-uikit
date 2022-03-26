import { layout, space } from 'styled-system';
import tw, { css, styled } from 'twin.macro';

import { SCALE, Scale } from '../@types';
import Input from '../Input';

const styledInputPadding = (scale: Scale, hasIcon: boolean) => {
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
    padding-left: ${({ hasStartIcon, scale }) => styledInputPadding(scale, hasStartIcon)};
    padding-right: ${({ hasEndIcon, scale }) => styledInputPadding(scale, hasEndIcon)};
  }

  ${layout}
  ${space}
`;

export const InputIcon = styled.div<{ scale: Scale; isEndIcon?: boolean }>`
  ${[tw`absolute top-0`, tw`flex items-center`, tw`h-full`]}

  ${({ isEndIcon, scale }) =>
    isEndIcon
      ? css`
          right: ${scale === SCALE.XS ? '8px' : '16px'};
        `
      : css`
          left: ${scale === SCALE.XS ? '8px' : '16px'};
        `}
`;
