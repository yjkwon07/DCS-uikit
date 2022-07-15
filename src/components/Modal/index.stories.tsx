import { Fragment, useState } from 'react';

import tw from 'twin.macro';

import { Box } from '../Box';
import { Button } from '../Button';
import { Flex } from '../Flex';
import { Overlay } from '../Overlay';
import { Transition } from '../Transition';
import BaseModal from './BaseModal';
import Modal from './Modal';

export default {
  title: 'Utils/Modal',
  component: Modal,
  argTypes: {},
};

export const Default = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Flex alignItems="center" justifyContent="center">
        <Button onClick={openModal}>Open dialog</Button>
      </Flex>

      <Transition appear show={isOpen} as={Fragment}>
        <Modal open={isOpen} onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter={tw`ease-out duration-300`}
            enterFrom={tw`opacity-0`}
            enterTo={tw`opacity-100`}
            leave={tw`ease-in duration-200`}
            leaveFrom={tw`opacity-100`}
            leaveTo={tw`opacity-0`}
          >
            <Overlay onClick={closeModal} />
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
            <Modal.Panel
              width="100%"
              maxWidth="28rem"
              overflow="hidden"
              borderRadius="1rem"
              background="modal.primary"
              padding="1.5rem"
              textAlign="left"
              verticalAlign="middle"
              boxShadow="var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);"
              css={[tw`transform  transition-all`]}
            >
              <Modal.Title as="h2" scale="lg" fontWeight={500} color="modal.title">
                Payment successful
              </Modal.Title>

              <Box marginTop="8px">
                <Modal.Description scale="sm" color="modal.description">
                  Your payment has been successfully submitted. We’ve sent you an email with all of the details of your
                  order.
                </Modal.Description>
              </Box>

              <Flex justifyContent="flex-end" marginTop="16px">
                <Button variant="primary" onClick={closeModal}>
                  확인
                </Button>
              </Flex>
            </Modal.Panel>
          </Transition.Child>
        </Modal>
      </Transition>
    </>
  );
};

export const Base = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Flex alignItems="center" justifyContent="center">
        <Button onClick={openModal}>Open dialog</Button>
      </Flex>

      <BaseModal
        isOpen={isOpen}
        onClose={closeModal}
        title="Payment successful"
        description=" Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order."
      />
    </>
  );
};
