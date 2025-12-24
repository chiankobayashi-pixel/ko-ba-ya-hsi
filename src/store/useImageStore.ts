import { create } from 'zustand';
import { GenerationState } from '../types';
import { generateImageFromText } from '../api/dalleApi';

export const useImageStore = create<GenerationState>((set) => ({
  prompt: '',
  generatedImages: [],
  isLoading: false,
  error: null,
  
  setPrompt: (prompt: string) => set({ prompt }),
  
  generateImage: async (prompt: string) => {
    set({ isLoading: true, error: null });
    
    try {
      const response = await generateImageFromText(prompt);
      const imageUrls = response.data.map(item => item.url);
      set({ 
        generatedImages: imageUrls,
        isLoading: false,
        prompt
      });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to generate image',
        isLoading: false
      });
    }
  },
  
  clearImages: () => set({ generatedImages: [] })
}));