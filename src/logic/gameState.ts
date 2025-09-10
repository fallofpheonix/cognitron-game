export interface GameState {
  currentChamber: number;
  totalChambers: number;
  score: number;
  currentSubreddit: string;
  currentSyndrome: string;
  attemptsRemaining: number;
  status: 'playing' | 'won' | 'lost';
}

export function createNewGame(): GameState {
  return {
    currentChamber: 1,
    totalChambers: 3,
    score: 0,
    currentSubreddit: 'r/movies',
    currentSyndrome: 'The Nostalgia Filter',
    attemptsRemaining: 3,
    status: 'playing'
  };
}

export function advanceChamber(state: GameState): GameState {
  const nextChamber = state.currentChamber + 1;
  
  return {
    ...state,
    currentChamber: nextChamber,
    score: state.score + 100,
    currentSubreddit: getMockSubreddit(nextChamber),
    currentSyndrome: getMockSyndrome(nextChamber),
    attemptsRemaining: 3
  };
}

export function failAttempt(state: GameState): GameState {
  const attemptsLeft = state.attemptsRemaining - 1;
  
  return {
    ...state,
    attemptsRemaining: attemptsLeft,
    status: attemptsLeft === 0 ? 'lost' : 'playing'
  };
}

export function winGame(state: GameState): GameState {
  return {
    ...state,
    status: 'won',
    score: state.score + 500
  };
}

// Mock data generators
function getMockSubreddit(chamber: number): string {
  const subreddits = ['r/movies', 'r/technology', 'r/science', 'r/books', 'r/gaming'];
  return subreddits[chamber % subreddits.length];
}

function getMockSyndrome(chamber: number): string {
  const syndromes = [
    'The Nostalgia Filter',
    'The Hype Cycle Trap', 
    'The Bandwagon Effect',
    'The False Dilemma',
    'The Confirmation Bias'
  ];
  return syndromes[chamber % syndromes.length];
}
