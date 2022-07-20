import { ElementType } from 'react';

import { LayoutProps, SpaceProps, TypographyProps } from 'styled-system';

import { fontScale } from '../../../theme';
import { PolymorphicComponentProps, StyledColorProps } from '../../../typings';

export interface BaseTextProps extends LayoutProps, SpaceProps, TypographyProps, StyledColorProps {
  scale?: keyof typeof fontScale;
  bold?: boolean;
  ellipsis?: boolean;
  textTransform?: 'uppercase' | 'lowercase' | 'capitalize';
}

export type TextProps<E extends ElementType = 'div'> = PolymorphicComponentProps<E, BaseTextProps>;
