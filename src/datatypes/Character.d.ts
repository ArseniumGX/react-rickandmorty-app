export type CharacterData = {
  character: {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string;
    origin: {
      name: string;
    };
    location: {
      name: string;
    };
    episode: {
      id: number;
      episode: string;
      name: string;
      air_data: string;
    }[];
  };
};
