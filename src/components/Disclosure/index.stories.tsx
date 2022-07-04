import { ChevronUpIcon } from '@heroicons/react/solid';
import tw from 'twin.macro';

import { colors } from '../../theme';
import { Flex } from '../Flex';
import Disclosure from './Disclosure';

export default {
  title: 'Utils/Disclosure',
  component: Disclosure,
  argTypes: {},
};

export const Default = () => {
  return (
    <Flex justifyContent="center" alignItems="center">
      <Flex width={400} borderRadius={16} background={colors.primary} padding="8px" flexDirection="column" rowGap="8px">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                display="flex"
                width="100%"
                justifyContent="space-between"
                borderRadius="8px"
                background="rgb(243 232 255 / 1)"
                paddingLeft="16px"
                paddingRight="16px"
                paddingTop="8px"
                paddingBottom="8px"
                textAlign="left"
                fontSize="14px"
                lineHeight="20px"
                fontWeight="500"
                color="rgb(88 28 135 / 1)"
              >
                <span>What is your refund policy?</span>
                <ChevronUpIcon tw="h-5 w-5 text-purple-500" css={[open && tw`rotate-180 transform`]} />
              </Disclosure.Button>
              <Disclosure.Panel
                paddingLeft="16px"
                paddingRight="16px"
                paddingTop="16px"
                paddingBottom="8px"
                fontSize="14px"
                lineHeight="20px"
                color="primary"
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae voluptates modi officiis excepturi
                deserunt, odio minus exercitationem, unde tenetur sed molestias dignissimos similique! Et iste eos
                nesciunt eligendi natus neque!
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                display="flex"
                width="100%"
                justifyContent="space-between"
                borderRadius="8px"
                background="rgb(243 232 255 / 1)"
                paddingLeft="16px"
                paddingRight="16px"
                paddingTop="8px"
                paddingBottom="8px"
                textAlign="left"
                fontSize="14px"
                lineHeight="20px"
                fontWeight="500"
                color="rgb(88 28 135 / 1)"
              >
                <span>Do you offer technical support?</span>
                <ChevronUpIcon tw="h-5 w-5 text-purple-500" css={[open && tw`rotate-180 transform`]} />
              </Disclosure.Button>
              <Disclosure.Panel
                paddingLeft="16px"
                paddingRight="16px"
                paddingTop="16px"
                paddingBottom="8px"
                fontSize="14px"
                lineHeight="20px"
                color="primary"
              >
                No.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </Flex>
    </Flex>
  );
};
