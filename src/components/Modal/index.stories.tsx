import { useState } from 'react';

import { Button } from '../Button';
import { Flex } from '../Flex';
import BaseModal from './BaseModal';

export default {
  title: 'Components/Modal',
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

      <BaseModal
        isOpen={isOpen}
        onClose={closeModal}
        title="Payment successful"
        description=" Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order."
      />
    </>
  );
};
