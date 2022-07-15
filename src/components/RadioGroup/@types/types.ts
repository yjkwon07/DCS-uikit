import { ElementType, JSXElementConstructor, ReactElement } from 'react';

import { RadioGroup as HRadioGroup } from '@headlessui/react';
import { LayoutProps, SpaceProps } from 'styled-system';

import { ExtractProps, PolymorphicComponentProps } from '../../../typings';

export interface BaseRadioGroupProps<T = string> extends LayoutProps, SpaceProps {
  as?: ElementType;
  className?: string;
  value: T;
  onChange(value: T): void;
  disabled?: boolean;
}

export type RadioGroupProps<E extends ElementType = 'div', T = string> = PolymorphicComponentProps<
  E,
  BaseRadioGroupProps<T>
>;

export type RadioGroupLabelProps = ExtractProps<typeof HRadioGroup.Label> & {
  checked?: boolean;
  isScreenOnly?: boolean;
};

export type RadioGroupDescriptionProps = ExtractProps<typeof HRadioGroup.Description> & {
  checked?: boolean;
};

export type RadioGroupOptionProps = ExtractProps<typeof HRadioGroup.Option> & {
  children?: (option: {
    checked: boolean;
    active: boolean;
    disabled: boolean;
  }) => ReactElement<any, string | JSXElementConstructor<any>>;
};
