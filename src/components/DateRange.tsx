import { useState } from 'react';
import DateInput from './DateInput';

const DataRange = () => {
  const [inicio, setInicio] = useState('');
  const [final, setFinal] = useState('');

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <DateInput
        id="inicio"
        label="Início"
        value={inicio}
        onChange={({ target }) => setInicio(target.value)}
      />
      <DateInput
        id="final"
        label="Final"
        value={final}
        onChange={({ target }) => setFinal(target.value)}
      />
    </form>
  );
};

export default DataRange;
