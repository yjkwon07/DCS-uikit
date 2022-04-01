import { Fragment, useEffect, useRef, useState } from 'react';

import { Menu as HMenu, Transition } from '@headlessui/react';
import tw from 'twin.macro';

const Example = () => {
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
      <HMenu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="px-1 py-1 ">
          <HMenu.Item>
            {({ active }) => (
              <button
                type="button"
                className={`${
                  active ? 'bg-violet-500 text-white' : 'text-gray-900'
                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
              >
                {active ? (
                  <EditActiveIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                ) : (
                  <EditInactiveIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                )}
                Edit
              </button>
            )}
          </HMenu.Item>
        </div>
      </HMenu.Items>
    </Transition>
  );
};

const Menu = (props: MenuProps) => {
  return <HMenu css={[tw`relative inline-block text-left`]} {...props} />;
};

const Button = (props: ButtonProps) => {
  return (
    <HMenu.Button
      css={[
        tw`inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20`,
        tw`hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`,
      ]}
      {...props}
    />
  );
};
