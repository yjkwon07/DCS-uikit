import { ButtonHTMLAttributes, CSSProperties, ElementType, ReactNode } from 'react';

import { LayoutProps, SpaceProps } from 'styled-system';

import { PolymorphicComponentProps } from '@/typings/utils';

export const SCALE = {
  MD: 'md',
  SM: 'sm',
  XS: 'xs',
} as const;

export const VARIANT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
  TEXT: 'text',
} as const;

export type Scale = typeof SCALE[keyof typeof SCALE];
export type Variant = typeof VARIANT[keyof typeof VARIANT];

export interface BaseButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'>,
    LayoutProps,
    SpaceProps {
  as?: 'a' | 'button' | ElementType;
  className?: string;
  style?: CSSProperties;
  external?: boolean;
  isLoading?: boolean;
  scale?: Scale;
  variant?: Variant;
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

export type ButtonProps<E extends ElementType = 'button'> = PolymorphicComponentProps<E, BaseButtonProps>;
