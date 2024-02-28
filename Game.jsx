// components/Game.js
import  { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGame, drawCard } from '../actions/gameActions';

const Game = () => {
  const dispatch = useDispatch();
  const game = useSelector(state => state.game);
  const [username, setUsername] = useState('');

  const handleStartGame = () => {
    dispatch(startGame(username));
  };

  const handleDrawCard = () => {
    dispatch(drawCard());
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <button onClick={handleStartGame}>Start Game</button>
      {game.started && (
        <>
          <h2>Deck of Cards</h2>
          <button onClick={handleDrawCard}>Draw Card</button>
          <p>{game.message}</p>
        </>
      )}
    </div>
  );
};

export default Game;
