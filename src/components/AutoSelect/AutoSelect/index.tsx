import { ElementType, Fragment } from 'react';

import { Combobox as HAutoSelect, Transition } from '@headlessui/react';
import { space, layout } from 'styled-system';
import tw, { styled } from 'twin.macro';

import { CheckIcon, SelectorIcon } from '../../Svg';
import {
  AutoSelectProps,
  AutoSelectButtonProps,
  AutoSelectInputProps,
  AutoSelectOptionsProps,
  AutoSelectOptionProps,
  AutoSelectInputGroupProps,
} from '../@types';

const StyledAutoSelect = styled(HAutoSelect as any)`
  ${layout}
  ${space}
`;

const AutoSelect = <E extends ElementType, T>(props: AutoSelectProps<E, T>) => {
  return <StyledAutoSelect as="div" {...props} />;
};

const InputGroup = (props: AutoSelectInputGroupProps) => {
  return (
    <div
      css={[
        tw`relative w-full py-2 pl-3 pr-10 text-secondary`,
        tw`text-left bg-white rounded-lg shadow-sm`,
        tw`font-size[14px] font-weight[600] letter-spacing[0.03em] line-height[18px]`,
        tw`border-0 border-radius[8px]`,
        tw`focus:outline-none focus:ring-2 ring-offset-2 ring-offset-focus ring-white`,
        tw`hover:opacity-[0.65]`,
      ]}
      {...props}
    />
  );
};

const Input = <T,>(props: AutoSelectInputProps<T>) => {
  return <HAutoSelect.Input css={[tw`w-full border-none focus:outline-none`]} {...props} />;
};

const Button = <E extends ElementType = 'button'>(props: AutoSelectButtonProps<E>) => {
  return (
    <HAutoSelect.Button css={[tw`absolute inset-y-0 right-0 flex items-center pr-2`]} {...props}>
      <SelectorIcon tw="w-5 h-5 text-secondary" aria-hidden="true" />
    </HAutoSelect.Button>
  );
};

const NotFound = () => {
  return <div tw="cursor-pointer select-none relative py-2 px-4 text-gray-700">Nothing found.</div>;
};

const Options = <E extends ElementType = 'ul'>({
  afterLeave,
  isNotFound = false,
  children,
  ...reset
}: AutoSelectOptionsProps<E>) => {
  return (
    <Transition
      as={Fragment}
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      afterLeave={afterLeave}
    >
      <div tw="relative mt-1">
        <HAutoSelect.Options
          css={[
            tw`absolute w-full py-1 mt-1 max-h-60`,
            tw`overflow-auto`,
            tw`font-size[14px] font-weight[600] letter-spacing[0.03em] line-height[18px]`,
            tw`bg-white rounded-md shadow-sm`,
            tw`ring-1 ring-black ring-opacity-5 focus:outline-none`,
          ]}
          {...reset}
        >
          {isNotFound && <NotFound />}
          {children}
        </HAutoSelect.Options>
      </div>
    </Transition>
  );
};

const Option = ({ name, ...reset }: AutoSelectOptionProps) => {
  return (
    <HAutoSelect.Option {...reset}>
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
    </HAutoSelect.Option>
  );
};

AutoSelect.InputGroup = InputGroup;
AutoSelect.Input = Input;
AutoSelect.Button = Button;
AutoSelect.Options = Options;
AutoSelect.Option = Option;

export default AutoSelect;
