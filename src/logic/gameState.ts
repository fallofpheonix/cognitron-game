export interface GameState {
  currentChamber: number;
  totalChambers: number;
  score: number;
  isGameActive: boolean;
  currentSubreddit: string;
  currentSyndrome: string;
}

export function createNewGame(): GameState {
  return {
    currentChamber: 1,
    totalChambers: 3,
        score: 0,
    isGameActive: true,
    currentSubreddit: '',
    currentSyndrome: ''
  };
}

export function advanceChamber(state: GameState): GameState {
  return {
    ...state,
    currentChamber: state.currentChamber + 1,
    score: state.score + 100
  };
}