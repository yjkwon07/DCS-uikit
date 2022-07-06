import { ReactNode } from 'react';

import { SpaceProps, TypographyProps } from 'styled-system';

export const VARIANT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  WARNING: 'warning',
} as const;

export const SCALE = {
  MD: 'md',
  SM: 'sm',
} as const;

export type Scale = typeof SCALE[keyof typeof SCALE];

export type Variant = typeof VARIANT[keyof typeof VARIANT];

export interface TagProps extends SpaceProps, TypographyProps {
  variant?: Variant;
  scale?: Scale;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  outline?: boolean;
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
}
