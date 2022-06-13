import { LayoutProps, SpaceProps, TypographyProps } from 'styled-system';

import { fontScale } from '../../../theme';

export interface TextProps extends SpaceProps, TypographyProps, LayoutProps {
  color?: string;
  scale?: keyof typeof fontScale;
  bold?: boolean;
  ellipsis?: boolean;
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
}
