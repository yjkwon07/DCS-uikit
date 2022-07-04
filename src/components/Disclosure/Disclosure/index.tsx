import { ElementType } from 'react';

import { Disclosure as HDisclosure } from '@headlessui/react';
import { background, border, flexbox, layout, position, space, typography } from 'styled-system';
import { styled } from 'twin.macro';

import colorStyle from '../../../utils/colorStyle';
import gapStyle from '../../../utils/gapStyle';
import { DisclosureButtonProps, DisclosurePanelProps, DisclosureProps } from '../@types';

const StyledDisClosure = styled(HDisclosure)<DisclosureProps<'div'>>`
  ${colorStyle}
  ${gapStyle}

  ${background}
  ${border}
  ${layout}
  ${position}
  ${space}
  ${flexbox}
`;

const Disclosure = <E extends ElementType>(props: DisclosureProps<E>) => {
  return <StyledDisClosure as="div" {...props} />;
};

const StyledDisClosureButton = styled(HDisclosure.Button)<DisclosureButtonProps>`
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

const Button = (props: DisclosureButtonProps) => {
  return <StyledDisClosureButton {...props} />;
};

const StyledDisClosurePanel = styled(HDisclosure.Panel)<DisclosurePanelProps>`
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

const Panel = (props: DisclosurePanelProps) => {
  return <StyledDisClosurePanel {...props} />;
};

/**
 * @see https://headlessui.dev/react/disclosure
 */
Disclosure.Button = Button;
Disclosure.Panel = Panel;

export default Disclosure;
