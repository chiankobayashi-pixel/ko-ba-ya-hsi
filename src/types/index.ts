export interface ImageGenerationRequest {
  prompt: string;
  size?: string;
  quality?: string;
  n?: number;
}

export interface ImageGenerationResponse {
  created: number;
  data: {
    url: string;
    revised_prompt?: string;
  }[];
}

export interface GenerationState {
  prompt: string;
  generatedImages: string[];
  isLoading: boolean;
  error: string | null;
  setPrompt: (prompt: string) => void;
  generateImage: (prompt: string) => Promise<void>;
  clearImages: () => void;
}