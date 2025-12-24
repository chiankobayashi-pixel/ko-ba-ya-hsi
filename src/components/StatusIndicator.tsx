import React from 'react';
import { Box, CircularProgress, Typography, Alert } from '@mui/material';

interface StatusIndicatorProps {
  isLoading: boolean;
  error: string | null;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ isLoading, error }) => {
  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
        <CircularProgress size={24} />
        <Typography variant="body1">Generating your image...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Alert severity="error" sx={{ mt: 2 }}>
        {error}
      </Alert>
    );
  }

  return null;
};

export default StatusIndicator;