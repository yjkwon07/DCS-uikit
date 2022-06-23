import { Tab as HTab } from '@headlessui/react';
import { LayoutProps, SpaceProps } from 'styled-system';

import { ExtractProps } from '../../../typings';

export type TabProps = ExtractProps<typeof HTab>;
export type TabGroupProps = ExtractProps<typeof HTab.Group> & LayoutProps & SpaceProps;
export type TabListProps = ExtractProps<typeof HTab.List>;
export type TabPanelsProps = ExtractProps<typeof HTab.Panels>;
export type TabPanelProps = ExtractProps<typeof HTab.Panel>;
