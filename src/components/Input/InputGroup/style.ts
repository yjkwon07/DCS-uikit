import tw, { styled } from 'twin.macro';

import { optionSize, Size } from '../@types';
import Input from '../Input';

const styledInputPadding = (size: Size, hasIcon: boolean) => {
  if (!hasIcon) {
    return '16px';
  }

  switch (size) {
    case optionSize.XS:
      return '32px';
    case optionSize.MD:
      return '56px';
    case optionSize.SM:
    default:
      return '48px';
  }
};

export const StyledInputGroup = styled.div<{ size: Size; hasStartIcon: boolean; hasEndIcon: boolean }>`
  ${tw`relative w-full`}
  ${Input} {
    padding-left: ${({ hasStartIcon, size }) => styledInputPadding(size, hasStartIcon)};
    padding-right: ${({ hasEndIcon, size }) => styledInputPadding(size, hasEndIcon)};
  }
`;

export const InputIcon = styled.div<{ size: Size; isEndIcon?: boolean }>`
  ${tw`absolute top-0`}
  ${tw`flex items-center`} 
  ${tw`h-full`} 

  ${({ isEndIcon, size }) =>
    isEndIcon
      ? `
    right: ${size === optionSize.XS ? '8px' : '16px'};
  `
      : `
    left: ${size === optionSize.XS ? '8px' : '16px'};
  `}
`;
