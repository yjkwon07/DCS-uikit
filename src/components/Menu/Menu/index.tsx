import { ElementType, Fragment } from 'react';

import { Menu as HMenu } from '@headlessui/react';
import { layout, space } from 'styled-system';
import tw, { styled } from 'twin.macro';

import shouldForwardProp from '../../../utils/shouldForwardProp';
import { Transition } from '../../Transition';
import { MenuButtonProps, MenuItemProps, MenuItemsProps, MenuProps } from '../@types';

const StyledMenu = styled(HMenu, { shouldForwardProp })`
  ${layout}
  ${space}
`;

/**
 * @see https://headlessui.dev/react/menu
 */
const Menu = (props: MenuProps) => {
  return <StyledMenu as="div" css={[tw`relative inline-block text-left`]} {...props} />;
};

const Button = <E extends ElementType = 'button'>(props: MenuButtonProps<E>) => {
  return (
    <HMenu.Button
      css={[
        tw`inline-flex justify-center w-full px-4 py-2 bg-menu-primary text-menu-primary`,
        tw`[font-size:14px] [font-weight:600] [letter-spacing:0.03em] [line-height:18px]`,
        tw`border-0 [border-radius:8px]`,
        tw`focus:outline-none focus:ring-shadow-focus`,
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
      enter={tw`transition ease-out duration-100`}
      enterFrom={tw`transform opacity-0 scale-95`}
      enterTo={tw`transform opacity-100 scale-100`}
      leave={tw`transition ease-in duration-75`}
      leaveFrom={tw`transform opacity-100 scale-100`}
      leaveTo={tw`transform opacity-0 scale-95`}
    >
      <HMenu.Items
        css={[
          tw`absolute right-0`,
          tw`w-56 mt-2`,
          tw`origin-top-right bg-menu-secondary divide-y divide-menu-divide shadow-lg`,
          tw`ring-1 ring-black ring-opacity-5 focus:outline-none`,
          tw`border-0 [border-radius:8px]`,
        ]}
        {...props}
      />
    </Transition>
  );
};

const Item = ({ children, ...props }: MenuItemProps) => {
  return (
    <HMenu.Item {...props}>
      {(props) => (
        <button
          type="button"
          css={[
            props.active ? tw`bg-menu-primary text-menu-primary opacity-[0.65]` : tw`text-menu-secondary`,
            tw`flex items-center w-full px-2 py-2`,
            tw`[font-size:14px] [font-weight:600] [letter-spacing:0.03em] [line-height:18px]`,
            tw`border-0 [border-radius:8px]`,
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
