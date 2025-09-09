import { Devvit, useState } from '@devvit/public-api';
import { createNewGame, advanceChamber, failAttempt, winGame, GameState } from '../logic/gameState.js';
import { ChamberView } from './ChamberView.js';
import { evaluateIntervention } from '../services/ai/mockAnalyst.js';

export const GameManager = Devvit.createComponent({
  name: 'GameManager',
  render: (context) => {
    const [gameState, setGameState] = useState(createNewGame);
    const [interventionText, setInterventionText] = useState('');

    const handleIntervention = () => {
      const result = evaluateIntervention(interventionText, gameState.currentSyndrome);
      
      if (result.success) {
        if (gameState.currentChamber >= gameState.totalChambers) {
          setGameState(winGame(gameState));
          context.ui.showToast('🎉 You won! All chambers cleared!');
        } else {
          setGameState(advanceChamber(gameState));
          context.ui.showToast('✅ Chamber cleared! Advancing...');
        }
      } else {
        const newState = failAttempt(gameState);
        setGameState(newState);
        
        if (newState.status === 'lost') {
          context.ui.showToast('❌ Game over! Out of attempts.');
        } else {
          context.ui.showToast('⚠️ Try again: ' + result.feedback);
        }
      }
    };

    if (gameState.status === 'won') {
      return (
        <vstack padding="medium" gap="medium">
          <text size="xxlarge" weight="bold">Victory! 🎉</text>
          <text>Final Score: {gameState.score}</text>
          <text>You broke all {gameState.totalChambers} echo chambers!</text>
          <button onPress={() => setGameState(createNewGame())}>Play Again</button>
        </vstack>
      );
    }

    if (gameState.status === 'lost') {
      return (
        <vstack padding="medium" gap="medium">
          <text size="xxlarge" weight="bold">Game Over 💀</text>
          <text>Final Score: {gameState.score}</text>
          <text>You reached chamber {gameState.currentChamber}</text>
          <button onPress={() => setGameState(createNewGame())}>Try Again</button>
        </vstack>
      );
    }

    return (
      <vstack padding="medium" gap="medium">
        <ChamberView gameState={gameState} />
        
        <vstack gap="small">
          <text weight="bold">Your Intervention:</text>
          <textInput 
            value={interventionText}
            onInput={(e) => setInterventionText(e.value)}
            placeholder="Write your post to break the echo chamber..."
            multiline={true}
            height="100px"
          />
        </vstack>

        <button onPress={handleIntervention} disabled={!interventionText.trim()}>
          Submit Intervention
        </button>
      </vstack>
    );
  }
});