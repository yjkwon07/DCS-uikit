import { Box } from '../Box';
import { Grid } from '../Grid';
import Checkbox from './Checkbox';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  argTypes: {},
};

export const Default: React.FC = () => {
  return (
    <Grid gridGap={32}>
      <Box>
        <Checkbox />
      </Box>
      <Box>
        <Checkbox scale="sm" />
      </Box>
      <Box>
        <Checkbox scale="sm" disabled />
      </Box>
      <Box>
        <Checkbox scale="sm" checked disabled />
      </Box>
    </Grid>
  );
};
