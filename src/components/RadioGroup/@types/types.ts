import { ComponentProps } from 'react';

import { RadioGroup as HRadioGroup } from '@headlessui/react';

export type RadioGroupProps = ComponentProps<typeof HRadioGroup>;
export type RadioGroupLabelProps = ComponentProps<typeof HRadioGroup.Label> & {
  checked?: boolean;
  isScreenOnly?: boolean;
};
export type RadioGroupDescriptionProps = ComponentProps<typeof HRadioGroup.Description> & {
  checked?: boolean;
};
export type RadioGroupOptionProps = ComponentProps<typeof HRadioGroup.Option> & {
  children?: (bag: {
    checked: boolean;
    active: boolean;
    disabled: boolean;
  }) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
};
