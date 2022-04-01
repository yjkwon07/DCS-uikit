import { ReactNode } from 'react';

import { LayoutProps, SpaceProps } from 'styled-system';

export const SCALE = {
  MD: 'md',
  SM: 'sm',
  XS: 'xs',
} as const;

export type Scale = typeof SCALE[keyof typeof SCALE];

export interface InputProps extends LayoutProps, SpaceProps {
  scale?: Scale;
  isSuccess?: boolean;
  isWarning?: boolean;
}

export interface InputGroupProps extends LayoutProps, SpaceProps {
  scale?: Scale;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}
