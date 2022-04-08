import { theme } from 'twin.macro';

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
  argTypes: {},
};

export const Default = () => {
  return (
    <div tw="w-full flex justify-center">
      <Menu>
        <div>
          <Menu.Button>Options</Menu.Button>
        </div>
        <Menu.Items>
          <div tw="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <>
                  {active ? (
                    <EditActiveIcon tw="w-5 h-5 mr-2" aria-hidden="true" color={theme`textColor.subtle`} />
                  ) : (
                    <EditInactiveIcon tw="w-5 h-5 mr-2" aria-hidden="true" color={theme`colors.white`} />
                  )}
                  Edit
                </>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <>
                  {active ? (
                    <DuplicateActiveIcon tw="w-5 h-5 mr-2" aria-hidden="true" color={theme`textColor.subtle`} />
                  ) : (
                    <DuplicateInactiveIcon tw="w-5 h-5 mr-2" aria-hidden="true" color={theme`colors.white`} />
                  )}
                  Duplicate
                </>
              )}
            </Menu.Item>
          </div>
          <div tw="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <>
                  {active ? (
                    <ArchiveActiveIcon tw="w-5 h-5 mr-2" aria-hidden="true" color={theme`textColor.subtle`} />
                  ) : (
                    <ArchiveInactiveIcon tw="w-5 h-5 mr-2" aria-hidden="true" color={theme`colors.white`} />
                  )}
                  Archive
                </>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <>
                  {active ? (
                    <MoveActiveIcon tw="w-5 h-5 mr-2" aria-hidden="true" color={theme`textColor.subtle`} />
                  ) : (
                    <MoveInactiveIcon tw="w-5 h-5 mr-2" aria-hidden="true" color={theme`colors.white`} />
                  )}
                  Move
                </>
              )}
            </Menu.Item>
          </div>
          <div tw="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <>
                  {active ? (
                    <DeleteActiveIcon tw="w-5 h-5 mr-2" aria-hidden="true" color={theme`textColor.subtle`} />
                  ) : (
                    <DeleteInactiveIcon tw="w-5 h-5 mr-2" aria-hidden="true" color={theme`colors.white`} />
                  )}
                  Delete
                </>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
};
