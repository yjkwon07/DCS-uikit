import { ButtonProps } from '../@types';
import StyledIconButton from './styles';

const IconButton = (props: ButtonProps<'button'>) => {
  return <StyledIconButton aria-label="icon-button" {...props} />;
};

export default IconButton;
