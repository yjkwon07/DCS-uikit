import { SerializedStyles } from '@emotion/react';
import { TransitionEvents } from '@headlessui/react';
import { TwStyle } from 'twin.macro';

export type TransitionProps = {
  enter?: TwStyle | SerializedStyles;
  enterFrom?: TwStyle | SerializedStyles;
  enterTo?: TwStyle | SerializedStyles;
  entered?: TwStyle | SerializedStyles;
  leave?: TwStyle | SerializedStyles;
  leaveFrom?: TwStyle | SerializedStyles;
  leaveTo?: TwStyle | SerializedStyles;
  children: React.ReactNode;
  show?: boolean;
  as?: React.ElementType;
  appear?: boolean;
  unmount?: boolean;
} & TransitionEvents;
