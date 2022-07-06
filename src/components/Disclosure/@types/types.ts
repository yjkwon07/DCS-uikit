import { ElementType } from 'react';

import { Disclosure as HDisclosure } from '@headlessui/react';
import { TypographyProps } from 'styled-system';

import { TextColorKey } from '../../../theme/color/@types';
import { ExtractProps, ColorStyleProps, PolymorphicComponentProps } from '../../../typings';
import { FlexProps } from '../../Flex';

export type DisclosureProps<E extends ElementType = 'div'> = PolymorphicComponentProps<
  E,
  ExtractProps<typeof HDisclosure> &
    FlexProps & {
      color?: ColorStyleProps<TextColorKey>;
    }
>;
export type DisclosureButtonProps = ExtractProps<typeof HDisclosure.Button> &
  FlexProps &
  TypographyProps & {
    color?: ColorStyleProps<TextColorKey>;
  };
export type DisclosurePanelProps = ExtractProps<typeof HDisclosure.Panel> &
  FlexProps &
  TypographyProps & {
    color?: ColorStyleProps<TextColorKey>;
  };

export type D = DisclosureProps<'div'> & {
  Button: DisclosureButtonProps;
  Panel: DisclosurePanelProps;
};
