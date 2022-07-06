import { ElementType } from 'react';

import { Disclosure as HDisclosure } from '@headlessui/react';
import { TypographyProps } from 'styled-system';

import { TextColorKey } from '../../../theme/color/@types';
import { ExtractProps, ColorStyleProps, PolymorphicComponentProps } from '../../../typings';
import { FlexProps } from '../../Flex';

export type DisclosureProps<E extends ElementType = 'div'> = ExtractProps<typeof HDisclosure> &
  PolymorphicComponentProps<
    E,
    {
      color?: ColorStyleProps<TextColorKey>;
    }
  >;

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
