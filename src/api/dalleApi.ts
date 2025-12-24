import axios from 'axios';
import { ImageGenerationRequest, ImageGenerationResponse } from '../types';

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY || process.env.OPENAI_API_KEY;
const API_URL = 'https://api.openai.com/v1/images/generations';

export const generateImageFromText = async (
  prompt: string,
  options: Partial<ImageGenerationRequest> = {}
): Promise<ImageGenerationResponse> => {
  if (!API_KEY) {
    throw new Error('OpenAI API key is not configured');
  }

  const requestData: ImageGenerationRequest = {
    prompt,
    size: options.size || '1024x1024',
    quality: options.quality || 'standard',
    n: options.n || 1,
  };

  try {
    const response = await axios.post<ImageGenerationResponse>(API_URL, requestData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
    });

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.error?.message || error.message;
      throw new Error(errorMessage);
    }
    throw new Error('Failed to generate image from DALL-E API');
  }
};