import { cloneElement, ElementType, isValidElement } from 'react';

import { Switch as HSwitch } from '@headlessui/react';
import { layout, space } from 'styled-system';
import tw, { styled, theme } from 'twin.macro';

import { SCALE, SwitchProps } from '../@types';
import { activeRingStyle, disabledStyle, sizeVariant, switchClassName } from './styles';

const StyledSwitch = styled(HSwitch)`
  ${layout}
  ${space}
`;

const Switch = <E extends ElementType = 'button'>({
  checked,
  onChange,
  scale = SCALE.MD,
  description,
  startIcon,
  endIcon,
  ...reset
}: SwitchProps<E>) => {
  return (
    <StyledSwitch
      checked={checked}
      onChange={onChange}
      css={[
        checked ? tw`bg-toggle-primary` : tw`bg-toggle-secondary`,
        tw`relative inline-flex shrink-0 
        border-2 border-transparent 
        rounded-full cursor-pointer 
        transition-colors ease-in-out duration-200
        focus:outline-none`,
        activeRingStyle,
        disabledStyle,
        sizeVariant[scale].switch,
      ]}
      {...reset}
    >
      {(startIcon || endIcon) && (
        <div tw="absolute w-full h-full flex justify-center items-center gap-1">
          {isValidElement(startIcon) &&
            cloneElement(startIcon, { ...sizeVariant[scale].icon, fill: theme`colors.toggle.icon.secondary` })}
          {isValidElement(endIcon) && cloneElement(endIcon, { ...sizeVariant[scale].icon })}
        </div>
      )}
      <span tw="sr-only">{description}</span>
      <span
        aria-hidden="true"
        className={switchClassName.handle}
        css={[
          checked ? sizeVariant[scale].checked : tw`translate-x-0`,
          tw`rounded-full bg-toggle-handle ring-0 transform transition ease-in duration-200`,
          tw`inline-flex items-center justify-center`,
          sizeVariant[scale].handle,
        ]}
      >
        {checked
          ? isValidElement(endIcon) &&
            cloneElement(endIcon, { ...sizeVariant[scale].icon, fill: theme`colors.toggle.icon.primary` })
          : isValidElement(startIcon) && cloneElement(startIcon, { ...sizeVariant[scale].icon })}
      </span>
    </StyledSwitch>
  );
};

Switch.Group = HSwitch.Group;
Switch.Label = HSwitch.Label;
Switch.Description = HSwitch.Description;

export default Switch;
