import { useState } from 'react';

import { Flex } from '../Flex';
import AutoSelect from './AutoSelect';

export default {
  title: 'Form/AutoSelect',
  component: AutoSelect,
  argTypes: {},
};

const people = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
];

export const Default = () => {
  const [selected, setSelected] = useState(people[0]);
  const [query, setQuery] = useState('');

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) =>
          person.name.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, '')),
        );

  return (
    <Flex flexDirection="column" justifyContent="center" alignItems="center" rowGap="10px">
      <AutoSelect width="300px" value={selected} onChange={setSelected}>
        <AutoSelect.InputGroup>
          <AutoSelect.Input
            displayValue={(person: { name: string }) => person.name}
            onChange={(event) => setQuery(event.target.value)}
          />
          <AutoSelect.Button />
        </AutoSelect.InputGroup>
        <AutoSelect.Options
          afterLeave={() => setQuery('')}
          isNotFound={filteredPeople.length === 0 && query !== ''}
          textNotFound="검색 결과가 없습니다."
        >
          {filteredPeople.map((person) => (
            <AutoSelect.Option key={person.id} name={person.name} value={person} />
          ))}
        </AutoSelect.Options>
      </AutoSelect>
      <AutoSelect width="300px" value={selected} onChange={setSelected} disabled>
        <AutoSelect.InputGroup>
          <AutoSelect.Input
            displayValue={(person: { name: string }) => person.name}
            onChange={(event) => setQuery(event.target.value)}
          />
          <AutoSelect.Button />
        </AutoSelect.InputGroup>
        <AutoSelect.Options
          afterLeave={() => setQuery('')}
          isNotFound={filteredPeople.length === 0 && query !== ''}
          textNotFound="검색 결과가 없습니다."
        >
          {filteredPeople.map((person) => (
            <AutoSelect.Option key={person.id} name={person.name} value={person} />
          ))}
        </AutoSelect.Options>
      </AutoSelect>
    </Flex>
  );
};
