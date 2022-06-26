import { Fragment, useCallback } from 'react';

import tw from 'twin.macro';

import { Box } from '../../Box';
import { Button } from '../../Button';
import { Flex } from '../../Flex';
import { Overlay } from '../../Overlay';
import { Transition } from '../../Transition';
import { BaseModalProps } from '../@types';
import Modal from '../Modal';

const BaseModal = ({
  isOpen,
  onClose,
  isCloseOverlay = true,
  title,
  titleProps,
  description,
  descriptionProps,
  closeLabel = '확인',
  ...props
}: BaseModalProps) => {
  const handleCloseOverlay = useCallback(() => {
    if (isCloseOverlay) onClose();
  }, [isCloseOverlay, onClose]);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Modal open={isOpen} onClose={onClose} {...props}>
        <Transition.Child
          as={Fragment}
          enter={tw`ease-out duration-300`}
          enterFrom={tw`opacity-0`}
          enterTo={tw`opacity-100`}
          leave={tw`ease-in duration-200`}
          leaveFrom={tw`opacity-100`}
          leaveTo={tw`opacity-0`}
        >
          <Overlay onClick={handleCloseOverlay} />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter={tw`ease-out duration-300`}
          enterFrom={tw`opacity-0 scale-95`}
          enterTo={tw`opacity-100 scale-100`}
          leave={tw`ease-in duration-200`}
          leaveFrom={tw`opacity-100 scale-100`}
          leaveTo={tw`opacity-0 scale-95`}
        >
          <Modal.Panel {...props}>
            {title && <Modal.Title {...titleProps}>{title}</Modal.Title>}

            {description && (
              <Box marginTop="8px">
                <Modal.Description {...descriptionProps}>{description}</Modal.Description>
              </Box>
            )}

            <Flex justifyContent="flex-end" marginTop="16px">
              <Button variant="primary" onClick={onClose}>
                {closeLabel}
              </Button>
            </Flex>
          </Modal.Panel>
        </Transition.Child>
      </Modal>
    </Transition>
  );
};

export default BaseModal;
