// This file is a secure API route for image generation
import { NextResponse } from 'next/server';
import { generatePromptFromMemory, generateImageFromMemory } from '../../../lib/openai-service';

export async function POST(request) {
  try {
    // Get the memory details from the request body
    const memoryDetails = await request.json();
    
    // Get the API key from environment variables
    const apiKey = process.env.OPENAI_API_KEY;
    
    if (!apiKey) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      );
    }
    
    // Generate the prompt
    const prompt = generatePromptFromMemory(memoryDetails);
    
    // Generate the image
    const imageUrl = await generateImageFromMemory(memoryDetails, apiKey);
    
    // Return the prompt and image URL
    return NextResponse.json({ prompt, imageUrl });
  } catch (error) {
    console.error('Error in generate-image API route:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to generate image' },
      { status: 500 }
    );
  }
}
