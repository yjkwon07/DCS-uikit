import { space, typography, layout } from 'styled-system';
import { styled } from 'twin.macro';

import { size } from '@/theme';
import getThemeValue from '@/utils/getThemeValue';

import { TextProps } from '../@types';

const Text = styled.div<TextProps>`
  color: ${({ color }) =>
    color && (typeof color === 'string' && color.includes('#') ? color : getThemeValue('textColor', color))};
  font-size: ${({ fontSize }) => fontSize && size[fontSize]};
  font-weight: ${({ bold }) => (bold ? 600 : 400)};
  line-height: 1.5;
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}
  ${({ ellipsis }) =>
    ellipsis &&
    `white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;`}

  ${space}
  ${typography}
  ${layout}
`;

Text.defaultProps = {
  fontSize: 'base',
  color: 'primary',
  ellipsis: false,
};

export default Text;
