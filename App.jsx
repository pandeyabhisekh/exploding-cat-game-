// App.js

import Game from './components/Game';
import Leaderboard from './components/Leaderboard';

function App() {
  return (
    <div className="App">
      <h1>Single-Player Card Game</h1>
      <Game />
      <Leaderboard />
    </div>
  );
}

export default App;
