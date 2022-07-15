import { ElementType, Ref } from 'react';

import { Disclosure as HDisclosure } from '@headlessui/react';
import { background, border, flexbox, layout, position, space, typography } from 'styled-system';
import { styled } from 'twin.macro';

import colorStyle from '../../../utils/colorStyle';
import forwardRefWithAs from '../../../utils/forwardRefWidthAs';
import gapStyle from '../../../utils/gapStyle';
import shouldForwardProp from '../../../utils/shouldForwardProp';
import { RDisclosureProps, DisclosureButtonProps, DisclosurePanelProps, DisclosureProps } from '../@types';

const RDisclosure = <E extends ElementType>(props: RDisclosureProps<E>) => {
  return <HDisclosure {...props} />;
};

const DEFAULT_BUTTON_TAG = 'button' as const;

const StyledDisClosureButton = styled(HDisclosure.Button, { shouldForwardProp })<DisclosureButtonProps<any>>`
  ${colorStyle}
  ${gapStyle}

  ${typography}
  ${background}
  ${border}
  ${layout}
  ${position}
  ${space}
  ${flexbox}
`;

const Button = forwardRefWithAs(function Button<E extends ElementType = typeof DEFAULT_BUTTON_TAG>(
  props: DisclosureButtonProps<E>,
  ref: Ref<HTMLButtonElement>,
) {
  return <StyledDisClosureButton ref={ref} {...props} />;
});

Button.displayName = 'Button';

const DEFAULT_PANEL_TAG = 'div' as const;

const StyledDisClosurePanel = styled(HDisclosure.Panel, { shouldForwardProp })<DisclosurePanelProps<any>>`
  ${colorStyle}
  ${gapStyle}

  ${typography}
  ${background}
  ${border}
  ${layout}
  ${position}
  ${space}
  ${flexbox}
`;

const Panel = forwardRefWithAs(function Panel<E extends ElementType = typeof DEFAULT_PANEL_TAG>(
  props: DisclosurePanelProps<E>,
  ref: Ref<HTMLDivElement>,
) {
  return <StyledDisClosurePanel ref={ref} {...props} />;
});

Panel.displayName = 'Panel';

/**
 * @see https://headlessui.dev/react/disclosure
 */
const Disclosure: DisclosureProps = Object.assign(RDisclosure);
Disclosure.Button = Button;
Disclosure.Panel = Panel;

export default Disclosure;
