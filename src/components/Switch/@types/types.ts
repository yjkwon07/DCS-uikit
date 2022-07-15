import { CSSProperties, ElementType, ReactNode } from 'react';

import { Switch } from '@headlessui/react';
import { LayoutProps, SpaceProps } from 'styled-system';

import { ExtractProps, PolymorphicComponentProps } from '../../../typings';

export const SCALE = {
  MD: 'md',
  SM: 'sm',
  XS: 'xs',
} as const;

export type Scale = typeof SCALE[keyof typeof SCALE];

export interface BaseSwitchProps extends LayoutProps, SpaceProps {
  as?: 'div' | 'button' | ElementType;
  description?: string;
  className?: string;
  style?: CSSProperties;
  scale?: Scale;
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onChange: (value: boolean) => void;
}

export type SwitchProps<E extends ElementType = 'button'> = ExtractProps<typeof Switch> &
  PolymorphicComponentProps<E, BaseSwitchProps>;
