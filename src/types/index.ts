export interface ICharacterItem {
  created: string;
  episode?: string[] | null;
  gender: string;
  id: number;
  image: string;
  location: LocationOrOrigin;
  name: string;
  origin: LocationOrOrigin;
  species: string;
  status: string;
  type: string;
  url: string;
}
export interface LocationOrOrigin {
  name: string;
  url: string;
}


export interface IEpisodeCard {
  air_date: string;
  characters?: (string)[] | null;
  created: string;
  episode: string;
  id: number;
  name: string;
  url: string;
}
