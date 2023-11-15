export type EpisodeData = {
  episode: {
    id: number;
    name: string;
    episode: string;
    air_date: string;
    characters: {
      id: number;
      name: string;
      species: string;
      image: string;
    }[];
  };
};
