import { BaseTextProps } from '../../Text';

export const TAG = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
} as const;

export type Tag = typeof TAG[keyof typeof TAG];

export interface HeadingProps extends BaseTextProps {
  as?: Tag;
}
