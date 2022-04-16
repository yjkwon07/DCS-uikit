import { styled, theme } from 'twin.macro';

import { Text } from '@/components/Text';

import { HeadingProps, SCALE, TAG } from '../@types';

const style = {
  [SCALE.MD]: {
    fontSize: '20px',
    fontSizeLg: '20px',
  },
  [SCALE.LG]: {
    fontSize: '24px',
    fontSizeLg: '24px',
  },
  [SCALE.XL]: {
    fontSize: '32px',
    fontSizeLg: '40px',
  },
  [SCALE.XXL]: {
    fontSize: '48px',
    fontSizeLg: '64px',
  },
};

const Heading = styled(Text)<HeadingProps>`
  font-size: ${({ scale }) => style[scale || SCALE.MD].fontSize};
  font-weight: 600;
  line-height: 1.1;

  ${theme`screens.lg`} {
    font-size: ${({ scale }) => style[scale || SCALE.MD].fontSizeLg};
  }
`;

Heading.defaultProps = {
  as: TAG.H2,
  fontSize: 'base',
  color: 'primary',
  ellipsis: false,
};

export default Heading;
