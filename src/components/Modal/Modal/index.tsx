import { forwardRef } from 'react';

import { Dialog } from '@headlessui/react';
import { layout, space } from 'styled-system';
import tw, { styled } from 'twin.macro';

import { ModalDescriptionProps, ModalPanelProps, RModalPRops, ModalTitleProps, ModalProps } from '../@types';

const RModal = forwardRef<HTMLDivElement, RModalPRops>((props, ref) => {
  return <Dialog as="div" ref={ref} css={[tw`fixed inset-0 flex items-center justify-center`]} {...props} />;
});

RModal.displayName = 'Modal';

const StyledPanel = styled.div`
  ${layout}
  ${space}
`;

const Panel = forwardRef<HTMLDivElement, ModalPanelProps>((props, ref) => {
  return (
    <StyledPanel
      ref={ref}
      css={[
        tw`relative overflow-y-auto z-modal`,
        tw`w-full max-w-md transform overflow-hidden rounded-2xl bg-modal-primary p-6 text-left align-middle shadow-xl transition-all`,
      ]}
      {...props}
    />
  );
});

Panel.displayName = 'Panel';

const Title = (props: ModalTitleProps) => {
  return <Dialog.Title as="h2" css={[tw`text-lg font-medium leading-6 text-modal-title`]} {...props} />;
};

const Description = (props: ModalDescriptionProps) => {
  return <Dialog.Description css={[tw`text-sm text-modal-description`]} {...props} />;
};

/**
 * @see https://headlessui.dev/react/dialog
 */
const Modal: ModalProps = Object.assign(RModal);
Modal.Panel = Panel;
Modal.Title = Title;
Modal.Description = Description;

export default Modal;
