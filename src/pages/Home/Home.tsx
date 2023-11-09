import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { QUERY } from '../../constants/Characters.query';
import { Character } from '../Character';
import style from './Home.module.scss';

export function Home() {
  const [filter, setFilter] = useState<string>('');
  const { loading, error, data } = useQuery(QUERY, {
    variables: { gender: filter }
  });

  if (loading) return <h2>Carregado...</h2>;
  if (error) return <span>Error: {error.message}</span>;

  return <></>;
}
