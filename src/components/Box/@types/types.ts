import { HTMLAttributes } from 'react';

import { BackgroundProps, BorderProps, FlexboxProps, LayoutProps, PositionProps, SpaceProps } from 'styled-system';

import { TextColorKey } from '../../../theme/color/@types';

export interface BoxProps
  extends BackgroundProps,
    BorderProps,
    LayoutProps,
    PositionProps,
    SpaceProps,
    FlexboxProps,
    HTMLAttributes<HTMLDivElement> {
  color?: TextColorKey | `#${string}` | `rgb${string}`;
}
