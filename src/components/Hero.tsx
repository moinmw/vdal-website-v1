"use client";
import React from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
//   Avatar,
//   AvatarGroup,
  Stack,
} from '@mui/material';
import {
  Storage as StorageIcon,
  TrendingUp as TrendingUpIcon,
} from '@mui/icons-material';

const Hero: React.FC = () => {
  const colors = {
    primary: '#263C70',    // Dark blue
    secondary: '#9DC668',  // Light green
    tertiary: '#4EB8BC',   // Teal
    quaternary: '#7B5F96', // Purple
  };

  return (
    <Box
    id="home"
      sx={{
        backgroundColor: '#f8f9fa',
        py: { xs: 6, md: 8 },
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4} alignItems="center" textAlign="center">
          {/* Trust Indicator */}


          {/* <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <AvatarGroup max={3}>
              <Avatar 
                sx={{ 
                  width: 32, 
                  height: 32,
                  backgroundColor: colors.primary 
                }}
              >
                A
              </Avatar>
              <Avatar 
                sx={{ 
                  width: 32, 
                  height: 32,
                  backgroundColor: colors.tertiary 
                }}
              >
                B
              </Avatar>
            </AvatarGroup>
            <Typography
              variant="body1"
              sx={{
                color: '#666',
                fontSize: { xs: '14px', md: '16px' },
                fontWeight: 500,
              }}
            >
              Trusted by 50+ Enterprise Teams
            </Typography>
          </Box> */}

          {/* Main Headline */}
          <Box sx={{ maxWidth: '1000px' }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem', lg: '4.5rem' },
                fontWeight: 'bold',
                lineHeight: 1.2,
                color: '#000',
                mb: 2,
              }}
            >
              Unified, Governed,{' '}
              <Box
                component="span"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  backgroundColor: colors.quaternary,
                  borderRadius: '12px',
                  px: 1.5,
                  py: 0.5,
                  mx: 1,
                  color: 'white',
                }}
              >
                <StorageIcon sx={{ fontSize: { xs: '2rem', md: '3rem' }, mr: 0.5 }} />
              </Box>
            </Typography>
            
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem', lg: '4.5rem' },
                fontWeight: 'bold',
                lineHeight: 1.2,
                color: '#000',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: { xs: 1, md: 2 },
              }}
            >
              AI-Ready{' '}
              <Box
                component="span"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  backgroundColor: colors.secondary,
                  borderRadius: '12px',
                  px: 1.5,
                  py: 0.5,
                  color: 'white',
                }}
              >
                <TrendingUpIcon sx={{ fontSize: { xs: '2rem', md: '3rem' }, mr: 0.5 }} />
              </Box>
              <span>Data Access</span>
            </Typography>
          </Box>

          {/* Primary Subtitle */}
          <Typography
            variant="h6"
            sx={{
              color: '#666',
              fontSize: { xs: '16px', md: '20px' },
              fontWeight: 500,
              maxWidth: '800px',
              lineHeight: 1.6,
              mb: 1,
            }}
          >
            VDAL is the strategic backbone for secure, real-time, and compliant enterprise data access without disrupting your existing data estates.
          </Typography>

          {/* Secondary Subtitle */}
          <Typography
            variant="body1"
            sx={{
              color: '#666',
              fontSize: { xs: '16px', md: '18px' },
              fontWeight: 400,
              maxWidth: '700px',
              lineHeight: 1.6,
            }}
          >
            One intelligent access layer that unifies analytics, automation, semantics, and governance on the latest trusted data.
          </Typography>

          {/* CTA Button */}
          <Button
            variant="contained"
            size="large"
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
              } else {
                window.location.href = "/#contact";
              }
            }}
            sx={{
              backgroundColor: colors.primary,
              color: 'white',
              textTransform: 'none',
              borderRadius: '50px',
              px: 4,
              py: 1.5,
              fontSize: '18px',
              fontWeight: 600,
              boxShadow: '0 4px 12px rgba(38, 60, 112, 0.3)',
              '&:hover': {
                backgroundColor: colors.primary,
                boxShadow: '0 6px 20px rgba(38, 60, 112, 0.4)',
              },
            }}
          >
            Book a Demo
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;