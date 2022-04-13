import { theme } from 'twin.macro';

import { Box } from '../Box';
import Grid from './Grid';

export default {
  title: 'Layout/Grid',
  component: Grid,
  argTypes: {},
};

export const Default = () => {
  return (
    <Grid
      justifyItems="center"
      alignContent="center"
      gridTemplateColumns="1fr 1fr"
      gridColumnGap="16px"
      background={theme`colors.disabled`}
    >
      <Box style={{ backgroundColor: '#1fc7d4', width: '300px', height: '300px' }} />
      <Box style={{ backgroundColor: '#1fc7d4', width: '300px', height: '300px' }} />
    </Grid>
  );
};
