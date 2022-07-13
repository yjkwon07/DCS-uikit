import { css as cssImport } from '@emotion/react';
import styledImport from '@emotion/styled';
import 'twin.macro';

import { ColorsKey, TextColorKey } from '../theme/color/@types';
import { ColorStyleProps } from './utils';

declare module 'twin.macro' {
  const styled: typeof styledImport;
  const css: typeof cssImport;
}

declare global {
  type SubPartial<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

  type GapProps = {
    gap?: string | number;
    rowGap?: string | number;
    columnGap?: string | number;
  };

  type StyledColorProps = {
    background?: ColorStyleProps<ColorsKey>;
    color?: ColorStyleProps<TextColorKey>;
  };
}
