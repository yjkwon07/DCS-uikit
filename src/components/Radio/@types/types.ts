import { SpaceProps } from 'styled-system';

export const SCALE = {
  MD: 'md',
  SM: 'sm',
} as const;

export type Scale = typeof SCALE[keyof typeof SCALE];

export interface RadioProps extends SpaceProps {
  scale?: Scale;
}
