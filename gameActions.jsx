// actions/gameActions.js
export const startGame = (username) => {
  return {
    type: 'START_GAME',
    payload: username,
  };
};

export const drawCard = () => {
  return {
    type: 'DRAW_CARD',
  };
};
