"use client";
import React from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Stack,
} from '@mui/material';
import {
  Storage as StorageIcon,
  TrendingUp as TrendingUpIcon,
} from '@mui/icons-material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Hero: React.FC = () => {
  const colors = {
    primary: '#263C70',    // Dark blue
    secondary: '#9DC668',  // Light green
    tertiary: '#4EB8BC',   // Teal
    quaternary: '#7B5F96', // Purple
  };

  // Sample client data - you can replace with actual logos later
  const clients = [
    { name: 'Enterprise Corp', industry: 'Finance' },
    { name: 'TechVision Inc', industry: 'Technology' },
    { name: 'DataFlow Systems', industry: 'Healthcare' },
    { name: 'Global Analytics', industry: 'Retail' },
    { name: 'SecureData Ltd', industry: 'Manufacturing' },
    { name: 'CloudFirst Co', industry: 'Insurance' },
    { name: 'InnovateTech', industry: 'Energy' },
    { name: 'SmartData Pro', industry: 'Telecom' },
  ];

  // Shared fadeInUp animation keyframes
  const fadeInUpKeyframes = {
    '0%': {
      opacity: 0,
      transform: 'translateY(30px)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  };

  return (
    <Box
      id="home"
      sx={{
        backgroundColor: '#f8f9fa',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        '& .swiper': {
          width: '100%',
          height: '100vh',
        },
        '& .swiper-pagination': {
          bottom: '40px !important',
        },
        '& .swiper-pagination-bullet': {
          width: '12px',
          height: '12px',
          backgroundColor: colors.primary,
          opacity: 0.3,
          transition: 'all 0.3s ease',
        },
        '& .swiper-pagination-bullet-active': {
          opacity: 1,
          width: '32px',
          borderRadius: '6px',
        },
      }}
    >
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={1000}
        style={{ width: '100%', height: '100vh' }}
      >
        {/* Slide 1: Main Hero Content */}
        <SwiperSlide>
          <Box
            sx={{
              py: { xs: 6, md: 8 },
              minHeight: '100vh',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Container maxWidth="lg">
              <Stack spacing={4} alignItems="center" textAlign="center">
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
                      animation: 'fadeInUp 0.8s ease-out',
                      '@keyframes fadeInUp': fadeInUpKeyframes,
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
                      animation: 'fadeInUp 0.8s ease-out 0.2s backwards',
                      '@keyframes fadeInUp': fadeInUpKeyframes,
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
                    animation: 'fadeInUp 0.8s ease-out 0.4s backwards',
                    '@keyframes fadeInUp': fadeInUpKeyframes,
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
                    animation: 'fadeInUp 0.8s ease-out 0.6s backwards',
                    '@keyframes fadeInUp': fadeInUpKeyframes,
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
                    animation: 'fadeInUp 0.8s ease-out 0.8s backwards',
                    '@keyframes fadeInUp': fadeInUpKeyframes,
                    '&:hover': {
                      backgroundColor: colors.primary,
                      boxShadow: '0 6px 20px rgba(38, 60, 112, 0.4)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Book a Demo
                </Button>
              </Stack>
            </Container>
          </Box>
        </SwiperSlide>

        {/* Slide 2: Clients Showcase */}
        <SwiperSlide>
          <Box
            sx={{
              py: { xs: 6, md: 8 },
              minHeight: '100vh',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Container maxWidth="lg">
              <Stack spacing={6} alignItems="center" textAlign="center">
                {/* Clients Header */}
                <Box>
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: { xs: '2rem', md: '3.5rem', lg: '4rem' },
                      fontWeight: 'bold',
                      lineHeight: 1.2,
                      color: '#000',
                      mb: 2,
                      animation: 'fadeInUp 0.8s ease-out',
                      '@keyframes fadeInUp': fadeInUpKeyframes,
                    }}
                  >
                    Trusted by Industry Leaders
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#666',
                      fontSize: { xs: '16px', md: '20px' },
                      fontWeight: 500,
                      maxWidth: '800px',
                      lineHeight: 1.6,
                      animation: 'fadeInUp 0.8s ease-out 0.2s backwards',
                      '@keyframes fadeInUp': fadeInUpKeyframes,
                    }}
                  >
                    Join 50+ enterprise teams transforming their data infrastructure with VDAL
                  </Typography>
                </Box>

                {/* Clients Grid */}
                <Box
                  sx={{
                    maxWidth: '1000px',
                    display: 'grid',
                    gridTemplateColumns: {
                      xs: 'repeat(2, 1fr)',
                      sm: 'repeat(3, 1fr)',
                      md: 'repeat(4, 1fr)',
                    },
                    gap: 3,
                    animation: 'fadeInUp 0.8s ease-out 0.4s backwards',
                    '@keyframes fadeInUp': fadeInUpKeyframes,
                  }}
                >
                  {clients.map((client, index) => (
                    <Box
                      key={client.name}
                      sx={{
                        p: 3,
                        backgroundColor: 'white',
                        borderRadius: '16px',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                        transition: 'all 0.3s ease',
                        animation: `fadeInUp 0.8s ease-out ${0.4 + index * 0.1}s backwards`,
                        '@keyframes fadeInUp': fadeInUpKeyframes,
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                        },
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          fontSize: { xs: '14px', md: '16px' },
                          color: colors.primary,
                          mb: 0.5,
                        }}
                      >
                        {client.name}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          color: '#999',
                          fontSize: { xs: '11px', md: '12px' },
                        }}
                      >
                        {client.industry}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                {/* CTA Button */}
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => {
                    const el = document.getElementById("clients");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }}
                  sx={{
                    backgroundColor: colors.secondary,
                    color: 'white',
                    textTransform: 'none',
                    borderRadius: '50px',
                    px: 4,
                    py: 1.5,
                    fontSize: '18px',
                    fontWeight: 600,
                    boxShadow: '0 4px 12px rgba(157, 198, 104, 0.3)',
                    animation: 'fadeInUp 0.8s ease-out 1.2s backwards',
                    '@keyframes fadeInUp': fadeInUpKeyframes,
                    '&:hover': {
                      backgroundColor: colors.secondary,
                      boxShadow: '0 6px 20px rgba(157, 198, 104, 0.4)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  View Success Stories
                </Button>
              </Stack>
            </Container>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Hero;