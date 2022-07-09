import tw, { styled } from 'twin.macro';

import { BaseButtonProps } from '../@types';
import Button from '../Button';

const StyledIconButton = styled(Button)<BaseButtonProps>`
  ${tw`[border-radius:23px]`}

  padding: 0;
  width: ${({ scale }) => (scale === 'sm' ? '32px' : '48px')};
`;

export default StyledIconButton;
