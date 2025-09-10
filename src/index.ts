import { Devvit } from '@devvit/public-api';
import './components/CognitronGame.js';

Devvit.configure({
  redditAPI: true,
});

Devvit.addMenuItem({
  label: 'Start Cognitron Game',
  location: 'post',
  onPress: async (event, context) => {
    context.ui.showToast('🚀 Launching Cognitron...');
  },
});

export default Devvit;
