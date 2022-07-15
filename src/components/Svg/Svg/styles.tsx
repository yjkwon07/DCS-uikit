import { keyframes } from '@emotion/react';
import { get } from 'lodash-es';
import { space } from 'styled-system';
import { styled, css } from 'twin.macro';

import { colors } from '../../../theme';
import { SvgProps } from '../@types';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const spinStyle = css`
  animation: ${rotate} 2s linear infinite;
`;

export const StyledSvg = styled.svg<SvgProps>`
  align-self: center; // Safari fix
  fill: ${({ fill }) =>
    fill &&
    (get(colors, fill.replace(' !important', ''))
      ? get(colors, fill.replace(' !important', '')) + (fill.includes('!important') ? ' !important' : '')
      : fill)};
  flex-shrink: 0;
  ${({ spin }) => spin && spinStyle}

  ${space}
`;
