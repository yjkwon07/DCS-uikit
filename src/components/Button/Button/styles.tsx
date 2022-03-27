import { space, layout, variant } from 'styled-system';
import tw, { css, styled, theme } from 'twin.macro';

import { BaseButtonProps, SCALE, VARIANT } from '../@types/types';

export const buttonClassName = {
  disable: 'button--disabled',
};

export const scaleVariant = {
  [SCALE.MD]: {
    height: '48px',
    padding: '0 24px',
  },
  [SCALE.SM]: {
    height: '32px',
    padding: '0 16px',
  },
  [SCALE.XS]: {
    height: '20px',
    fontSize: '12px',
    padding: '0 8px',
  },
};

export const styleVariant = {
  [VARIANT.PRIMARY]: {
    backgroundColor: theme`colors.primary`,
    color: theme`textColor.primary`,
  },
  [VARIANT.SECONDARY]: {
    backgroundColor: theme`colors.transparent`,
    color: theme`textColor.secondary`,
    border: '2px solid',
    borderColor: theme`colors.primary`,
    boxShadow: 'none',
    [`&:disabled, &.${buttonClassName.disable}`]: {
      backgroundColor: theme`colors.transparent`,
    },
  },
  [VARIANT.TERTIARY]: {
    backgroundColor: theme`colors.tertiary`,
    color: theme`textColor.secondary`,
    boxShadow: 'none',
  },
  [VARIANT.TEXT]: {
    backgroundColor: theme`colors.transparent`,
    color: theme`textColor.secondary`,
    boxShadow: 'none',
  },
};

export const disabledStyle = ({ isLoading }: BaseButtonProps) => {
  if (isLoading === true) {
    return css`
      &:disabled,
      &.${buttonClassName.disable} {
        cursor: not-allowed;
      }
    `;
  }

  return css`
    &:disabled,
    &.${buttonClassName.disable} {
      background-color: ${theme`colors.disabled`};
      color: ${theme`textColor.disabled`};
      border-color: ${theme`colors.disabled`};
      box-shadow: none;
      cursor: not-allowed;
    }
  `;
};

export const StyledButton = styled.button<BaseButtonProps>`
  ${[
    tw`font-size[14px] font-weight[600] letter-spacing[0.03em] line-height[18px]`,
    tw`inline-flex items-center justify-center`,
    tw`border-0 border-radius[8px]`,
    tw`padding[10px 15px]`,
    ({ isLoading = false }) => (isLoading ? tw`opacity-[.5]` : tw`opacity-[1]`),
    tw`focus:outline-none`,
  ]}

  transition: background-color 0.2s, opacity 0.2s;

  &:hover:not(:disabled):not(:active):not(.${buttonClassName.disable}) {
    opacity: 0.65;
  }

  ${disabledStyle}

  ${variant({
    prop: 'scale',
    variants: scaleVariant,
  })}
  ${variant({
    variants: styleVariant,
  })}
  
  ${layout}
  ${space}
`;
