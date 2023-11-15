import { Info } from './Info';

export type EpisodesData = {
  episodes: {
    info: Info;
    results: {
      id: number;
      name: string;
      air_date: string;
      episode: string;
    }[];
  };
};
