export type LocationData = {
  location: {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: {
      id: number;
      name: string;
      species: string;
      image: string;
    }[];
  };
};
