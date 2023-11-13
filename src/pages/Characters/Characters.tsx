import { useState } from 'react';
import { useQuery } from '@apollo/client';
import styles from './Characters.module.scss';
import banner from '../../assets/Logo.svg';
import { QUERY } from 'constants/Characters.query';
import { CharacterCard } from 'components/CharacterCard/CharacterCard';

export function Characters() {
  const [filter, _] = useState<string>('');

  const { loading, error, data } = useQuery(QUERY, {
    variables: { gender: filter }
  });

  if (loading) return <h2>Carregado...</h2>;
  if (error) return <span>Error: {error.message}</span>;

  return (
    <div className="styles.characters_container">
      {/* TODO */}
      {/* <img src={banner} alt="" /> */}

      {/* TODO */}
      {/* <div className="styles.characters_container__filters"></div> */}
      <ul className="styles.container__characters">
        {data.characters.results.map((info: any) => (
          <li key={info.id} className="styles.container__characters__card">
            <CharacterCard
              id={info.id}
              image={info.image}
              name={info.name}
              species={info.species}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
