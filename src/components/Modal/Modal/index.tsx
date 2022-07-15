import { ElementType, Ref } from 'react';

import { Dialog } from '@headlessui/react';
import { background, border, flexbox, layout, position, shadow, space, typography } from 'styled-system';
import tw, { styled } from 'twin.macro';

import colorStyle from '../../../utils/colorStyle';
import forwardRefWithAs from '../../../utils/forwardRefWidthAs';
import gapStyle from '../../../utils/gapStyle';
import { Heading } from '../../Heading';
import { StyledText } from '../../Text/Text/styles';
import { ModalDescriptionProps, ModalPanelProps, RModalPRops, ModalTitleProps, ModalProps } from '../@types';

const RModal = forwardRefWithAs(function RModal(props: RModalPRops, ref: Ref<HTMLDivElement>) {
  return <Dialog as="div" ref={ref} css={[tw`fixed inset-0 flex items-center justify-center`]} {...props} />;
});

RModal.displayName = 'Modal';

const StyledPanel = styled.div<ModalPanelProps>`
  ${colorStyle}
  ${gapStyle}

  ${typography}
  ${background}
  ${border}
  ${layout}
  ${position}
  ${space}
  ${flexbox}
  ${shadow}
`;

const Panel = forwardRefWithAs(function Panel(props: ModalPanelProps, ref: Ref<HTMLDivElement>) {
  return <StyledPanel ref={ref} css={[tw`relative overflow-y-auto z-modal`]} {...props} />;
});

Panel.displayName = 'Panel';

const StyledTitle = styled(Heading)`
  background: transparent;
`;

const Title = (props: ModalTitleProps) => {
  return <StyledTitle {...props} />;
};

const StyledDescription = styled(StyledText)`
  background: transparent;
`;

const Description = <E extends ElementType = 'p'>(props: ModalDescriptionProps<E>) => {
  return <StyledDescription as="p" {...props} />;
};

/**
 * @see https://headlessui.dev/react/dialog
 */
const Modal: ModalProps = Object.assign(RModal);
Modal.Panel = Panel;
Modal.Title = Title;
Modal.Description = Description;

export default Modal;
