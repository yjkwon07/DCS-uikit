import { ElementType } from 'react';

import { BackgroundProps, BorderProps, FlexboxProps, LayoutProps, PositionProps, SpaceProps } from 'styled-system';

import { ColorsKey, TextColorKey } from '../../../theme/color/@types';
import { ColorStyleProps, PolymorphicComponentProps } from '../../../typings';

export interface BaseBoxProps
  extends BackgroundProps,
    BorderProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    FlexboxProps {
  background?: ColorStyleProps<ColorsKey>;
  color?: ColorStyleProps<TextColorKey>;
}

export type BoxProps<E extends ElementType = 'div'> = PolymorphicComponentProps<E, BaseBoxProps>;
