import { ElementType, ReactNode } from 'react';

import { LayoutProps, SpaceProps, TypographyProps } from 'styled-system';

import { PolymorphicComponentProps } from '../../../typings';

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

export interface BaseTagProps extends LayoutProps, SpaceProps, TypographyProps {
  variant?: Variant;
  scale?: Scale;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  outline?: boolean;
  children?: ReactNode;
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
}

export type TagProps<E extends ElementType = 'div'> = PolymorphicComponentProps<E, BaseTagProps>;
