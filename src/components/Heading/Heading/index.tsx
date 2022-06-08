import { TAG } from '../@types';
import { StyledHeading as Heading } from './styles';

Heading.defaultProps = {
  as: TAG.H2,
  fontSize: 'base',
  color: 'primary',
  ellipsis: false,
};

export default Heading;
