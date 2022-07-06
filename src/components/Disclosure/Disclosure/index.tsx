import { ElementType } from 'react';

import { Disclosure as HDisclosure } from '@headlessui/react';
import shouldForwardProp from '@styled-system/should-forward-prop';
import { background, border, flexbox, layout, position, space, typography } from 'styled-system';
import { styled } from 'twin.macro';

import colorStyle from '../../../utils/colorStyle';
import gapStyle from '../../../utils/gapStyle';
import { DisclosureButtonProps, DisclosurePanelProps, DisclosureProps } from '../@types';

const Disclosure = <E extends ElementType = 'div'>(props: DisclosureProps<E>) => {
  return <HDisclosure {...props} />;
};

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

const Button = <E extends ElementType = 'button'>(props: DisclosureButtonProps<E>) => {
  return <StyledDisClosureButton {...props} />;
};

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

const Panel = <E extends ElementType = 'div'>(props: DisclosurePanelProps<E>) => {
  return <StyledDisClosurePanel {...props} />;
};

/**
 * @see https://headlessui.dev/react/disclosure
 */
Disclosure.Button = Button;
Disclosure.Panel = Panel;

export default Disclosure;
