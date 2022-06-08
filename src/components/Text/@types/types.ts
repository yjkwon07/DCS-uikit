import { LayoutProps, SpaceProps, TypographyProps } from 'styled-system';

import { size } from '../../../theme';

export interface TextProps extends SpaceProps, TypographyProps, LayoutProps {
  color?: string;
  fontSize?: keyof typeof size;
  bold?: boolean;
  ellipsis?: boolean;
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
}
