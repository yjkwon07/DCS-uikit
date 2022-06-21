import tw, { styled } from 'twin.macro';

import { Box } from '../../Box';
import { OverlayProps } from '../@types';

export const StyledOverlay = styled(Box)<OverlayProps>`
  ${[tw`fixed top-0 left-0 z-overlay w-full h-full bg-overlay-primary opacity-[.8]`]}
`;
