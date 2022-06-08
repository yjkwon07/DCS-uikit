import { styled, theme } from 'twin.macro';

import { Text } from '../../Text';
import { HeadingProps, SCALE } from '../@types';

const scaleVariant = {
  [SCALE.XXL]: {
    fontSize: '48px',
    fontSizeLg: '64px',
  },
  [SCALE.XL]: {
    fontSize: '32px',
    fontSizeLg: '40px',
  },
  [SCALE.LG]: {
    fontSize: '24px',
    fontSizeLg: '24px',
  },
  [SCALE.MD]: {
    fontSize: '20px',
    fontSizeLg: '20px',
  },
};

export const StyledHeading = styled(Text)<HeadingProps>`
  font-size: ${({ scale }) => scaleVariant[scale || SCALE.MD].fontSize};
  font-weight: 600;
  line-height: 1.1;

  ${theme`screens.lg`} {
    font-size: ${({ scale }) => scaleVariant[scale || SCALE.MD].fontSizeLg};
  }
`;
