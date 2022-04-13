import { useState } from 'react';

import AutoSelect from './AutoSelect';

export default {
  title: 'Form/AutoSelect',
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
    <div tw="flex justify-center">
      <AutoSelect width="300px" value={selected} onChange={setSelected}>
        <AutoSelect.InputGroup>
          <AutoSelect.Input
            displayValue={(person: { name: string }) => person.name}
            onChange={(event) => setQuery(event.target.value)}
          />
          <AutoSelect.Button />
        </AutoSelect.InputGroup>
        <AutoSelect.Options afterLeave={() => setQuery('')} isNotFound={filteredPeople.length === 0 && query !== ''}>
          {filteredPeople.map((person) => (
            <AutoSelect.Option key={person.id} name={person.name} value={person} />
          ))}
        </AutoSelect.Options>
      </AutoSelect>
    </div>
  );
};
