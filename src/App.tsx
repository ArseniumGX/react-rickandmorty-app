import { gql, useQuery } from '@apollo/client';
import { useEffect } from 'react';

const QUERY = gql`
  query {
    characters(page: 1, filter: {}) {
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

type Characters = {
  info: Info;
  results: Result;
};

type Info = {
  count: number;
  pages: number;
  next: number | null;
  prev: number | null;
};

type Result = {
  id: string;
  name: string;
  species: string;
  status: string;
  image: string;
};

function App() {
  const { loading, error, data } = useQuery(QUERY);

  useEffect(() => {
    console.info({ loading, error, data });
  }, [loading]);

  if (loading) return <h2>Carregado...</h2>;
  if (error) return <span>Error: error.message</span>;

  return (
    <>
      <h1>Projeto base</h1>

      <ul>
        {data.characters.results.map((data: Result) => (
          <li key={data.id}>
            <strong>Nome: </strong> <span>{data.name}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
