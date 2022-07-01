import { LayoutProps, SpaceProps, TypographyProps } from 'styled-system';

import { fontScale } from '../../../theme';
import { TextColorKey } from '../../../theme/color/@types';

export interface TextProps extends SpaceProps, TypographyProps, LayoutProps {
  color?: TextColorKey | `#${string}`;
  scale?: keyof typeof fontScale;
  bold?: boolean;
  ellipsis?: boolean;
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
}
