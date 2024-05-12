export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'n/a',
}

export interface ICharacter {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: Gender;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export type TPeopleResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: ICharacter[];
};

export type TCharacterDetailsResponse = ICharacter;

export type TCharactersState = {
  characters: ICharacter[] | [];
  prevPage: string | null;
  nextPage: string | null;
  currentCharacter: ICharacter | null;
  isLoading: boolean;
  favorites: ICharacter[] | [];
  genderCounts: Record<Gender, number>;
  total: number;
};
