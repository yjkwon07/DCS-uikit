import { ReactElement } from 'react';

export const size = {
  MD: 'md',
  SM: 'sm',
  XS: 'xs',
} as const;

export type Size = typeof size[keyof typeof size];

export interface InputProps {
  size?: Size;
  isSuccess?: boolean;
  isWarning?: boolean;
}

export interface InputGroupProps {
  size?: Size;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
}
