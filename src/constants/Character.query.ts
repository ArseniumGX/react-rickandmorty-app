import { gql } from '@apollo/client';

export const CHARACTER = gql`
  query Character($id: ID) {
    character(id: $id) {
      id
      name
      status
      species
      type
      gender
      image
      origin {
        name
      }
      location {
        name
      }
      episode {
        id
        episode
        name
        air_date
      }
    }
  }
`;
