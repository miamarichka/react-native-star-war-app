import {combineReducers} from '@reduxjs/toolkit';

import characters from './characters/slice';

const rootReducer = combineReducers({
  characters,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
