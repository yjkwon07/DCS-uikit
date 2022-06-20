import { RadioGroup as HRadioGroup } from '@headlessui/react';
import { layout, space } from 'styled-system';
import tw, { styled } from 'twin.macro';

import { CheckIcon } from '@/components/Svg';

import { RadioGroupDescriptionProps, RadioGroupLabelProps, RadioGroupOptionProps, RadioGroupProps } from '../@types';

const StyledRadioGroup = styled(HRadioGroup)`
  ${layout}
  ${space}
`;

const RadioGroup = (props: RadioGroupProps) => {
  return <StyledRadioGroup {...props} />;
};

const Option = ({ children, ...reset }: RadioGroupOptionProps) => {
  return (
    <HRadioGroup.Option {...reset}>
      {(props) => (
        <div
          css={[
            tw`flex`,
            tw`relative px-5 py-4 rounded-lg shadow-md cursor-pointer`,
            tw`[font-size:14px] [font-weight:600] [letter-spacing:0.03em] [line-height:18px]`,
            tw`border-0 [border-radius:8px]`,
            tw`focus:outline-none`,
            props.active && tw`ring-2 ring-offset-2 ring-offset-focus ring-white bg-radioGroup-primary`,
            props.checked
              ? tw`bg-radioGroup-primary bg-opacity-75 text-radioGroup-primary`
              : tw`bg-radioGroup-secondary`,
          ]}
        >
          <div tw="flex items-center justify-between w-full">
            <div tw="flex items-center">
              <div tw="text-sm">{children && children(props)}</div>
            </div>
            {props.checked && (
              <div tw="shrink-0">
                <CheckIcon width="1.5rem" height="1.5rem" />
              </div>
            )}
          </div>
        </div>
      )}
    </HRadioGroup.Option>
  );
};

const Label = ({ isScreenOnly, checked, children, ...reset }: RadioGroupLabelProps) => {
  return (
    <HRadioGroup.Label
      css={[
        tw`[font-weight:500]`,
        isScreenOnly && tw`sr-only`,
        checked ? tw`text-radioGroup-label-primary` : tw`text-radioGroup-label-secondary`,
      ]}
      {...reset}
    >
      {children}
    </HRadioGroup.Label>
  );
};

const Description = ({ checked, children, ...reset }: RadioGroupDescriptionProps) => {
  return (
    <HRadioGroup.Description
      css={[checked ? tw`text-radioGroup-description-primary` : tw`text-radioGroup-description-secondary`]}
      {...reset}
    >
      {children}
    </HRadioGroup.Description>
  );
};

RadioGroup.Option = Option;
RadioGroup.Label = Label;
RadioGroup.Description = Description;

export default RadioGroup;
