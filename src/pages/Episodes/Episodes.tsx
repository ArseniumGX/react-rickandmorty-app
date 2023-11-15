import { useQuery } from '@apollo/client';
import { EpisodeCard } from 'components';
import { EPISODES } from 'constants/Episodes.query';
import { EpisodesData } from 'datatypes/Episodes';
import { useState } from 'react';

export function Episodes() {
  const [filter, setFilter] = useState<string>('');
  const { loading, error, data } = useQuery<EpisodesData>(EPISODES, {
    variables: { filter }
  });

  if (loading) return <span>Carregando...</span>;
  if (error) return <span>Error: {error?.message}</span>;

  return (
    <section>
      {/* TODO BANNER */}
      {/* TODO FILTER */}
      <ul>
        {data?.episodes.results.map(({ id, name, air_date, episode }) => (
          <li key={id}>
            <EpisodeCard
              id={id}
              air_date={air_date}
              episode={episode}
              name={name}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
