import { Fragment } from 'react';

import { Tab as HTab } from '@headlessui/react';
import tw from 'twin.macro';

import { GroupProps, ListProps, PanelProps, PanelsProps, TabProps } from '../@types';

const Tab = ({ as = Fragment, children, ...reset }: TabProps) => {
  return (
    <HTab as={as} {...reset}>
      {({ selected }) => (
        <button
          type="button"
          css={[
            tw`w-full py-2.5 text-sm leading-5 font-weight[600] text-primary rounded-lg`,
            tw`focus:outline-none focus:ring-2 ring-offset-2 ring-offset-focus ring-white ring-opacity-60`,
            selected
              ? tw`bg-primary shadow`
              : tw`text-secondary hover:bg-primary hover:text-primary hover:opacity-[0.65]`,
          ]}
        >
          {children}
        </button>
      )}
    </HTab>
  );
};

const Group = (props: GroupProps) => {
  return <HTab.Group {...props} />;
};

const List = (props: ListProps) => {
  return <HTab.List css={[tw`flex p-1 space-x-1 bg-tertiary rounded-xl`]} {...props} />;
};

const Panels = (props: PanelsProps) => {
  return <HTab.Panels css={[tw`mt-2`]} {...props} />;
};

const Panel = (props: PanelProps) => {
  return (
    <HTab.Panel
      css={[
        tw`rounded-xl p-3`,
        tw`focus:outline-none focus:ring-2 ring-offset-2 ring-offset-focus ring-white ring-opacity-60`,
      ]}
      {...props}
    />
  );
};

Tab.Group = Group;
Tab.List = List;
Tab.Panels = Panels;
Tab.Panel = Panel;

export default Tab;