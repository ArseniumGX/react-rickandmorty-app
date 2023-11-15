import { gql } from '@apollo/client';

export const LOCATION = gql`
  query Location($id: ID) {
    location(id: $id) {
      id
      name
      type
      dimension
      residents {
        id
        name
        species
        image
      }
    }
  }
`;
