import { ForwardRefExoticComponent, MutableRefObject, ReactNode, RefAttributes } from 'react';

import { Dialog } from '@headlessui/react';
import { LayoutProps, SpaceProps } from 'styled-system';

import { ExtractProps } from '../../../typings';

export type RModalPRops = ExtractProps<typeof Dialog>;
export interface ModalPanelProps extends LayoutProps, SpaceProps {
  children: ReactNode;
}
export type ModalTitleProps = ExtractProps<typeof Dialog.Title>;
export type ModalDescriptionProps = ExtractProps<typeof Dialog.Description>;

export type ModalProps = ForwardRefExoticComponent<
  {
    children: ReactNode;
    open?: boolean;
    onClose(value: boolean): void;
    initialFocus?: MutableRefObject<HTMLElement | null>;
  } & RefAttributes<HTMLDivElement>
> & {
  Panel: ForwardRefExoticComponent<ModalPanelProps & RefAttributes<HTMLDivElement>>;
  Title: typeof Dialog.Title;
  Description: typeof Dialog.Description;
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
