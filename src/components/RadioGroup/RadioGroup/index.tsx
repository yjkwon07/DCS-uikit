import { ElementType } from 'react';

import { RadioGroup as HRadioGroup } from '@headlessui/react';
import { layout, space } from 'styled-system';
import tw, { css, styled, theme } from 'twin.macro';

import shouldForwardProp from '../../../utils/shouldForwardProp';
import { CheckmarkCircleFillIcon } from '../../Svg';
import { RadioGroupDescriptionProps, RadioGroupLabelProps, RadioGroupOptionProps, RadioGroupProps } from '../@types';

const StyledRadioGroup = styled(HRadioGroup as any, { shouldForwardProp })`
  ${layout}
  ${space}
`;

/**
 * @see https://headlessui.dev/react/radio-group
 */
const RadioGroup = <E extends ElementType = 'div', T = string>({ disabled, ...props }: RadioGroupProps<E, T>) => {
  return (
    <StyledRadioGroup
      css={[
        css`
          ${disabled &&
          css`
            & * {
              color: ${theme`textColor.radioGroup.disabled`};
              box-shadow: none;
              cursor: not-allowed;
            }
            & svg {
              fill: ${theme`colors.radioGroup.icon.disabled`};
            }
          `}
        `,
      ]}
      disabled={disabled}
      {...props}
    />
  );
};

const Option = ({ children, ...props }: RadioGroupOptionProps) => {
  return (
    <HRadioGroup.Option {...props}>
      {(props) => (
        <div
          css={[
            tw`flex`,
            tw`relative px-5 py-4 rounded-lg shadow-md cursor-pointer`,
            tw`[font-size:14px] [font-weight:600] [letter-spacing:0.03em] [line-height:18px]`,
            tw`border-0 [border-radius:8px]`,
            tw`focus:outline-none`,
            props.active && tw`outline-none ring-shadow-focus`,
            props.checked
              ? tw`bg-radioGroup-primary bg-opacity-75 text-radioGroup-primary`
              : tw`bg-radioGroup-secondary`,
            props.disabled && tw`bg-radioGroup-disabled shadow-none`,
          ]}
        >
          <div css={[tw`flex items-center justify-between w-full`]}>
            <div css={[tw`flex items-center`]}>
              <div css={[tw`text-sm`]}>{children && children(props)}</div>
            </div>
            {props.checked && (
              <div css={[tw`shrink-0`]}>
                <CheckmarkCircleFillIcon width="1.5rem" height="1.5rem" />
              </div>
            )}
          </div>
        </div>
      )}
    </HRadioGroup.Option>
  );
};

const Label = ({ isScreenOnly, checked, children, ...props }: RadioGroupLabelProps) => {
  return (
    <HRadioGroup.Label
      css={[
        tw`[font-weight:500]`,
        isScreenOnly && tw`sr-only`,
        checked ? tw`text-radioGroup-label-primary` : tw`text-radioGroup-label-secondary`,
      ]}
      {...props}
    >
      {children}
    </HRadioGroup.Label>
  );
};

const Description = ({ checked, children, ...props }: RadioGroupDescriptionProps) => {
  return (
    <HRadioGroup.Description
      css={[checked ? tw`text-radioGroup-description-primary` : tw`text-radioGroup-description-secondary`]}
      {...props}
    >
      {children}
    </HRadioGroup.Description>
  );
};

RadioGroup.Option = Option;
RadioGroup.Label = Label;
RadioGroup.Description = Description;

export default RadioGroup;
