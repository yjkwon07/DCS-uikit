import { CSSProperties, ElementType, JSXElementConstructor, ReactElement, ReactNode } from 'react';

import { Combobox as HAutoSelect } from '@headlessui/react';
import { LayoutProps, SpaceProps } from 'styled-system';

import { PolymorphicComponentProps, ExtractProps } from '../../../typings';

export interface BaseAutoSelectProps<T = unknown> extends LayoutProps, SpaceProps {
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  value: T;
  onChange(value: T): void;
  disabled?: boolean;
}

export type RAutoSelectProps<E extends ElementType = 'div', T = unknown> = PolymorphicComponentProps<
  E,
  BaseAutoSelectProps<T>
>;

export type AutoSelectInputGroupProps = {
  children?: ReactNode;
};

export type AutoSelectInputProps<T = unknown> = {
  displayValue?(item: T): string;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
};

export type AutoSelectButtonProps<E extends ElementType = 'button'> = PolymorphicComponentProps<
  E,
  ExtractProps<typeof HAutoSelect.Button>
>;

export type AutoSelectOptionsProps<E extends ElementType = 'ul'> = PolymorphicComponentProps<
  E,
  {
    as?: ElementType;
    className?: string;
    children?: ReactNode;
    afterLeave?: () => void;
    isNotFound?: boolean;
    textNotFound?: string;
  }
>;

export type AutoSelectOptionProps<T = unknown> = {
  name: string;
  value: T;
  className?: string;
  children?: (option: {
    selected: boolean;
    active: boolean;
    disabled: boolean;
  }) => ReactElement<any, string | JSXElementConstructor<any>> | null;
};

export type AutoSelectProps = (<E extends ElementType = 'div', T = unknown>(
  props: RAutoSelectProps<E, T>,
) => ReactElement<any, string | JSXElementConstructor<any>> | null) & {
  InputGroup: (props: AutoSelectInputGroupProps) => ReactElement<any, string | JSXElementConstructor<any>> | null;
  Input: <T = unknown>(props: AutoSelectInputProps<T>) => ReactElement<any, string | JSXElementConstructor<any>> | null;
  Button: <E extends ElementType = 'button'>(
    props: AutoSelectButtonProps<E>,
  ) => ReactElement<any, string | JSXElementConstructor<any>> | null;
  Option: <T = unknown>(
    props: AutoSelectOptionProps<T>,
  ) => ReactElement<any, string | JSXElementConstructor<any>> | null;
  Options: <E extends ElementType = 'ul'>(
    props: AutoSelectOptionsProps<E>,
  ) => ReactElement<any, string | JSXElementConstructor<any>> | null;
};
