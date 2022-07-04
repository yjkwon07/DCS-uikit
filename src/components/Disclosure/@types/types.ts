import { ElementType } from 'react';

import { Disclosure as HDisclosure } from '@headlessui/react';
import { TypographyProps } from 'styled-system';

import { TextColorKey } from '../../../theme/color/@types';
import { ExtractProps } from '../../../typings';
import { PolymorphicComponentProps } from '../../../typings/utils';
import { FlexProps } from '../../Flex';

export type DisclosureProps<E extends ElementType = 'div'> = PolymorphicComponentProps<
  E,
  ExtractProps<typeof HDisclosure> &
    FlexProps & {
      color?: TextColorKey | `#${string}` | `rgb${string}`;
    }
>;
export type DisclosureButtonProps = ExtractProps<typeof HDisclosure.Button> &
  FlexProps &
  TypographyProps & {
    color?: TextColorKey | `#${string}` | `rgb${string}`;
  };
export type DisclosurePanelProps = ExtractProps<typeof HDisclosure.Panel> &
  FlexProps &
  TypographyProps & {
    color?: TextColorKey | `#${string}` | `rgb${string}`;
  };
