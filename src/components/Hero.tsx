"use client";
import React, { useState, useEffect } from 'react';
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
import { motion, AnimatePresence } from 'framer-motion';

type ClientLogo = {
  src: string;
  alt: string;
  scale?: number; // optional per-logo scale to compensate for padded assets
};

const Hero: React.FC = () => {
  const [view, setView] = useState<'hero' | 'clients'>('hero');

  // --- CONFIGURATION ---
  const colors = {
    primary: '#263C70',
    secondary: '#9DC668',
    tertiary: '#4EB8BC',
    quaternary: '#7B5F96',
  };

  // Add all your filenames here with optional scale overrides
  const clientLogos: ClientLogo[] = [
    { src: '/images/STC.png', alt: 'STC' },
    // ZATCA has lots of whitespace in the image; scale it up a bit
    { src: '/images/ZATCA.jpg', alt: 'ZATCA', scale: 1.55 },
    { src: '/images/databubanalytics.png', alt: 'DataHub Analytics' },
    // add as many as you want...
  ];

  // Initial single switch after 3 seconds
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setView('clients');
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, []);

  // Alternate useEffect to toggle views continuously
  useEffect(() => {
    const timer = setTimeout(() => {
      setView((prev) => (prev === 'hero' ? 'clients' : 'hero'));
    }, view === 'hero' ? 3000 : 5000);
    return () => clearTimeout(timer);
  }, [view]);

  const handleScrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.location.href = "/#contact";
  };

  return (
    <Box
      id="home"
      sx={{
        backgroundColor: '#f8f9fa', // fallback color if video can't load
        py: { xs: 6, md: 8 },
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/images/hero-poster.jpg" // optional: add a poster image
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          pointerEvents: 'none' // ensure video doesn't block interactions
        }}
      >
        {/* Provide multiple sources for better browser support */}
        {/* <source src="/videos/hero-bg.webm" type="video/webm" /> */}
        <source src="/images/option4.mp4" type="video/mp4" />
        {/* Fallback text */}
        Your browser does not support the video tag.
      </video>


      {/* Overlay to improve text readability */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.20) 100%)'
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <AnimatePresence mode="wait">
          {view === 'hero' ? (
            <motion.div
              key="hero"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.9 , ease: "easeInOut" }}
            >
              <Stack spacing={4} alignItems="center" textAlign="center">
                <Box sx={{ maxWidth: '1000px' }}>
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: '2.5rem', md: '4.5rem' },
                      fontWeight: 'bold',
                      color: colors.primary,
                      mb: 2,
                    }}
                  >
                    Unified, Governed,{' '}
                    <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', backgroundColor: colors.quaternary, borderRadius: '12px', px: 1.5, py: 0.5, mx: 1, color: 'white' }}>
                      <StorageIcon sx={{ fontSize: { xs: '2rem', md: '3rem' } }} />
                    </Box>
                  </Typography>

                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: '2.5rem', md: '4.5rem' },
                      fontWeight: 'bold',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: 2,
                      color: 'rgba(19, 18, 18, 0.85)'
                    }}
                  >
                    AI-Ready{' '}
                    <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', backgroundColor: colors.secondary, borderRadius: '12px', px: 1.5, py: 0.5, color: 'white' }}>
                      <TrendingUpIcon sx={{ fontSize: { xs: '2rem', md: '3rem' } }} />
                    </Box>
                    <span>Data Access</span>
                  </Typography>
                </Box>

                <Typography variant="h6" sx={{ color: 'rgba(19, 18, 18, 0.85)', maxWidth: '800px', fontSize: '1.2rem' }}>
                  VDAL is the strategic backbone for secure, real-time, and compliant enterprise data access.
                </Typography>

                <Button
                  variant="contained"
                  onClick={handleScrollToContact}
                  sx={{ backgroundColor: colors.primary, borderRadius: '50px', px: 6, py: 2, fontSize: '18px', textTransform: 'none' }}
                >
                  Book a Demo
                </Button>
              </Stack>
            </motion.div>
          ) : (
            <motion.div
              key="clients"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
            >
              <Stack spacing={6} alignItems="center" textAlign="center">
                <Box>
                  <Typography variant="h2" sx={{ fontWeight: 'bold', color: colors.primary, mb: 2 }}>
                    Our Strategic Partners
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'rgba(19, 18, 18, 0.85)' }}>
                    Trusted by Leading Organizations.
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { 
                      xs: '1fr', 
                      sm: 'repeat(2, 1fr)',
                      md: 'repeat(3, 1fr)' 
                    },
                    gap: { xs: 3, md: 4 },
                    width: '100%',
                    maxWidth: '1100px',
                    marginInline: 'auto',
                    px: { xs: 2, md: 0 },
                  }}
                >
                  {clientLogos.map((logo, index) => (
                    <motion.div
                      key={logo.src + index}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ delay: index * 0.15, duration: 0.6, ease: 'easeOut' }}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          minHeight: { xs: 120, md: 180 },
                          p: { xs: 3, md: 4 },
                          backgroundColor: 'rgba(255,255,255,0.90)',
                          borderRadius: 3,
                          border: '1px solid rgba(255,255,255,0.25)',
                          boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                            borderColor: colors.primary + '40',
                          }
                        }}
                      >
                        {/* Wrapper to allow per-logo scaling while keeping hover effects intact */}
                        <Box
                          sx={{
                            transform: `scale(${logo.scale ?? 1})`,
                            transformOrigin: 'center',
                            transition: 'transform 0.25s ease',
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Box
                            component="img"
                            src={logo.src}
                            alt={logo.alt || `Client ${index + 1}`}
                            loading="lazy"
                            decoding="async"
                            sx={{
                              maxHeight: { xs: '88px', md: '100px' },
                              maxWidth: { xs: '100%', md: '100%' },
                              width: 'auto',
                              height: 'auto',
                              objectFit: 'contain',
                              opacity: 0.95,
                              display: 'block',
                              transition: 'opacity 0.25s ease, transform 0.25s ease',
                              '&:hover': {
                                opacity: 1,
                                transform: 'translateY(-4px) scale(1.02)',
                              }
                            }}
                          />
                        </Box>
                      </Box>
                    </motion.div>
                  ))}
                </Box>

                <Button
                  variant="outlined"
                  onClick={() => setView('hero')}
                  sx={{ backgroundColor: colors.primary, color: '#fff', 
                    borderRadius: '50px', px: 6, py: 2, 
                    fontSize: '18px', textTransform: 'none' }}
                >
                  Back to Overview
                </Button>
              </Stack>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Box>
  );
};

export default Hero;