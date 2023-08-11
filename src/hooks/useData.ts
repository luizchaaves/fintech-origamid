import { useContext } from 'react';
import { DataContext } from '../context/DataContext';

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error('useContext deve estar dentro do provider');
  return context;
};
