import { TAG } from '../@types';
import { StyledHeading as Heading } from './styles';

Heading.defaultProps = {
  as: TAG.H1,
  background: 'primary',
  color: 'primary',
  bold: true,
};

export default Heading;
