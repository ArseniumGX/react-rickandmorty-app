import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY } from 'constants/Characters.query';
import { CharacterCard } from 'components/CharacterCard/CharacterCard';
import { CharactersData } from 'datatypes/Characters';
import { Filters } from 'datatypes/Filters';

export function Characters() {
  const [filter, setFilter] = useState<Filters>({});

  const { loading, error, data } = useQuery<CharactersData>(QUERY, {
    variables: filter
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
        {data?.characters.results.map(({ id, name, species, image }) => (
          <li key={id} className="styles.container__characters__card">
            <CharacterCard
              id={id}
              image={image}
              name={name}
              species={species}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
