import React from 'react';
import { Box, Container, Typography, AppBar, Toolbar } from '@mui/material';
import ImageGenerator from './components/ImageGenerator';

function App() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Text-to-Image Generator
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ flex: 1, py: 4 }}>
        <ImageGenerator />
      </Container>
    </Box>
  );
}

export default App;