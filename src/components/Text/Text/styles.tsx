import { space, typography, layout } from 'styled-system';
import { styled } from 'twin.macro';

import colorStyle from '../../../utils/colorStyle';
import fontScaleStyle from '../../../utils/fontScaleStyle';
import { BaseTextProps } from '../@types';

export const StyledText = styled.div<BaseTextProps>`
  ${colorStyle}
  ${fontScaleStyle}

  font-weight: ${({ bold }) => bold && 600};
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}
  ${({ ellipsis }) =>
    ellipsis &&
    `white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;`}

  ${layout}
  ${space}
  ${typography}
`;
