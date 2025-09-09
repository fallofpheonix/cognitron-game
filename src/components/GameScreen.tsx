
import { Devvit, useState } from '@devvit/public-api';
import { createNewGame, advanceChamber } from '../logic/gameState.js';
Devvit.addCustomPostType({
  name: 'GameScreen',
  render: (context) => {
    const [gameState, setGameState] = useState(createNewGame);
    
    return (
      <vstack>
        <text size="large" weight="bold">Cognitron Game</text>
        <text>Chamber: {gameState.currentChamber}/{gameState.totalChambers}</text>
        <text>Score: {gameState.score}</text>
        <button onPress={() => {
          setGameState(advanceChamber(gameState));
        }}>Next Chamber</button>
      </vstack>
    );
  },
});
export const GameScreen = 'GameScreen';