import { SCALE } from '../@types';
import { StyledInput as Input } from './styles';

Input.defaultProps = {
  scale: SCALE.MD,
  isSuccess: false,
  isWarning: false,
};

export default Input;
