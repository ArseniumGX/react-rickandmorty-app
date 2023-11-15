import { gql } from '@apollo/client';

export const EPISODE = gql`
  query Episode($id: ID = 1) {
    episode(id: $id) {
      id
      name
      episode
      air_date
      characters {
        id
        name
        species
        image
      }
    }
  }
`;
