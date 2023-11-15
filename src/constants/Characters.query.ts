import { gql } from '@apollo/client';

export const QUERY = gql`
  query Characters($gender: String, $species: String, $status: String) {
    characters(
      page: 1
      filter: { gender: $gender, status: $status, species: $species }
    ) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        species
        image
        status
      }
    }
  }
`;
