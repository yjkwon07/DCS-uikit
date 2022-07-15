import { ElementType, JSXElementConstructor, MutableRefObject, ReactElement, ReactNode, Ref } from 'react';

import { Dialog } from '@headlessui/react';
import { BoxShadowProps, LayoutProps, SpaceProps, TypographyProps } from 'styled-system';

import { ExtractProps } from '../../../typings';
import { BaseFlexProps } from '../../Flex';
import { HeadingProps } from '../../Heading';
import { TextProps } from '../../Text';

export type RModalPRops = ExtractProps<typeof Dialog>;

export interface ModalPanelProps extends BaseFlexProps, TypographyProps, BoxShadowProps {
  children: ReactNode;
}

export interface ModalTitleProps extends HeadingProps {
  children?: ReactNode;
}

export type ModalDescriptionProps<E extends ElementType = 'p'> = TextProps<E>;

export type ModalProps = ((props: {
  children: ReactNode;
  open?: boolean;
  onClose(value: boolean): void;
  initialFocus?: MutableRefObject<HTMLElement | null>;
}) => ReactElement<any, string | JSXElementConstructor<any>> | null) & {
  Panel: ((
    props: ModalPanelProps,
    ref: Ref<HTMLDivElement>,
  ) => ReactElement<any, string | JSXElementConstructor<any>> | null) & {
    displayName: string;
  };
  Title: (props: ModalTitleProps) => ReactElement<any, string | JSXElementConstructor<any>> | null;
  Description: <E extends ElementType = 'p'>(
    props: ModalDescriptionProps<E>,
  ) => ReactElement<any, string | JSXElementConstructor<any>> | null;
};

export interface BaseModalProps extends LayoutProps, SpaceProps {
  isOpen?: boolean;
  onClose: () => void;
  isCloseOverlay?: boolean;
  title?: string;
  titleProps?: ModalTitleProps;
  description?: ReactNode | string;
  descriptionProps?: ModalDescriptionProps;
  closeLabel?: string;
}
