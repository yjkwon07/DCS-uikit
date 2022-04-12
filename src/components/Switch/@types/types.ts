import { ComponentProps, CSSProperties, ElementType, ReactNode } from 'react';

import { Switch } from '@headlessui/react';
import { LayoutProps, SpaceProps } from 'styled-system';

import { PolymorphicComponentProps } from '@/typings/utils';

export const SCALE = {
  MD: 'md',
  SM: 'sm',
  XS: 'xs',
} as const;

export type Scale = typeof SCALE[keyof typeof SCALE];

export type BaseSwitchProps = ComponentProps<typeof Switch> &
  LayoutProps &
  SpaceProps & {
    as?: 'div' | 'button' | ElementType;
    description?: string;
    className?: string;
    style?: CSSProperties;
    scale?: Scale;
    disabled?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
  };

export type SwitchProps<E extends ElementType = 'button'> = PolymorphicComponentProps<E, BaseSwitchProps>;
