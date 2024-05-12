import {Gender, ICharacter, TCharactersState, TPeopleResponse} from './types';
import {PayloadAction, createSlice} from '@reduxjs/toolkit';

export const initialState: TCharactersState = {
  characters: [],
  prevPage: null,
  nextPage: null,
  currentCharacter: null,
  isLoading: false,
  favorites: [],
  genderCounts: {
    [Gender.MALE]: 0,
    [Gender.FEMALE]: 0,
    [Gender.OTHER]: 0,
  },
  total: 0,
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    fetchCharactersStart(state: TCharactersState) {
      state.isLoading = true;
    },
    fetchCharactersSuccess(
      state: TCharactersState,
      action: PayloadAction<TPeopleResponse>,
    ) {
      state.characters = [...state.characters, ...action.payload.results];
      state.isLoading = false;
      state.nextPage = action.payload.next;
    },
    fetchCharactersFailure(state: TCharactersState) {
      state.characters = initialState.characters;
      state.isLoading = false;
    },
    setCurrentCharacter(
      state: TCharactersState,
      action: PayloadAction<ICharacter>,
    ) {
      state.currentCharacter = action.payload;
    },
    clearCurrentCharacter(state: TCharactersState) {
      state.currentCharacter = null;
    },
    fetchCharacterDetailsFailure(state: TCharactersState) {
      state.currentCharacter = initialState.currentCharacter;
    },
    addToFavorites(state: TCharactersState, action: PayloadAction<ICharacter>) {
      state.favorites = [...state.favorites, action.payload];
      const gender = action.payload.gender;
      state.total += 1;

      if (Object.values(Gender).includes(gender)) {
        state.genderCounts[gender as Gender] += 1;
      } else {
        state.genderCounts[Gender.OTHER] += 1;
      }
    },
    resetFavorites(state: TCharactersState) {
      state.favorites = [];
      state.genderCounts = {
        [Gender.MALE]: 0,
        [Gender.FEMALE]: 0,
        [Gender.OTHER]: 0,
      };
      state.total = 0;
    },
  },
});

export const {
  fetchCharactersStart,
  fetchCharactersSuccess,
  fetchCharactersFailure,
  setCurrentCharacter,
  fetchCharacterDetailsFailure,
  clearCurrentCharacter,
  addToFavorites,
  resetFavorites,
} = charactersSlice.actions;

export default charactersSlice.reducer;
