import { useState } from 'react';

import { Flex } from '../Flex';
import Select from './Select';

export default {
  title: 'Form/Select',
  component: Select,
  argTypes: {},
};

const people = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
];

export const Default = () => {
  const [selected, setSelected] = useState<{ name: string }>();

  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center" rowGap="10px">
      <Select width="300px" value={selected} onChange={setSelected}>
        <Select.Button selectedName={selected?.name} />
        <Select.Options>
          {people.map((person) => (
            <Select.Option key={person.name} name={person.name} value={person} />
          ))}
        </Select.Options>
      </Select>
      <Select width="300px" value={selected} onChange={setSelected} disabled>
        <Select.Button selectedName={selected?.name} />
        <Select.Options>
          {people.map((person) => (
            <Select.Option key={person.name} name={person.name} value={person} />
          ))}
        </Select.Options>
      </Select>
    </Flex>
  );
};
