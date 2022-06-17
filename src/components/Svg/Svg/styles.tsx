import { keyframes } from '@emotion/react';
import { space } from 'styled-system';
import { styled, css, theme } from 'twin.macro';

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
  fill: ${({ color = theme`svg.fill` }) => color};
  flex-shrink: 0;
  ${({ spin }) => spin && spinStyle}

  ${space}
`;
