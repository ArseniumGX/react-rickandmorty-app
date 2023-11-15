import { gql } from '@apollo/client';

export const LOCATIONS = gql`
  query Locations($type: String, $dimension: String) {
    locations(page: 1, filter: { type: $type, dimension: $dimension }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        type
      }
    }
  }
`;
