import { Info } from './Info';

export type CharactersData = {
  characters: {
    info: Info;
    results: {
      id: number;
      name: string;
      species: string;
      image: string;
    }[];
  };
};
