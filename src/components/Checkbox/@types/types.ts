import { LayoutProps, SpaceProps } from 'styled-system';

export const SCALE = {
  MD: 'md',
  SM: 'sm',
} as const;

export type Scale = typeof SCALE[keyof typeof SCALE];

export interface CheckboxProps extends LayoutProps, SpaceProps {
  scale?: Scale;
}
