import tw, { styled } from 'twin.macro';

import { BaseBoxProps } from '../../Box';
import { StyledBox } from '../../Box/Box/styles';

export const StyledOverlay = styled(StyledBox)<BaseBoxProps>`
  ${[tw`fixed top-0 left-0 z-overlay w-full h-full bg-overlay-primary opacity-[.8]`]}
`;
