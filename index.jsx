// store/index.js
import { createStore, combineReducers } from 'redux';
import gameReducer from '../reducers/gameReducer';
import leaderboardReducer from '../reducers/leaderboardReducer';

const rootReducer = combineReducers({
  game: gameReducer,
  leaderboard: leaderboardReducer,
});

const store = createStore(rootReducer);

export default store;
