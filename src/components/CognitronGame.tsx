import { Devvit, useState } from '@devvit/public-api';

Devvit.addCustomPostType({
  name: 'CognitronGame',
  render: (context) => {
    const [score, setScore] = useState(0);
    
    return Devvit.createElement('vstack', { padding: 'medium', gap: 'medium' }, [
      Devvit.createElement('text', { size: 'xlarge', weight: 'bold' }, '🧠 Cognitron'),
      Devvit.createElement('text', { size: 'large' }, 'Echo Chamber Breaker'),
      
      Devvit.createElement('vstack', { 
        border: 'thin', 
        padding: 'medium', 
        cornerRadius: 'medium',
        gap: 'small'
      }, [
        Devvit.createElement('text', { weight: 'bold' }, 'Chamber 1 of 3'),
        Devvit.createElement('text', {}, 'Subreddit: r/movies'),
        Devvit.createElement('text', {}, 'Syndrome: The Nostalgia Filter'),
        Devvit.createElement('text', {}, `Score: ${score}`),
        Devvit.createElement('text', {}, 'Attempts: 3 remaining'),
      ]),
      
      Devvit.createElement('button', { 
        onPress: () => setScore(score + 100),
        appearance: 'primary'
      }, 'Gain 100 Points')
    ]);
  },
});
