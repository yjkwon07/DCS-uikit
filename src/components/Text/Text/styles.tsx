import { space, typography, layout } from 'styled-system';
import { styled } from 'twin.macro';

import colorStyle from '../../../utils/colorStyle';
import fontScaleStyle from '../../../utils/fontScaleStyle';
import { TextProps } from '../@types';

export const StyledText = styled.div<TextProps>`
  ${colorStyle}
  ${fontScaleStyle}

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
