/* eslint-disable no-case-declarations */
const initialState = {
  started: false,
  deck: ['😼', '🙅‍♂️', '🔀', '💣', '😼'], // Example deck with one exploding kitten
  drawnCards: [],
  message: '',
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'START_GAME':
      return {
        ...state,
        started: true,
        message: `Welcome, ${action.payload}! Click 'Draw Card' to begin.`,
      };
    case 'DRAW_CARD':
      const randomIndex = Math.floor(Math.random() * state.deck.length);
      const drawnCard = state.deck[randomIndex];
      const newDeck = state.deck.filter((_, index) => index !== randomIndex);
      const drawnCards = [...state.drawnCards, drawnCard];
      let message = ' You drew a card: ';

      if (drawnCard === '💣') {
        message = 'Oops! You drew an Exploding Kitten. Game Over!';
      } else if (drawnCard === '🙅‍♂️') {
        message = 'You drew a Defuse card. You are safe from the Exploding Kitten!';
      } else if (drawnCard === '🔀') {
        message = 'Shuffling the deck...';
        return {
          ...state,
          deck: initialState.deck,
          drawnCards: [],
          message,
        };
      } else {
        message = 'You drew a Cat card. Keep going!';
      }

      return {
        ...state,
        deck: newDeck,
        drawnCards,
        message,
      };
    default:
      return state;
  }
};

export default gameReducer;
