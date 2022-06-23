import { CSSProperties, ElementType } from 'react';

import { Menu as HMenu } from '@headlessui/react';
import { LayoutProps, SpaceProps } from 'styled-system';

import { PolymorphicComponentProps, ExtractProps } from '../../../typings';

export type MenuProps = ExtractProps<typeof HMenu> & LayoutProps & SpaceProps;
export type MenuButtonProps<E extends ElementType = 'button'> = PolymorphicComponentProps<
  E,
  {
    as?: 'button' | ElementType;
    className?: string;
    style?: CSSProperties;
  }
>;
export type MenuItemsProps<E extends ElementType = 'div'> = PolymorphicComponentProps<
  E,
  {
    as?: ElementType;
    className?: string;
    style?: CSSProperties;
    static?: boolean;
    unmount?: undefined;
  }
>;
export type MenuItemProps = {
  as?: React.ElementType;
  disabled?: boolean;
  children: (bag: {
    active: boolean;
    disabled: boolean;
  }) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
};
