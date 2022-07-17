import { cloneElement, ElementType, isValidElement } from 'react';

import cx from '../../../utils/cx';
import externalLinkProps from '../../../utils/externalLinkProps';
import { ButtonProps, SCALE, VARIANT } from '../@types';
import { buttonClassName, StyledButton } from './styles';

const Button = <E extends ElementType = 'button'>({
  startIcon,
  endIcon,
  external,
  className,
  isLoading,
  disabled,
  children,
  ...props
}: ButtonProps<E>) => {
  const internalProps = external ? externalLinkProps() : {};

  const isDisabled = isLoading || disabled;

  return (
    <StyledButton
      className={cx(className, isDisabled && buttonClassName.disable)}
      isLoading={isLoading}
      disabled={isDisabled}
      {...internalProps}
      {...props}
    >
      <>
        {isValidElement(startIcon) &&
          cloneElement(startIcon, {
            mr: '0.5rem',
          })}
        {children}
        {isValidElement(endIcon) &&
          cloneElement(endIcon, {
            ml: '0.5rem',
          })}
      </>
    </StyledButton>
  );
};

Button.defaultProps = {
  variant: VARIANT.PRIMARY,
  scale: SCALE.MD,
};

export default Button;
