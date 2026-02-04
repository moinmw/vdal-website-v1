"use client"
import React from 'react';
import { Box, Typography, Paper, Container } from '@mui/material';

interface ArchitectureViewProps {
  imagePath?: string;
}

const ArchitectureView: React.FC<ArchitectureViewProps> = ({ 
  imagePath = "/images/Architecture.png" 
}) => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper 
        elevation={0}
        sx={{
          padding: '24px',
          borderRadius: '12px',
          backgroundColor: '#f8f9fa', // Light neutral background to make the blue pop
        //   border: '1px solid #A0B4CC',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {/* Header Section */}
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Typography 
            variant="h4" 
            component="h2" 
            sx={{ 
              color: '#000000', 
              fontWeight: 800,
              letterSpacing: '0.5px',
              mb: 1
            }}
          >
            Architecture — Where VDAL Fits
          </Typography>
          <Box 
            sx={{ 
              width: '60px', 
              height: '4px', 
              backgroundColor: '#1A4B81', 
              margin: '0 auto',
              borderRadius: '2px'
            }} 
          />
        </Box>

        {/* Image Container */}
        <Box 
          sx={{
            width: '100%',
            position: 'relative',
            borderRadius: '8px',
            overflow: 'hidden',
            backgroundColor: '#ffffff',
            boxShadow: '0 4px 20px rgba(26, 75, 129, 0.1)',
            border: '1px solid #D9E5F2',
            p: 2
          }}
        >
          <Box
            component="img"
            src={imagePath}
            alt="VDAL Architecture Diagram"
            sx={{
              width: '100%',
              height: 'auto',
              display: 'block',
              objectFit: 'contain'
            }}
          />
        </Box>

        {/* Caption / Footer (Optional) */}
        <Typography 
          variant="body2" 
          sx={{ 
            mt: 3, 
            color: '#000000', 
            fontWeight: 500,
            opacity: 0.8 
          }}
        >
          Virtual Data Access Layer Integration Workflow
        </Typography>
      </Paper>
    </Container>
  );
};

export default ArchitectureView;