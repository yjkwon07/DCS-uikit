import { ElementType, JSXElementConstructor, ReactElement, ReactNode } from 'react';

import { Listbox as Select } from '@headlessui/react';
import { LayoutProps, SpaceProps } from 'styled-system';

import { PolymorphicComponentProps, ExtractProps } from '../../../typings';

export interface BaseSelectProps<T = string> extends LayoutProps, SpaceProps {
  as?: ElementType;
  className?: string;
  value: T;
  onChange(value: T): void;
  disabled?: boolean;
  horizontal?: boolean;
}

export type RSelectProps<E extends ElementType = 'div', T = string> = PolymorphicComponentProps<E, BaseSelectProps<T>>;

export type SelectButtonProps<E extends ElementType = 'button'> = PolymorphicComponentProps<
  E,
  ExtractProps<typeof Select.Button>
>;

export type SelectOptionsProps<E extends ElementType = 'ul'> = PolymorphicComponentProps<
  E,
  {
    as?: ElementType;
    className?: string;
    static?: boolean;
    children?: ReactNode;
  }
>;

export type SelectOptionProps = ExtractProps<typeof Select.Option> & {
  name: string;
  className?: string;
  children?: (option: {
    selected: boolean;
    active: boolean;
    disabled: boolean;
  }) => ReactElement<any, string | JSXElementConstructor<any>>;
};

export type SelectProps = (<E extends ElementType = 'div', T = unknown>(
  props: RSelectProps<E, T>,
) => ReactElement<any, string | JSXElementConstructor<any>> | null) & {
  Button: <E extends ElementType = 'button'>(
    props: SelectButtonProps<E>,
  ) => ReactElement<any, string | JSXElementConstructor<any>> | null;
  Option: (props: SelectOptionProps) => ReactElement<any, string | JSXElementConstructor<any>> | null;
  Options: <E extends ElementType = 'ul'>(
    props: SelectOptionsProps<E>,
  ) => ReactElement<any, string | JSXElementConstructor<any>> | null;
};
