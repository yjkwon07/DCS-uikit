import { theme } from 'twin.macro';

import { Box } from '../Box';
import { Flex } from '../Flex';
import {
  ArchiveActiveIcon,
  ArchiveInactiveIcon,
  DeleteActiveIcon,
  DeleteInactiveIcon,
  DuplicateActiveIcon,
  DuplicateInactiveIcon,
  EditActiveIcon,
  EditInactiveIcon,
  MoveActiveIcon,
  MoveInactiveIcon,
} from '../Svg';
import Menu from './Menu';

export default {
  title: 'Components/Menu',
  component: Menu,
  argTypes: {},
};

export const Default = () => {
  return (
    <Flex justifyContent="center" width="100%">
      <Menu>
        <Box>
          <Menu.Button>Options</Menu.Button>
        </Box>
        <Menu.Items>
          <Box px={1} py={1}>
            <Menu.Item>
              {({ active }) => (
                <>
                  {active ? (
                    <EditActiveIcon
                      width="1.25rem"
                      height="1.25rem"
                      mr="0.5rem"
                      aria-hidden="true"
                      fill={theme`textColor.subtle`}
                    />
                  ) : (
                    <EditInactiveIcon
                      width="1.25rem"
                      height="1.25rem"
                      mr="0.5rem"
                      aria-hidden="true"
                      fill={theme`colors.white`}
                    />
                  )}
                  Edit
                </>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <>
                  {active ? (
                    <DuplicateActiveIcon
                      width="1.25rem"
                      height="1.25rem"
                      mr="0.5rem"
                      aria-hidden="true"
                      fill={theme`textColor.subtle`}
                    />
                  ) : (
                    <DuplicateInactiveIcon
                      width="1.25rem"
                      height="1.25rem"
                      mr="0.5rem"
                      aria-hidden="true"
                      fill={theme`colors.white`}
                    />
                  )}
                  Duplicate
                </>
              )}
            </Menu.Item>
          </Box>
          <Box px={1} py={1}>
            <Menu.Item>
              {({ active }) => (
                <>
                  {active ? (
                    <ArchiveActiveIcon
                      width="1.25rem"
                      height="1.25rem"
                      mr="0.5rem"
                      aria-hidden="true"
                      fill={theme`textColor.subtle`}
                    />
                  ) : (
                    <ArchiveInactiveIcon
                      width="1.25rem"
                      height="1.25rem"
                      mr="0.5rem"
                      aria-hidden="true"
                      fill={theme`colors.white`}
                    />
                  )}
                  Archive
                </>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <>
                  {active ? (
                    <MoveActiveIcon
                      width="1.25rem"
                      height="1.25rem"
                      mr="0.5rem"
                      aria-hidden="true"
                      fill={theme`textColor.subtle`}
                    />
                  ) : (
                    <MoveInactiveIcon
                      width="1.25rem"
                      height="1.25rem"
                      mr="0.5rem"
                      aria-hidden="true"
                      fill={theme`colors.white`}
                    />
                  )}
                  Move
                </>
              )}
            </Menu.Item>
          </Box>
          <Box px={1} py={1}>
            <Menu.Item>
              {({ active }) => (
                <>
                  {active ? (
                    <DeleteActiveIcon
                      width="1.25rem"
                      height="1.25rem"
                      mr="0.5rem"
                      aria-hidden="true"
                      fill={theme`textColor.subtle`}
                    />
                  ) : (
                    <DeleteInactiveIcon
                      width="1.25rem"
                      height="1.25rem"
                      mr="0.5rem"
                      aria-hidden="true"
                      fill={theme`colors.white`}
                    />
                  )}
                  Delete
                </>
              )}
            </Menu.Item>
          </Box>
        </Menu.Items>
      </Menu>
    </Flex>
  );
};
