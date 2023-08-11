import VendaItem from '../components/VendaItem';
import { useData } from '../hooks/useData';

const Vendas = () => {
  const { data } = useData();

  if (!data) return null;
  return (
    <ul>
      {data.map((venda) => (
        <li key={venda.id}>
          <VendaItem venda={venda} />
        </li>
      ))}
    </ul>
  );
};

export default Vendas;
