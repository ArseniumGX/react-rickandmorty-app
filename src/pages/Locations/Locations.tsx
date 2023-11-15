import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { LOCATIONS } from 'constants/Locations.query';
import { LocationCard } from 'components';
import { Filters } from 'datatypes/Filters';
import { LocationsData } from 'datatypes/Locations';
import { LocationData } from 'datatypes/Location';

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
        {data?.locations.results.map((location: LocationData) => (
          <li key={location.id}>
            <LocationCard
              id={location.id}
              name={location.name}
              type={location.type}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
