import { Devvit } from '@devvit/public-api';
import { GameManager } from './components/GameManager.js';

// Configure the app
Devvit.configure({
  redditAPI: true,
});

// Register your component
Devvit.addComponent(GameManager);

// Add a single menu item
Devvit.addMenuItem({
  label: 'Start Cognitron Game',
  location: 'post',
  onPress: async (event, context) => {
    try {
      // Get the current post info
      const post = await context.reddit.getPostById(event.postId!);
      console.log('Starting Cognitron game in:', post.subredditName);
      
      // Show loading message
      context.ui.showToast('🚀 Launching Cognitron...');
      
      // For now, just show a success message
      // The actual game will be handled by the GameManager component
      // when the user interacts with the post
      
    } catch (error) {
      console.error('Error starting game:', error);
      context.ui.showToast('❌ Failed to start game. Check console.');
    }
  },
});

export default Devvit;