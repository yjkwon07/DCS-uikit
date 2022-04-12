import { Fragment } from 'react';

import { Tab as HTab } from '@headlessui/react';
import { layout, space } from 'styled-system';
import tw, { styled } from 'twin.macro';

import { TabGroupProps, TabListProps, TabPanelProps, TabPanelsProps, TabProps } from '../@types';

const StyledTab = styled(HTab)<TabProps>`
  ${layout}
  ${space}
`;

const Tab = ({ as = Fragment, children, ...reset }: TabProps) => {
  return (
    <StyledTab as={as} {...reset}>
      {({ selected }) => (
        <button
          type="button"
          css={[
            tw`w-full py-2.5 leading-5 font-weight[600] text-primary rounded-lg`,
            tw`focus:outline-none focus:ring-2 ring-offset-2 ring-offset-focus ring-white`,
            selected
              ? tw`bg-primary shadow`
              : tw`text-secondary hover:bg-primary hover:text-primary hover:opacity-[0.65]`,
          ]}
        >
          {children}
        </button>
      )}
    </StyledTab>
  );
};

const Group = (props: TabGroupProps) => {
  return <HTab.Group {...props} />;
};

const List = (props: TabListProps) => {
  return <HTab.List css={[tw`flex p-1 space-x-1 bg-tertiary rounded-xl`]} {...props} />;
};

const Panels = (props: TabPanelsProps) => {
  return <HTab.Panels css={[tw`mt-2`]} {...props} />;
};

const Panel = (props: TabPanelProps) => {
  return (
    <HTab.Panel
      css={[tw`rounded-xl p-3`, tw`focus:outline-none focus:ring-2 ring-offset-2 ring-offset-focus ring-white`]}
      {...props}
    />
  );
};

Tab.Group = Group;
Tab.List = List;
Tab.Panels = Panels;
Tab.Panel = Panel;

export default Tab;
