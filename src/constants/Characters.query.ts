import { gql } from '@apollo/client';

export const QUERY = gql`
  query Characters($gender: String) {
    characters(page: 1, filter: { gender: $gender }) {
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
