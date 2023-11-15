import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { LOCATIONS } from 'constants/Locations.query';
import { LocationCard } from 'components';
import { Filters } from 'datatypes/Filters';
import { LocationsData } from 'datatypes/Locations';

export function Locations() {
  const [filter, setFilter] = useState<Filters>({});

  const { loading, error, data } = useQuery<LocationsData>(LOCATIONS, {
    variables: filter
  });

  if (loading) return <span>Carregando...</span>;
  if (error) return <span>Error: {error.message}</span>;

  return (
    <>
      {/* TODO Banner */}
      {/* TODO Filter */}
      {/* FIX locaontine */}
      <ul>
        {data?.locations.results.map(({ id, name, type }) => (
          <li key={id}>
            <LocationCard id={id} name={name} type={type} />
          </li>
        ))}
      </ul>
    </>
  );
}
