import { Devvit } from '@devvit/public-api';
import { GameState } from '../logic/gameState.js';
import { analyzeSubreddit } from '../services/ai/mockAnalyst.js';

export const ChamberView = Devvit.createComponent({
  name: 'ChamberView',
  props: {
    gameState: { type: 'object' as const, required: true }
  },
  render: ({ props }) => {
    const gameState = props.gameState as GameState;
    const analysis = analyzeSubreddit(gameState.currentSubreddit);

    return (
      <vstack padding="medium" gap="medium">
        <text size="xlarge" weight="bold">Cognitron - Chamber {gameState.currentChamber}</text>
        
        <vstack border="thin" padding="medium" cornerRadius="medium">
          <text size="large" weight="bold">Subreddit: {gameState.currentSubreddit}</text>
          <text weight="bold">Syndrome: {analysis.name}</text>
          <text>Difficulty: {analysis.difficulty}</text>
          <text>{analysis.description}</text>
          <text>Example: "{analysis.example}"</text>
        </vstack>

        <text>Attempts remaining: {gameState.attemptsRemaining}</text>
        <text>Score: {gameState.score}</text>

        <button onPress={() => {
            console.log('Player attempting intervention...');
        }}>Submit Intervention</button>
      </vstack>
    );
  }
});