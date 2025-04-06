// This file handles the OpenAI API configuration securely
import OpenAI from 'openai';

/**
 * Creates an OpenAI client with the provided API key
 * @param {string} apiKey - The OpenAI API key
 * @returns {OpenAI} - An initialized OpenAI client
 */
export function createOpenAIClient(apiKey) {
  // Only create a client if we have an API key
  if (!apiKey) {
    throw new Error('OpenAI API key is required');
  }
  
  return new OpenAI({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true // Only for client-side demo purposes
  });
}

/**
 * Generates a prompt for DALL-E based on memory details
 * @param {Object} memoryDetails - The memory details provided by the user
 * @returns {string} - A formatted prompt for DALL-E
 */
export function generatePromptFromMemory(memoryDetails) {
  const { title, description, date, location, people, emotions } = memoryDetails;
  
  // Start with the core description
  let prompt = `Create a realistic, detailed image of: ${description}`;
  
  // Add context from title if different from description
  if (title && !description.includes(title)) {
    prompt += ` The scene is about "${title}".`;
  }
  
  // Add location context if provided
  if (location) {
    prompt += ` The location is ${location}.`;
  }
  
  // Add people if provided
  if (people) {
    const peopleList = people.split(',').map(p => p.trim()).filter(p => p);
    if (peopleList.length === 1) {
      prompt += ` Include ${peopleList[0]} in the scene.`;
    } else if (peopleList.length > 1) {
      const lastPerson = peopleList.pop();
      prompt += ` Include ${peopleList.join(', ')} and ${lastPerson} in the scene.`;
    }
  }
  
  // Add emotional context if provided
  if (emotions) {
    const emotionList = emotions.split(',').map(e => e.trim()).filter(e => e);
    if (emotionList.length > 0) {
      prompt += ` The mood of the image should convey ${emotionList.join(' and ')}.`;
    }
  }
  
  // Add time context if provided
  if (date) {
    const memoryDate = new Date(date);
    const season = getSeason(memoryDate);
    const timeOfDay = 'daytime'; // Default to daytime
    prompt += ` The scene takes place during ${timeOfDay} in ${season}.`;
  }
  
  // Add style guidance
  prompt += ` The image should be photorealistic, high quality, with natural lighting and composition.`;
  
  return prompt;
}

/**
 * Determines the season based on the date
 * @param {Date} date - The date object
 * @returns {string} - The season name
 */
function getSeason(date) {
  const month = date.getMonth();
  
  if (month >= 2 && month <= 4) return 'spring';
  if (month >= 5 && month <= 7) return 'summer';
  if (month >= 8 && month <= 10) return 'autumn';
  return 'winter';
}

/**
 * Generates an image using DALL-E based on memory details
 * @param {Object} memoryDetails - The memory details provided by the user
 * @param {string} apiKey - The OpenAI API key
 * @returns {Promise<string>} - A URL to the generated image
 */
export async function generateImageFromMemory(memoryDetails, apiKey) {
  try {
    // Generate the prompt
    const prompt = generatePromptFromMemory(memoryDetails);
    
    // Create OpenAI client with the provided API key
    const openai = createOpenAIClient(apiKey);
    
    // Call the OpenAI API to generate an image
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: "1024x1024",
    });
    
    // Return the URL of the generated image
    return response.data[0].url;
  } catch (error) {
    console.error('Error generating image:', error);
    throw new Error(`Failed to generate image: ${error.message}`);
  }
}
