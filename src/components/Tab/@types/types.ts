import { ComponentProps } from 'react';

import { Tab as HTab } from '@headlessui/react';
import { LayoutProps, SpaceProps } from 'styled-system';

export type TabProps = ComponentProps<typeof HTab>;
export type TabGroupProps = ComponentProps<typeof HTab.Group> & LayoutProps & SpaceProps;
export type TabListProps = ComponentProps<typeof HTab.List>;
export type TabPanelsProps = ComponentProps<typeof HTab.Panels>;
export type TabPanelProps = ComponentProps<typeof HTab.Panel>;
