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

const Svg = styled.svg<SvgProps>`
  align-self: center; // Safari fix
  fill: ${({ color = theme`colors.primary` }) => color};
  flex-shrink: 0;
  ${({ spin }) => spin && spinStyle}

  ${space}
`;

Svg.defaultProps = {
  width: '20px',
  xmlns: 'http://www.w3.org/2000/svg',
  spin: false,
};

export default Svg;
