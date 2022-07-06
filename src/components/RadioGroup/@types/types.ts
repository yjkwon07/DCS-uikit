import { RadioGroup as HRadioGroup } from '@headlessui/react';
import { LayoutProps, SpaceProps } from 'styled-system';

import { ExtractProps } from '../../../typings';

export type RadioGroupProps = ExtractProps<typeof HRadioGroup> & LayoutProps & SpaceProps;

export type RadioGroupLabelProps = ExtractProps<typeof HRadioGroup.Label> & {
  checked?: boolean;
  isScreenOnly?: boolean;
};

export type RadioGroupDescriptionProps = ExtractProps<typeof HRadioGroup.Description> & {
  checked?: boolean;
};

export type RadioGroupOptionProps = ExtractProps<typeof HRadioGroup.Option> & {
  children?: (bag: {
    checked: boolean;
    active: boolean;
    disabled: boolean;
  }) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
};
