// reducers/leaderboardReducer.js
const leaderboardReducer = (state = [], action) => {
  switch (action.type) {
    case 'START_GAME':
      return state.concat({ username: action.payload, gamesWon: 0 });
    case 'DRAW_CARD':
      return state;
    case 'GAME_WON':
      return state.map(player =>
        player.username === action.payload
          ? { ...player, gamesWon: player.gamesWon + 1 }
          : player
      );
    default:
      return state;
  }
};

export default leaderboardReducer;
