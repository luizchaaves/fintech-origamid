import { useData } from '../hooks/useData';
import DateInput from './DateInput';

const DataRange = () => {
  const { inicio, setInicio, final, setFinal } = useData();

  return (
    <form onSubmit={(e) => e.preventDefault()} className="box flex">
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
