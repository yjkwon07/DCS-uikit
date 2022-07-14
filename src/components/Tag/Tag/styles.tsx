import { space, variant, typography, layout } from 'styled-system';
import { css, styled, theme } from 'twin.macro';

import { TagProps, VARIANT, SCALE } from '../@types';

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

export const iconButtonScaleVariant = {
  [SCALE.MD]: {
    height: '20px',
  },
  [SCALE.SM]: {
    height: '16px',
  },
};

export const styleVariant = {
  [VARIANT.PRIMARY]: {
    backgroundColor: theme`colors.tag.primary`,
  },
  [VARIANT.SECONDARY]: {
    backgroundColor: theme`colors.tag.secondary`,
  },
  [VARIANT.SUCCESS]: {
    backgroundColor: theme`colors.tag.success`,
  },
  [VARIANT.WARNING]: {
    backgroundColor: theme`colors.tag.warning`,
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

  & > button {
    width: 100%;
    ${({ scale = SCALE.MD }) => iconButtonScaleVariant[scale]}

    color: ${theme`backgroundColor.inherit`};
    background: ${theme`backgroundColor.inherit`};

    &:disabled {
      background-color: ${theme`colors.tag.disabled`};
      color: ${theme`textColor.tag.disabled`};
      box-shadow: none;
      cursor: not-allowed;
    }

    &:focus:not(:disabled) {
      box-shadow: ${theme`shadow.focus`};
    }
  }

  & svg {
    fill: currentColor;
  }

  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}

  ${variant({
    prop: 'scale',
    variants: scaleVariant,
  })}
  ${variant({
    variants: styleVariant,
  })}

  ${layout}
  ${space}
  ${typography}

  ${outlineStyle}
`;
