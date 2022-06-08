import { ComponentProps, CSSProperties, ElementType, ReactNode } from 'react';

import { Combobox as HAutoSelect } from '@headlessui/react';
import { LayoutProps, SpaceProps } from 'styled-system';

import { PolymorphicComponentProps } from '../../../typings/utils';

export type AutoSelectProps<E extends ElementType = 'div', T = unknown> = LayoutProps &
  SpaceProps &
  PolymorphicComponentProps<
    E,
    {
      as?: ElementType;
      className?: string;
      style?: CSSProperties;
      value: T;
      onChange(value: T): void;
      disabled?: boolean | undefined;
    }
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
  {
    as?: 'button' | ElementType;
    className?: string;
    style?: CSSProperties;
  }
>;
export type AutoSelectOptionsProps<E extends ElementType = 'ul'> = PolymorphicComponentProps<
  E,
  {
    as?: ElementType;
    className?: string;
    style?: CSSProperties;
    static?: boolean;
    unmount?: undefined;
    children?: ReactNode;
    afterLeave?: () => void;
    isNotFound?: boolean;
  }
>;
export type AutoSelectOptionProps = ComponentProps<typeof HAutoSelect.Option> & {
  name: string;
  className?: string;
  style?: CSSProperties;
  children?: (option: {
    selected: boolean;
    active: boolean;
    disabled: boolean;
  }) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
};
