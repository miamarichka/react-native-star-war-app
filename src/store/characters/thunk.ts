import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {TCharacterDetailsResponse, TPeopleResponse} from './types';
import logger from '../../utils/logger';
import {
  clearCurrentCharacter,
  fetchCharacterDetailsFailure,
  fetchCharactersFailure,
  fetchCharactersStart,
  fetchCharactersSuccess,
  setCurrentCharacter,
} from './slice';
import {RootState} from '../rootReducer';

const BASE_URL = 'https://swapi.py4e.com/api';

const FETCH_CHARACTERS = 'characters/FETCH_CHARACTERS';
const FETCH_CHARACTER_DETAILS = 'characters/FETCH_CHARACTER_DETAILS';

export const fetchCharacters = createAsyncThunk<
  void,
  number,
  {state: RootState}
>(FETCH_CHARACTERS, async (page, {dispatch}) => {
  try {
    logger.log('Fetching characters on page', page);
    dispatch(fetchCharactersStart());

    const {data: response} = await axios.get<TPeopleResponse>(
      `${BASE_URL}/people/?page=${page}`,
    );
    logger.log('Fetched characters:', response.results.length);
    dispatch(fetchCharactersSuccess(response));
  } catch (error) {
    logger.error('Failed to fetch characters:', error);
    dispatch(fetchCharactersFailure());
  }
});

export const fetchCharacterDetails = createAsyncThunk<
  void,
  number,
  {state: RootState}
>(FETCH_CHARACTER_DETAILS, async (characterNumber, {dispatch}) => {
  try {
    dispatch(clearCurrentCharacter());
    logger.log('Fetching character with ID', characterNumber);

    const {data: response} = await axios.get<TCharacterDetailsResponse>(
      `${BASE_URL}/people/${characterNumber}`,
    );
    logger.log('Fetched character:', response.name);
    dispatch(setCurrentCharacter(response));
  } catch (error) {
    logger.error('Failed to fetch character:', error);
    dispatch(fetchCharacterDetailsFailure());
  }
});
