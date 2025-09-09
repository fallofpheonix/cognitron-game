import { Devvit } from '@devvit/public-api';

export async function fetchSubredditData(subredditName: string): Promise<any[]> {
  try {

     console.log(`Would fetch data from r/${subredditName}`);

     return [
      { title: 'Test Post 1', content: 'This is test content' },
      { title: 'Test Post 2', content: 'More test content' }
    ];
  } catch (error) {
    console.error('Error fetching subreddit data:', error);
    return [];
  }
}