import { GridProps as _GridProps } from 'styled-system';

import { FlexProps } from '../../Flex';

export interface GapProps {
  gap?: string | number;
  rowGap?: string | number;
  columnGap?: string | number;
}

export interface GridProps extends FlexProps, _GridProps, GapProps {}
