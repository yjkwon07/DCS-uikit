import { CSSProperties, ElementType, JSXElementConstructor, ReactElement } from 'react';

import { Menu as HMenu } from '@headlessui/react';
import { LayoutProps, SpaceProps } from 'styled-system';

import { PolymorphicComponentProps, ExtractProps } from '../../../typings';

export type MenuProps = ExtractProps<typeof HMenu> & LayoutProps & SpaceProps;

export type MenuButtonProps<E extends ElementType = 'button'> = PolymorphicComponentProps<
  E,
  ExtractProps<typeof HMenu.Button>
>;

export type MenuItemsProps<E extends ElementType = 'div'> = PolymorphicComponentProps<
  E,
  {
    as?: ElementType;
    className?: string;
    style?: CSSProperties;
    static?: boolean;
  }
>;

export type MenuItemProps = {
  as?: ElementType;
  disabled?: boolean;
  children: (option: { active: boolean; disabled: boolean }) => ReactElement<any, string | JSXElementConstructor<any>>;
};
