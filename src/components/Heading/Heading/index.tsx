import { TAG } from '../@types';
import { StyledHeading as Heading } from './styles';

Heading.defaultProps = {
  as: TAG.H1,
  color: 'primary',
  ellipsis: false,
  bold: true,
};

export default Heading;
