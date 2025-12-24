import React, { useState } from 'react';
import { useImageStore } from '../store/useImageStore';
import {
  Box,
  TextField,
  Button,
  CircularProgress,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Alert,
  IconButton,
  Snackbar
} from '@mui/material';
import { Download, Delete } from '@mui/icons-material';

const ImageGenerator: React.FC = () => {
  const [localPrompt, setLocalPrompt] = useState('');
  const {
    generatedImages,
    isLoading,
    error,
    generateImage,
    clearImages
  } = useImageStore();

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleGenerate = async () => {
    if (!localPrompt.trim()) {
      setSnackbarMessage('Please enter a prompt');
      setSnackbarOpen(true);
      return;
    }
    
    try {
      await generateImage(localPrompt);
      setLocalPrompt('');
    } catch (err) {
      console.error('Generation failed:', err);
    }
  };

  const handleDownload = (imageUrl: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `generated-image-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setSnackbarMessage('Image downloaded successfully!');
    setSnackbarOpen(true);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      handleGenerate();
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Text-to-Image Generator
      </Typography>

      <TextField
        label="Describe your image"
        variant="outlined"
        fullWidth
        multiline
        minRows={3}
        maxRows={6}
        value={localPrompt}
        onChange={(e) => setLocalPrompt(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter a detailed description of the image you want to generate..."
        disabled={isLoading}
        helperText="Be as descriptive as possible for better results"
      />

      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleGenerate}
          disabled={isLoading || !localPrompt.trim()}
          startIcon={isLoading ? <CircularProgress size={20} /> : null}
        >
          {isLoading ? 'Generating...' : 'Generate Image'}
        </Button>

        <Button
          variant="outlined"
          color="secondary"
          onClick={clearImages}
          disabled={generatedImages.length === 0}
        >
          Clear All
        </Button>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}

      {generatedImages.length > 0 && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            Generated Images
          </Typography>
          <Grid container spacing={3}>
            {generatedImages.map((imageUrl, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    image={imageUrl}
                    alt={`Generated image ${index + 1}`}
                    sx={{ height: 300, objectFit: 'contain' }}
                  />
                  <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="body2" color="text.secondary">
                      Image {index + 1}
                    </Typography>
                    <Box>
                      <IconButton
                        aria-label="download"
                        onClick={() => handleDownload(imageUrl)}
                        color="primary"
                      >
                        <Download fontSize="small" />
                      </IconButton>
                      <IconButton
                        aria-label="delete"
                        onClick={() => {
                          // In a real app, you might want to remove individual images
                          // For now, we'll just show a message
                          setSnackbarMessage('Use "Clear All" to remove all images');
                          setSnackbarOpen(true);
                        }}
                        color="error"
                      >
                        <Delete fontSize="small" />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        message={snackbarMessage}
      />
    </Box>
  );
};

export default ImageGenerator;