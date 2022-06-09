import { useState } from 'react';

import { Box } from '../Box';
import { Grid } from '../Grid';
import Radio from './Radio';

export default {
  title: 'Form/Radio',
  component: Radio,
  argTypes: {},
};

export const Default: React.FC = () => {
  const [radio, setRadio] = useState('one');
  const [radioSm, setRadioSm] = useState('one');

  const handleChange = (evt: any) => {
    const { value } = evt.target;
    setRadio(value);
  };

  const handleChangeSm = (evt: any) => {
    const { value } = evt.target;
    setRadioSm(value);
  };

  return (
    <Grid gridGap={32}>
      <Box>
        <Radio mr={1} name="md" value="one" onChange={handleChange} checked={radio === 'one'} />
        <Radio name="md" value="two" onChange={handleChange} checked={radio === 'two'} />
      </Box>
      <Box>
        <Radio mr={1} scale="sm" name="sm" value="one" onChange={handleChangeSm} checked={radioSm === 'one'} />
        <Radio scale="sm" name="sm" value="two" onChange={handleChangeSm} checked={radioSm === 'two'} />
      </Box>
      <Box>
        <Radio mr={1} scale="sm" name="disabled" value="one" checked disabled />
        <Radio scale="sm" name="disabled" value="two" disabled />
      </Box>
    </Grid>
  );
};
