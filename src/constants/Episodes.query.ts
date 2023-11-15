import { gql } from '@apollo/client';

export const EPISODES = gql`
  query Episodes($name: String, $episode: String) {
    episodes(page: 1, filter: { name: $name, episode: $episode }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        air_date
        episode
      }
    }
  }
`;
