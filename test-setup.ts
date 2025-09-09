async function testSetup() {
  console.log('🧪 Testing Cognitron setup...');
  
  try {
    const { fetchSubredditData } = await import('./src/services/reddit/api.js');
    const { createOpenAIClient } = await import('./src/services/ai/clients.js');
    
    console.log('✅ Modules imported successfully');
    const data = await fetchSubredditData('test');
    console.log('✅ Mock data fetched:', data.length, 'items');
    
    const aiClient = createOpenAIClient();
    console.log('✅ AI client created in mock mode');
    
    console.log('🎉 All basic tests passed!');
    return true;
    
  } catch (error) {
    console.error('❌ Test failed:', error);
    return false;
  }
}

testSetup();