import { ElementType, Fragment } from 'react';

import { Listbox as HSelect, Transition } from '@headlessui/react';
import { space, layout } from 'styled-system';
import tw, { styled } from 'twin.macro';

import { CheckIcon, SelectorIcon } from '@/components/Svg';

import { SelectButtonProps, SelectOptionProps, SelectOptionsProps, SelectProps } from '../@types';

const StyledSelect = styled(HSelect)<SelectProps>`
  ${layout}
  ${space}
`;

const Select = (props: SelectProps) => {
  return <StyledSelect as="div" {...props} />;
};

const Button = <E extends ElementType = 'button'>({
  selectedName,
  placeholder = 'Select option...',
  ...reset
}: SelectButtonProps<E>) => {
  return (
    <HSelect.Button
      css={[
        tw`relative w-full py-2 pl-3 pr-10 text-secondary`,
        tw`text-left bg-white rounded-lg shadow-sm`,
        tw`font-size[14px] font-weight[600] letter-spacing[0.03em] line-height[18px]`,
        tw`border-0 border-radius[8px]`,
        tw`cursor-pointer`,
        tw`focus:outline-none focus:ring-2 ring-offset-2 ring-offset-focus ring-white`,
        tw`hover:opacity-[0.65]`,
      ]}
      {...reset}
    >
      <span tw="block truncate">{selectedName || placeholder}</span>
      <span tw="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <SelectorIcon tw="w-5 h-5 text-gray-400" aria-hidden="true" />
      </span>
    </HSelect.Button>
  );
};

const Options = <E extends ElementType = 'ul'>(props: SelectOptionsProps<E>) => {
  return (
    <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
      <div tw="relative mt-1">
        <HSelect.Options
          css={[
            tw`absolute w-full py-1 mt-1 max-h-60`,
            tw`overflow-auto`,
            tw`font-size[14px] font-weight[600] letter-spacing[0.03em] line-height[18px]`,
            tw`bg-white rounded-md shadow-sm`,
            tw`ring-1 ring-black ring-opacity-5 focus:outline-none`,
          ]}
          {...props}
        />
      </div>
    </Transition>
  );
};

const Option = ({ name, ...reset }: SelectOptionProps) => {
  return (
    <HSelect.Option {...reset}>
      {(props) => (
        <div
          css={[
            tw`relative cursor-pointer select-none py-2 pl-10 pr-4`,
            tw`font-size[14px] font-weight[600] letter-spacing[0.03em] line-height[18px]`,
            tw`text-secondary`,
            props.active && tw`text-primary bg-primary hover:opacity-[0.65]`,
            props.selected && tw`text-primary bg-primary opacity-[0.65]`,
          ]}
        >
          <span css={[tw`block truncate`]}>{name}</span>
          {props.selected ? (
            <span tw="absolute inset-y-0 left-0 flex items-center pl-3 text-primary">
              <CheckIcon width="1.25rem" height="1.25rem" aria-hidden="true" />
            </span>
          ) : null}
        </div>
      )}
    </HSelect.Option>
  );
};

Select.Button = Button;
Select.Options = Options;
Select.Option = Option;

export default Select;
