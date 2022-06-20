import { cloneElement, ElementType, isValidElement } from 'react';

import tw from 'twin.macro';

import externalLinkProps from '../../../utils/externalLinkProps';
import { ButtonProps, SCALE, VARIANT } from '../@types';
import { buttonClassName, StyledButton } from './styles';

/**
 * Component Generic
 * @see https://ui.toast.com/weekly-pick/ko_20210505
 */

const Button = <E extends ElementType = 'button'>({
  startIcon,
  endIcon,
  external,
  className,
  isLoading,
  disabled,
  children,
  ...rest
}: ButtonProps<E>) => {
  const internalProps = external ? externalLinkProps() : {};

  const classNameList = className ? [className] : [];
  const isDisabled = isLoading || disabled;

  if (isDisabled) {
    classNameList.push(buttonClassName.disable);
  }

  return (
    <StyledButton
      className={classNameList.join(' ')}
      isLoading={isLoading}
      disabled={isDisabled}
      {...internalProps}
      {...rest}
    >
      <>
        {isValidElement(startIcon) && cloneElement(startIcon, { mr: '0.5rem' })}
        {children}
        {isValidElement(endIcon) && cloneElement(endIcon, { ml: '0.5rem' })}
      </>
    </StyledButton>
  );
};

Button.defaultProps = {
  isLoading: false,
  external: false,
  variant: VARIANT.PRIMARY,
  scale: SCALE.MD,
  disabled: false,
};

export default Button;
