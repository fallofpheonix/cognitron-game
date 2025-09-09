async function test() {
  console.log('🧪 Testing compiled code...');
  
  try {
        const { fetchSubredditData } = await import('./dist/services/reddit/api.js');
    const { createOpenAIClient } = await import('./dist/services/ai/clients.js');
    
    console.log('✅ Successfully imported compiled modules');

        const data = await fetchSubredditData('test');
    console.log('✅ Mock data fetched:', data.length, 'items');
    
    const aiClient = createOpenAIClient();
    console.log('✅ AI client created successfully');
    
    console.log('🎉 All tests passed! Environment is ready for development.');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    console.error('Stack:', error.stack);
  }
}

test();