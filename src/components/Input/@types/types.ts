import { ReactElement } from 'react';

export const optionSize = {
  MD: 'md',
  SM: 'sm',
  XS: 'xs',
} as const;

export type Size = typeof optionSize[keyof typeof optionSize];

export interface InputProps {
  size: Size;
  isSuccess?: boolean;
  isWarning?: boolean;
}

export interface InputGroupProps {
  size: Size;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
}
