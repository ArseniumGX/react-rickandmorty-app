import { useQuery } from '@apollo/client';
import { GoBack } from 'components';
import { CHARACTER } from 'constants/Character.query';
import { CharacterData } from 'datatypes/Character';
import { useParams } from 'react-router-dom';
import { Informations } from './Informations/Informations';
import styles from './Character.module.scss';
import { Episodes } from './Episodes/Episodes';

declare module 'react' {
  interface CSSProperties {
    '--backgroundImage'?: string;
  }
}

export function Character() {
  const { characterId } = useParams<string>();

  const { loading, error, data } = useQuery<CharacterData>(CHARACTER, {
    variables: { id: characterId }
  });

  if (loading) return <span>Loading...</span>;
  if (error) return <span>ERROR: {error.message}</span>;

  return (
    <section className={styles.container}>
      <GoBack />
      <div className={styles.header}>
        <div
          className={styles.header__image}
          style={{ '--backgroundImage': `url(${data?.character.image})` }}
        ></div>
        <h3 className={styles.header__name}>{data?.character.name}</h3>
      </div>
      <Informations
        gender={data?.character.gender}
        status={data?.character.status}
        species={data?.character.species}
        origin={data?.character.origin.name}
        type={data?.character.type || 'Unknown'}
        location={data?.character.location.name}
      />
      <div className={styles.episodes}>
        <fieldset>
          <legend>Episodes</legend>
          <ul className={styles.episodes__list}>
            {data?.character.episode.map(({ id, name, episode, air_date }) => (
              <li key={id}>
                <Episodes
                  id={id}
                  name={name}
                  episode={episode}
                  air_date={air_date}
                />
              </li>
            ))}
          </ul>
        </fieldset>
      </div>
    </section>
  );
}
