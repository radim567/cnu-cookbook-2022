import { Input } from 'reactstrap';
import { useState } from 'react';

export function SearchInput() {
  // destructuring
  const [value, setValue] = useState();

  return (
    <div>
      <Input value={value} onChange={(event) => setValue(event.target.value)} />
      <p>Hodnota: {value}</p>
    </div>
  );
}
