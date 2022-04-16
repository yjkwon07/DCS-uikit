import { space, variant, typography } from 'styled-system';
import tw, { css, styled, theme } from 'twin.macro';

import { TagProps, VARIANT, SCALE } from '../@types/types';

export const scaleVariant = {
  [SCALE.MD]: {
    height: '28px',
    padding: '0 8px',
    fontSize: '14px',
  },
  [SCALE.SM]: {
    height: '24px',
    padding: '0 6px',
    fontSize: '12px',
  },
};

export const styleVariant = {
  [VARIANT.PRIMARY]: {
    backgroundColor: theme`colors.primary`,
  },
  [VARIANT.SECONDARY]: {
    backgroundColor: theme`colors.secondary`,
  },
  [VARIANT.SUCCESS]: {
    backgroundColor: theme`colors.success`,
  },
  [VARIANT.WARNING]: {
    backgroundColor: theme`colors.warning`,
  },
};

const outlineStyle = ({ outline, variant = VARIANT.PRIMARY }: TagProps) => {
  if (outline) {
    return css`
      color: ${styleVariant[variant].backgroundColor};
      background: ${theme`backgroundColor.inherit`};
      border: 2px solid ${styleVariant[variant].backgroundColor};
    `;
  }

  return '';
};

export const StyledTag = styled.div<TagProps>`
  align-items: center;
  border-radius: 16px;
  display: inline-flex;
  color: #ffff;
  font-weight: 400;
  white-space: nowrap;

  & > svg {
    ${tw`fill[currentColor]`};
  }

  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}

  ${variant({
    prop: 'scale',
    variants: scaleVariant,
  })}
  ${variant({
    variants: styleVariant,
  })}

  ${space}
  ${typography}

  ${outlineStyle}
`;
