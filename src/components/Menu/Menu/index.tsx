import { ElementType, Fragment } from 'react';

import { Menu as HMenu, Transition } from '@headlessui/react';
import tw from 'twin.macro';

import { MenuButtonProps, MenuItemProps, MenuItemsProps, MenuProps } from '../@types';

const Menu = (props: MenuProps) => {
  return <HMenu as="div" css={[tw`relative inline-block text-left`]} {...props} />;
};

const Button = <E extends ElementType = 'button'>(props: MenuButtonProps<E>) => {
  return (
    <HMenu.Button
      css={[
        tw`inline-flex justify-center w-full px-4 py-2 bg-primary text-primary`,
        tw`font-size[14px] font-weight[600] letter-spacing[0.03em] line-height[18px]`,
        tw`border-0 border-radius[8px]`,
        tw`focus:outline-none focus:ring-2 ring-offset-2 ring-offset-focus ring-white`,
        tw`hover:opacity-[0.65]`,
      ]}
      {...props}
    />
  );
};

const Items = <E extends ElementType = 'div'>(props: MenuItemsProps<E>) => {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <HMenu.Items
        css={[
          tw`absolute right-0`,
          tw`w-56 mt-2`,
          tw`origin-top-right bg-white divide-y divide-gray-100 shadow-lg`,
          tw`ring-1 ring-black ring-opacity-5 focus:outline-none`,
          tw`border-0 border-radius[8px]`,
        ]}
        {...props}
      />
    </Transition>
  );
};

const Item = ({ children, ...reset }: MenuItemProps) => {
  return (
    <HMenu.Item {...reset}>
      {(props) => (
        <button
          type="button"
          css={[
            props.active ? tw`bg-primary text-primary hover:opacity-[0.65]` : tw`text-secondary`,
            tw`flex items-center w-full px-2 py-2`,
            tw`font-size[14px] font-weight[600] letter-spacing[0.03em] line-height[18px]`,
            tw`border-0 border-radius[8px]`,
          ]}
        >
          {children(props)}
        </button>
      )}
    </HMenu.Item>
  );
};

Menu.Button = Button;
Menu.Items = Items;
Menu.Item = Item;

export default Menu;