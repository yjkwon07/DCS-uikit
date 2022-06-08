export const TAG = {
  H1: 'h1',
  H2: 'h2',
  H3: 'h3',
  H4: 'h4',
  H5: 'h5',
  H6: 'h6',
} as const;

export const SCALE = {
  XXL: 'xxl',
  XL: 'xl',
  LG: 'lg',
  MD: 'md',
} as const;

export type Tag = typeof TAG[keyof typeof TAG];
export type Scale = typeof SCALE[keyof typeof SCALE];

export interface HeadingProps {
  as?: Tag;
  scale?: Scale;
}
