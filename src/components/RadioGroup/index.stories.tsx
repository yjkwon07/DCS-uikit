import { useState } from 'react';

import { Box } from '../Box';
import { Flex } from '../Flex';
import RadioGroup from './RadioGroup';

export default {
  title: 'Form/RadioGroup',
  component: RadioGroup,
  argTypes: {},
};

const plans = [
  {
    name: 'Startup',
    ram: '12GB',
    cpus: '6 CPUs',
    disk: '160 GB SSD disk',
  },
  {
    name: 'Business',
    ram: '16GB',
    cpus: '8 CPUs',
    disk: '512 GB SSD disk',
  },
  {
    name: 'Enterprise',
    ram: '32GB',
    cpus: '12 CPUs',
    disk: '1024 GB SSD disk',
  },
];

export const Default = () => {
  const [selected, setSelected] = useState(plans[0]);

  return (
    <Flex flexDirection="row" justifyContent="center" alignItems="center" columnGap={20}>
      <RadioGroup width={400} value={selected} onChange={setSelected}>
        <RadioGroup.Label tw="sr-only">Server size</RadioGroup.Label>
        <Box tw="space-y-2">
          {plans.map((plan) => (
            <RadioGroup.Option key={plan.name} value={plan}>
              {({ checked }) => (
                <>
                  <RadioGroup.Label as="p" checked={checked}>
                    {plan.name}
                  </RadioGroup.Label>
                  <RadioGroup.Description as="p" checked={checked}>
                    <span>
                      {plan.ram}/{plan.cpus}
                    </span>{' '}
                    <span aria-hidden="true">&middot;</span> <span>{plan.disk}</span>
                  </RadioGroup.Description>
                </>
              )}
            </RadioGroup.Option>
          ))}
        </Box>
      </RadioGroup>

      <RadioGroup width={400} value={selected} onChange={setSelected} disabled>
        <RadioGroup.Label tw="sr-only">Server size</RadioGroup.Label>
        <Box tw="space-y-2">
          {plans.map((plan) => (
            <RadioGroup.Option key={plan.name} value={plan}>
              {({ checked }) => (
                <>
                  <RadioGroup.Label as="p" checked={checked}>
                    {plan.name}
                  </RadioGroup.Label>
                  <RadioGroup.Description as="p" checked={checked}>
                    <span>
                      {plan.ram}/{plan.cpus}
                    </span>{' '}
                    <span aria-hidden="true">&middot;</span> <span>{plan.disk}</span>
                  </RadioGroup.Description>
                </>
              )}
            </RadioGroup.Option>
          ))}
        </Box>
      </RadioGroup>
    </Flex>
  );
};
