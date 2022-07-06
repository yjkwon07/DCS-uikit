import { HTMLAttributes } from 'react';

import { BackgroundProps, BorderProps, FlexboxProps, LayoutProps, PositionProps, SpaceProps } from 'styled-system';

import { TextColorKey } from '../../../theme/color/@types';
import { ColorStyleProps } from '../../../typings';

export interface BoxProps
  extends BackgroundProps,
    BorderProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    FlexboxProps,
    HTMLAttributes<HTMLDivElement> {
  color?: ColorStyleProps<TextColorKey>;
}
