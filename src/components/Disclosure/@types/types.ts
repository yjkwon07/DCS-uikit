import { ElementType, JSXElementConstructor, ReactElement, Ref } from 'react';

import { Disclosure as HDisclosure } from '@headlessui/react';
import { TypographyProps } from 'styled-system';

import { ExtractProps, PolymorphicComponentProps } from '../../../typings';
import { BaseFlexProps } from '../../Flex';

export type RDisclosureProps<E extends ElementType = 'div'> = ExtractProps<typeof HDisclosure> &
  PolymorphicComponentProps<E, unknown>;

export interface BaseDisclosureButtonProps extends BaseFlexProps, TypographyProps {}

export type DisclosureButtonProps<E extends ElementType = 'button'> = ExtractProps<typeof HDisclosure.Button> &
  PolymorphicComponentProps<E, BaseDisclosureButtonProps>;

export interface BaseDisclosurePanelProps extends BaseFlexProps, TypographyProps {}

export type DisclosurePanelProps<E extends ElementType = 'div'> = ExtractProps<typeof HDisclosure.Panel> &
  PolymorphicComponentProps<E, BaseDisclosurePanelProps>;

export type DisclosureButtonRenderProps = (<E extends ElementType = 'button'>(
  props: DisclosureButtonProps<E>,
  ref: Ref<HTMLButtonElement>,
) => ReactElement<any, string | JSXElementConstructor<any>> | null) & {
  displayName: string;
};

export type DisclosurePanelRenderProps = (<E extends ElementType = 'div'>(
  props: DisclosurePanelProps<E>,
  ref: Ref<HTMLDivElement>,
) => ReactElement<any, string | JSXElementConstructor<any>> | null) & {
  displayName: string;
};

export type DisclosureProps = (<E extends ElementType = 'div'>(
  props: RDisclosureProps<E>,
) => ReactElement<any, string | JSXElementConstructor<any>> | null) & {
  Button: DisclosureButtonRenderProps;
  Panel: DisclosurePanelRenderProps;
};
