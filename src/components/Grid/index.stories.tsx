import { theme } from 'twin.macro';

import { Box } from '../Box';
import Grid from './Grid';

export default {
  title: 'Utils/Layout/Grid',
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
      <Box background="#1fc7d4" width={300} height={300} />
      <Box background="#1fc7d4" width={300} height={300} />
    </Grid>
  );
};
