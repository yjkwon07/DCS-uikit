import { Fragment } from 'react';

import { Tab as HTab } from '@headlessui/react';
import { layout, space } from 'styled-system';
import tw, { styled } from 'twin.macro';

import shouldForwardProp from '../../../utils/shouldForwardProp';
import { TabGroupProps, TabListProps, TabPanelProps, TabPanelsProps, TabProps } from '../@types';

/**
 * @see https://headlessui.dev/react/tabs
 */
const Tab = ({ children, ...props }: TabProps) => {
  return (
    <HTab as={Fragment} {...props}>
      {({ selected }) => (
        <button
          type="button"
          css={[
            tw`w-full py-2.5 leading-5 [font-weight:600] text-tab-primary rounded-lg`,
            tw`focus:outline-none focus:ring-2 ring-offset-2 ring-offset-focus ring-white`,
            selected
              ? tw`bg-tab-primary shadow`
              : tw`text-tab-secondary hover:bg-tab-primary hover:text-tab-primary hover:opacity-[0.65]`,
          ]}
        >
          {children}
        </button>
      )}
    </HTab>
  );
};

const StyledTabGroup = styled(HTab.Group, { shouldForwardProp })<TabGroupProps>`
  ${layout}
  ${space}
`;

const Group = ({ ...props }: TabGroupProps) => {
  return <StyledTabGroup as="div" {...props} />;
};

const List = (props: TabListProps) => {
  return <HTab.List css={[tw`flex p-1 space-x-1 bg-tab-secondary rounded-xl`]} {...props} />;
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
