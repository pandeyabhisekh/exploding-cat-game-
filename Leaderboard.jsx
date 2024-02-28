// components/Leaderboard.js

import { useSelector } from 'react-redux';

const Leaderboard = () => {
  const leaderboard = useSelector(state => state.leaderboard);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul>
        {leaderboard.map((player, index) => (
          <li key={index}>
            {player.username} - Games Won: {player.gamesWon}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
