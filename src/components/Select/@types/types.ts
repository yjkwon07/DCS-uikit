import { ComponentProps, CSSProperties, ElementType, ReactNode } from 'react';

import { Listbox as Select } from '@headlessui/react';
import { LayoutProps, SpaceProps } from 'styled-system';

import { PolymorphicComponentProps } from '@/typings/utils';

export type SelectProps = ComponentProps<typeof Select> & LayoutProps & SpaceProps;
export type SelectButtonProps<E extends ElementType = 'button'> = PolymorphicComponentProps<
  E,
  {
    as?: 'button' | ElementType;
    placeholder?: string;
    selectedName?: string;
    className?: string;
    style?: CSSProperties;
  }
>;
export type SelectOptionsProps = {
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  static?: boolean;
  unmount?: undefined;
  children?: ReactNode;
};
export type SelectOptionProps = ComponentProps<typeof Select.Option> & {
  name: string;
  className?: string;
  style?: CSSProperties;
  children?: (bag: {
    selected: boolean;
    active: boolean;
    disabled: boolean;
  }) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
};
