import { ElementType, Fragment } from 'react';

import { Listbox as HSelect } from '@headlessui/react';
import { space, layout } from 'styled-system';
import tw, { css, styled, theme } from 'twin.macro';

import shouldForwardProp from '../../../utils/shouldForwardProp';
import { CheckmarkCircleFillIcon, SelectorIcon } from '../../Svg';
import { Transition } from '../../Transition';
import { SelectProps, SelectButtonProps, SelectOptionProps, SelectOptionsProps } from '../@types';

const StyledSelect = styled(HSelect as any, {
  shouldForwardProp,
})<SelectProps>`
  ${layout}
  ${space}
`;

/**
 * @see https://headlessui.dev/react/listbox
 * @props deprecated multiple
 */
const Select = <E extends ElementType = 'div', T = string>({ disabled, ...props }: SelectProps<E, T>) => {
  return (
    <StyledSelect
      as="div"
      css={[
        css`
          ${disabled
            ? css`
                & > button,
                & > button * {
                  background-color: ${theme`colors.select.disabled`};
                  color: ${theme`textColor.select.disabled`};
                  box-shadow: none;
                  cursor: not-allowed;
                }
              `
            : css`
                &:focus-within > button:nth-of-type(1) {
                  ${[tw`outline-none ring-shadow-focus`]}
                }
              `}
        `,
      ]}
      disabled={disabled}
      {...props}
    />
  );
};

const Button = <E extends ElementType = 'button'>({
  selectedName,
  placeholder = 'Select option...',
  ...props
}: SelectButtonProps<E>) => {
  return (
    <HSelect.Button
      css={[
        tw`relative w-full py-2 pl-3 pr-10 text-select-primary`,
        tw`text-left bg-select-primary rounded-lg shadow-sm`,
        tw`[font-size:14px] [font-weight:600] [letter-spacing:0.03em] [line-height:18px]`,
        tw`border-0 [border-radius:8px]`,
        tw`cursor-pointer`,
      ]}
      {...props}
    >
      <span css={[tw`block truncate`]}>{selectedName || placeholder}</span>
      <span css={[tw`absolute inset-y-0 right-2 flex items-center`]}>
        <SelectorIcon css={[tw`w-5 h-5 fill-select-icon`]} aria-hidden="true" />
      </span>
    </HSelect.Button>
  );
};

const Options = <E extends ElementType = 'ul'>(props: SelectOptionsProps<E>) => {
  return (
    <Transition
      as={Fragment}
      leave={tw`transition ease-in duration-100`}
      leaveFrom={tw`opacity-100`}
      leaveTo={tw`opacity-0`}
    >
      <div tw="relative mt-1 z-select-options">
        <HSelect.Options
          css={[
            tw`absolute w-full py-1 mt-1 max-h-60`,
            tw`overflow-auto`,
            tw`[font-size:14px] [font-weight:600] [letter-spacing:0.03em] [line-height:18px]`,
            tw`bg-select-secondary rounded-md shadow-sm`,
            tw`ring-1 ring-black ring-opacity-5 focus:outline-none`,
          ]}
          {...props}
        />
      </div>
    </Transition>
  );
};

const Option = ({ name, ...props }: SelectOptionProps) => {
  return (
    <HSelect.Option {...props}>
      {(props) => (
        <div
          css={[
            tw`relative cursor-pointer select-none py-2 pl-10 pr-4`,
            tw`[font-size:14px] [font-weight:600] [letter-spacing:0.03em] [line-height:18px]`,
            tw`text-select-secondary`,
            props.active && tw`text-select-active bg-select-active hover:opacity-[0.65]`,
            props.selected && tw`text-select-selected bg-select-selected opacity-[0.65]`,
          ]}
        >
          {props.selected && (
            <span css={[tw`absolute inset-y-0 left-0 flex items-center pl-3`]}>
              <CheckmarkCircleFillIcon width="1.25rem" height="1.25rem" aria-hidden="true" />
            </span>
          )}
          <span css={[tw`block truncate`]}>{name}</span>
        </div>
      )}
    </HSelect.Option>
  );
};

Select.Button = Button;
Select.Options = Options;
Select.Option = Option;

export default Select;
