import { combineReducers } from 'redux';

import { authReducer } from './authentication.reducer';
import { gamesReducer } from './games.reducer';

const rootReducer = combineReducers({
  authReducer,
  gamesReducer,
});

export default rootReducer;
