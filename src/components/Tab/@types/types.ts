import { Tab as HTab } from '@headlessui/react';
import { LayoutProps, SpaceProps } from 'styled-system';

import { ExtractProps, StyledColorProps } from '../../../typings';

export type TabProps = ExtractProps<typeof HTab> & LayoutProps & SpaceProps;

export type TabGroupProps = ExtractProps<typeof HTab.Group> & LayoutProps & SpaceProps;

export type TabListProps = ExtractProps<typeof HTab.List> & LayoutProps & SpaceProps;

export type TabPanelsProps = ExtractProps<typeof HTab.Panels> & LayoutProps & SpaceProps;

export type TabPanelProps = ExtractProps<typeof HTab.Panel> & LayoutProps & SpaceProps & StyledColorProps;
