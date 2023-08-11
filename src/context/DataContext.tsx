import { PropsWithChildren, createContext } from 'react';
import useFetch from '../hooks/useFetch';

type IDataContext = {
  loading: boolean;
  error: string | null | undefined;
  data: IVenda[] | null | undefined;
};

type IVenda = {
  id: string;
  nome: string;
  preco: number;
  status: 'pago' | 'processando' | 'falha';
  pagamento: 'boleto' | 'pix' | 'cartao';
  parcelas: number | null;
  data: string;
};

export const DataContext = createContext<IDataContext | null>(null);

export const DataContextProvider = ({ children }: PropsWithChildren) => {
  const { data, loading, error } = useFetch<IVenda[]>(
    'https://data.origamid.dev/vendas/'
  );

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
