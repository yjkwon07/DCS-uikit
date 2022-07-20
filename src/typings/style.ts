import { ColorsKey, TextColorKey } from '../theme/color/@types';
import { ColorStyleProps } from './utils';

export type GapProps = {
  gap?: string | number;
  rowGap?: string | number;
  columnGap?: string | number;
};

export type StyledColorProps = {
  background?: ColorStyleProps<ColorsKey>;
  color?: ColorStyleProps<TextColorKey>;
};
