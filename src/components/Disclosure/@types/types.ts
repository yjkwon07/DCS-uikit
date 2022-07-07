import { ElementType, Ref } from 'react';

import { Disclosure as HDisclosure } from '@headlessui/react';
import { TypographyProps } from 'styled-system';

import { TextColorKey } from '../../../theme/color/@types';
import { ExtractProps, ColorStyleProps, PolymorphicComponentProps } from '../../../typings';
import { FlexProps } from '../../Flex';

export type CDisclosureProps<E extends ElementType = 'div'> = ExtractProps<typeof HDisclosure> &
  PolymorphicComponentProps<E, unknown>;

export type DisclosureButtonProps<E extends ElementType = 'button'> = ExtractProps<typeof HDisclosure.Button> &
  PolymorphicComponentProps<
    E,
    FlexProps &
      TypographyProps & {
        color?: ColorStyleProps<TextColorKey>;
      }
  >;

export type DisclosurePanelProps<E extends ElementType = 'div'> = ExtractProps<typeof HDisclosure.Panel> &
  PolymorphicComponentProps<
    E,
    FlexProps &
      TypographyProps & {
        color?: ColorStyleProps<TextColorKey>;
      }
  >;

export type DisclosureButtonRenderProps = (<E extends ElementType = 'button'>(
  props: DisclosureButtonProps<E>,
  ref: Ref<HTMLButtonElement>,
) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
  displayName: string;
};

export type DisclosurePanelRenderProps = (<E extends ElementType = 'div'>(
  props: DisclosurePanelProps<E>,
  ref: Ref<HTMLDivElement>,
) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
  displayName: string;
};

export type DisclosureProps = (<E extends ElementType>(
  props: CDisclosureProps<E>,
) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null) & {
  Button: DisclosureButtonRenderProps;
  Panel: DisclosurePanelRenderProps;
};
